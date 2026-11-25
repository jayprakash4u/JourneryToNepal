import { promises as fs } from "fs";
import path from "path";
import type { PlaceAnswer, PlaceQuestion, QuestionStatus } from "@/types/qa";
import { sortQuestionsByHelpfulness } from "@/types/qa";

const DATA_DIR = path.join(process.cwd(), "data");
const DATA_FILE = path.join(DATA_DIR, "place-questions.json");

interface QaStore {
  questions: PlaceQuestion[];
}

declare global {
  var __qaStore: QaStore | undefined;
}

function getMemoryStore(): QaStore {
  if (!global.__qaStore) {
    global.__qaStore = { questions: getSeedQuestions() };
  }
  return global.__qaStore;
}

function getSeedQuestions(): PlaceQuestion[] {
  const winterQuestionId = "seed-q-rara-winter";
  const winterAnswerId = "seed-a-rara-winter";
  const raraLakeWinterId = "seed-q-rara-lake-winter";
  const raraLakeWinterAnswerId = "seed-a-rara-lake-winter";

  return [
    {
      id: raraLakeWinterId,
      placeId: "rara-lake",
      userId: "seed-user-3",
      authorName: "Rohan Karki",
      text: "Is Rara Lake accessible in winter?",
      status: "approved",
      bestAnswerId: raraLakeWinterAnswerId,
      createdAt: new Date("2026-01-08").toISOString(),
      answers: [
        {
          id: raraLakeWinterAnswerId,
          questionId: raraLakeWinterId,
          userId: "admin-demo",
          authorName: "Admin",
          text: "Roads may be blocked due to snow. Talcha airport flights are also irregular in winter. Best time is spring or autumn for reliable access.",
          upvotes: ["seed-user-1", "seed-user-2"],
          createdAt: new Date("2026-01-09").toISOString(),
        },
      ],
    },
    {
      id: "seed-q-pokhara-paragliding",
      placeId: "pokhara",
      userId: "seed-user-1",
      authorName: "Jay Prakash",
      text: "Is paragliding in Pokhara safe for first-timers?",
      status: "approved",
      createdAt: new Date("2026-02-01").toISOString(),
      answers: [
        {
          id: "seed-a-pokhara-paragliding",
          questionId: "seed-q-pokhara-paragliding",
          userId: "admin-demo",
          authorName: "Admin",
          text: "Yes — licensed operators fly tandem with experienced pilots. Mornings from Sarangkot are calmest. Book with registered companies only.",
          upvotes: ["seed-user-2"],
          createdAt: new Date("2026-02-02").toISOString(),
        },
      ],
    },
    {
      id: winterQuestionId,
      placeId: "seed-rara-viewpoint",
      userId: "seed-user-3",
      authorName: "Rohan Karki",
      text: "Is Rara Lake accessible in winter?",
      status: "approved",
      bestAnswerId: winterAnswerId,
      createdAt: new Date("2026-01-08").toISOString(),
      answers: [
        {
          id: winterAnswerId,
          questionId: winterQuestionId,
          userId: "admin-demo",
          authorName: "Admin",
          text: "Roads may be blocked due to snow. Talcha airport flights are also irregular in winter. Best time is spring or autumn for reliable access.",
          upvotes: ["seed-user-1", "seed-user-2"],
          createdAt: new Date("2026-01-09").toISOString(),
        },
      ],
    },
    {
      id: "seed-q-rara-cost",
      placeId: "seed-rara-viewpoint",
      userId: "seed-user-1",
      authorName: "Jay Prakash",
      text: "How much does it cost to reach Murma Viewpoint from Nepalgunj?",
      status: "approved",
      createdAt: new Date("2026-02-14").toISOString(),
      answers: [
        {
          id: "seed-a-rara-cost-1",
          questionId: "seed-q-rara-cost",
          userId: "seed-user-2",
          authorName: "Anonymous",
          text: "Flight to Talcha plus jeep to Rara is roughly NPR 15,000–20,000 one way per person, depending on season. Budget extra for permits and lodge stays.",
          upvotes: ["seed-user-3"],
          createdAt: new Date("2026-02-15").toISOString(),
        },
      ],
    },
  ];
}

async function ensureDataFile() {
  await fs.mkdir(DATA_DIR, { recursive: true });
  try {
    await fs.access(DATA_FILE);
  } catch {
    const initial: QaStore = { questions: getSeedQuestions() };
    await fs.writeFile(DATA_FILE, JSON.stringify(initial, null, 2), "utf-8");
  }
}

