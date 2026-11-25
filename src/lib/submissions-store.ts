import { promises as fs } from "fs";
import path from "path";
import type { PlaceSubmission, SubmissionStatus } from "@/types/submission";

const DATA_DIR = path.join(process.cwd(), "data");
const DATA_FILE = path.join(DATA_DIR, "submissions.json");
const UPLOADS_DIR = path.join(process.cwd(), "public", "uploads", "submissions");

interface SubmissionStore {
  submissions: PlaceSubmission[];
}

declare global {
  var __submissionStore: SubmissionStore | undefined;
}

function getMemoryStore(): SubmissionStore {
  if (!global.__submissionStore) {
    global.__submissionStore = { submissions: getSeedSubmissions() };
  }
  return global.__submissionStore;
}

function getSeedSubmissions(): PlaceSubmission[] {
  return [
    {
      id: "seed-rara-viewpoint",
      userId: "seed-user-1",
      contributorName: "Priya Sharma",
      displayNamePreference: "show",
      title: "Murma Viewpoint",
      district: "Mugu",
      category: "scenic",
      description:
        "A quiet ridge above Rara Lake with panoramic views of Nepal's largest lake and surrounding pine forests.",
      reasonToVisit:
        "Perfect for sunrise photography and a peaceful escape away from crowded trails.",
      location: { latitude: 29.505, longitude: 82.111 },
      images: [],
      status: "approved",
      createdAt: new Date("2025-11-12").toISOString(),
      reviewedAt: new Date("2025-11-13").toISOString(),
    },
    {
      id: "seed-bandipur-alley",
      userId: "seed-user-2",
      contributorName: "Anonymous",
      displayNamePreference: "anonymous",
      title: "Bandipur Stone Alley",
      district: "Tanahun",
      category: "culture",
      description:
        "A preserved Newari lane lined with traditional houses, local cafes, and mountain views at every turn.",
      reasonToVisit:
        "Feels like stepping back in time — ideal for slow walks and authentic hill-town culture.",
      location: { latitude: 27.936, longitude: 84.419 },
      images: [],
      status: "approved",
      createdAt: new Date("2025-12-01").toISOString(),
      reviewedAt: new Date("2025-12-02").toISOString(),
    },
  ];
}

async function ensureDataFile() {
  await fs.mkdir(DATA_DIR, { recursive: true });
  try {
    await fs.access(DATA_FILE);
  } catch {
    const initial: SubmissionStore = { submissions: getSeedSubmissions() };
    await fs.writeFile(DATA_FILE, JSON.stringify(initial, null, 2), "utf-8");
  }
}

async function readFromDisk(): Promise<SubmissionStore> {
  await ensureDataFile();
  const raw = await fs.readFile(DATA_FILE, "utf-8");
  const store = JSON.parse(raw) as SubmissionStore;

  if (store.submissions.length === 0) {
    store.submissions = getSeedSubmissions();
    await writeToDisk(store);
  }

  return store;
}

async function writeToDisk(store: SubmissionStore) {
  await ensureDataFile();
  await fs.writeFile(DATA_FILE, JSON.stringify(store, null, 2), "utf-8");
}

export async function getAllSubmissions(): Promise<PlaceSubmission[]> {
  try {
    const store = await readFromDisk();
    return store.submissions;
  } catch {
    return getMemoryStore().submissions;
  }
}

export async function getSubmissionsByStatus(
  status: SubmissionStatus
): Promise<PlaceSubmission[]> {
  const submissions = await getAllSubmissions();
  return submissions
    .filter((submission) => submission.status === status)
    .sort(
      (a, b) =>
        new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    );
}

export async function getSubmissionById(
  id: string
): Promise<PlaceSubmission | undefined> {
  const submissions = await getAllSubmissions();
  return submissions.find((submission) => submission.id === id);
}

export async function saveSubmission(
  submission: PlaceSubmission
): Promise<PlaceSubmission> {
  try {
    const store = await readFromDisk();
    store.submissions.unshift(submission);
    await writeToDisk(store);
  } catch {
    getMemoryStore().submissions.unshift(submission);
  }
  return submission;
}

export async function updateSubmissionStatus(
  id: string,
  status: SubmissionStatus
): Promise<PlaceSubmission | null> {
  try {
    const store = await readFromDisk();
    const index = store.submissions.findIndex((submission) => submission.id === id);
    if (index === -1) return null;

    store.submissions[index] = {
      ...store.submissions[index],
      status,
      reviewedAt: new Date().toISOString(),
    };
    await writeToDisk(store);
    return store.submissions[index];
  } catch {
    const store = getMemoryStore();
    const index = store.submissions.findIndex((submission) => submission.id === id);
    if (index === -1) return null;

    store.submissions[index] = {
      ...store.submissions[index],
      status,
      reviewedAt: new Date().toISOString(),
    };
    return store.submissions[index];
  }
}

export async function saveSubmissionFiles(
  submissionId: string,
  images: File[],
  video?: File | null
) {
  const imagePaths: string[] = [];
  const submissionDir = path.join(UPLOADS_DIR, submissionId);
  await fs.mkdir(submissionDir, { recursive: true });

  for (const [index, image] of images.entries()) {
    const buffer = Buffer.from(await image.arrayBuffer());
    const extension = path.extname(image.name) || ".jpg";
    const filename = `image-${index + 1}${extension}`;
    const filePath = path.join(submissionDir, filename);
    await fs.writeFile(filePath, buffer);
    imagePaths.push(`/uploads/submissions/${submissionId}/${filename}`);
  }

  let videoPath: string | undefined;
  if (video && video.size > 0) {
    const buffer = Buffer.from(await video.arrayBuffer());
    const extension = path.extname(video.name) || ".mp4";
    const filename = `video${extension}`;
    const filePath = path.join(submissionDir, filename);
    await fs.writeFile(filePath, buffer);
    videoPath = `/uploads/submissions/${submissionId}/${filename}`;
  }

  return { imagePaths, videoPath };
}

export async function updateSubmissionMedia(
  id: string,
  images: string[],
  video?: string
) {
  try {
    const store = await readFromDisk();
    const index = store.submissions.findIndex((submission) => submission.id === id);
    if (index === -1) return null;

    store.submissions[index] = {
      ...store.submissions[index],
      images,
      video,
    };
    await writeToDisk(store);
    return store.submissions[index];
  } catch {
    const store = getMemoryStore();
    const index = store.submissions.findIndex((submission) => submission.id === id);
    if (index === -1) return null;

    store.submissions[index] = {
      ...store.submissions[index],
      images,
      video,
    };
    return store.submissions[index];
  }
}