async function readFromDisk(): Promise<QaStore> {
  await ensureDataFile();
  const raw = await fs.readFile(DATA_FILE, "utf-8");
  const store = JSON.parse(raw) as QaStore;

  if (store.questions.length === 0) {
    store.questions = getSeedQuestions();
    await writeToDisk(store);
  }

  return store;
}

async function writeToDisk(store: QaStore) {
  await ensureDataFile();
  await fs.writeFile(DATA_FILE, JSON.stringify(store, null, 2), "utf-8");
}

async function withStore<T>(fn: (store: QaStore) => T | Promise<T>): Promise<T> {
  try {
    const store = await readFromDisk();
    const result = await fn(store);
    await writeToDisk(store);
    return result;
  } catch {
    const store = getMemoryStore();
    return fn(store);
  }
}

export async function getQuestionsByPlaceId(
  placeId: string,
  options?: { includePending?: boolean }
): Promise<PlaceQuestion[]> {
  let store: QaStore;
  try {
    store = await readFromDisk();
  } catch {
    store = getMemoryStore();
  }

  const questions = store.questions.filter((question) => {
    if (question.placeId !== placeId) return false;
    if (options?.includePending) return question.status !== "hidden";
    return question.status === "approved";
  });

  return sortQuestionsByHelpfulness(questions);
}

export async function getFeaturedQuestions(limit = 3): Promise<PlaceQuestion[]> {
  let store: QaStore;
  try {
    store = await readFromDisk();
  } catch {
    store = getMemoryStore();
  }

  const approved = store.questions.filter((question) => question.status === "approved");
  return sortQuestionsByHelpfulness(approved).slice(0, limit);
}

export async function getPendingQuestions(): Promise<PlaceQuestion[]> {
  let store: QaStore;
  try {
    store = await readFromDisk();
  } catch {
    store = getMemoryStore();
  }

  return store.questions
    .filter((question) => question.status === "pending")
    .sort(
      (a, b) =>
        new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    );
}

export async function getQuestionById(
  questionId: string
): Promise<PlaceQuestion | undefined> {
  let store: QaStore;
  try {
    store = await readFromDisk();
  } catch {
    store = getMemoryStore();
  }

  return store.questions.find((question) => question.id === questionId);
}

export async function saveQuestion(
  question: PlaceQuestion
): Promise<PlaceQuestion> {
  return withStore(async (store) => {
    store.questions.unshift(question);
    return question;
  });
}

export async function addAnswer(
  questionId: string,
  answer: PlaceAnswer
): Promise<PlaceQuestion | null> {
  return withStore(async (store) => {
    const index = store.questions.findIndex((item) => item.id === questionId);
    if (index === -1) return null;

    store.questions[index] = {
      ...store.questions[index],
      answers: [...store.questions[index].answers, answer],
    };

    return store.questions[index];
  });
}

export async function toggleAnswerUpvote(
  answerId: string,
  userId: string
): Promise<PlaceAnswer | null> {
  return withStore(async (store) => {
    for (const question of store.questions) {
      const answerIndex = question.answers.findIndex(
        (answer) => answer.id === answerId
      );
      if (answerIndex === -1) continue;

      const answer = question.answers[answerIndex];
      const hasUpvoted = answer.upvotes.includes(userId);
      const upvotes = hasUpvoted
        ? answer.upvotes.filter((id) => id !== userId)
        : [...answer.upvotes, userId];

      question.answers[answerIndex] = { ...answer, upvotes };
      return question.answers[answerIndex];
    }

    return null;
  });
}

export async function setBestAnswer(
  questionId: string,
  answerId: string
): Promise<PlaceQuestion | null> {
  return withStore(async (store) => {
    const index = store.questions.findIndex((item) => item.id === questionId);
    if (index === -1) return null;

    const question = store.questions[index];
    const answerExists = question.answers.some((answer) => answer.id === answerId);
    if (!answerExists) return null;

    store.questions[index] = {
      ...question,
      bestAnswerId: answerId,
    };

    return store.questions[index];
  });
}

export async function updateQuestionStatus(
  questionId: string,
  status: QuestionStatus
): Promise<PlaceQuestion | null> {
  return withStore(async (store) => {
    const index = store.questions.findIndex((item) => item.id === questionId);
    if (index === -1) return null;

    store.questions[index] = {
      ...store.questions[index],
      status,
    };

    return store.questions[index];
  });
}
