export type QuestionStatus = "pending" | "approved" | "hidden";

export interface PlaceAnswer {
  id: string;
  questionId: string;
  userId: string;
  authorName: string;
  authorProfileImage?: string;
  text: string;
  upvotes: string[];
  createdAt: string;
}

export interface PlaceQuestion {
  id: string;
  placeId: string;
  userId: string;
  authorName: string;
  authorProfileImage?: string;
  text: string;
  status: QuestionStatus;
  bestAnswerId?: string;
  answers: PlaceAnswer[];
  createdAt: string;
}

export function getQuestionScore(question: PlaceQuestion) {
  const answerScore = question.answers.reduce(
    (sum, answer) => sum + answer.upvotes.length,
    0
  );
  const bestBonus = question.bestAnswerId ? 5 : 0;
  return answerScore + bestBonus;
}

export function sortQuestionsByHelpfulness(questions: PlaceQuestion[]) {
  return [...questions].sort((a, b) => {
    const scoreDiff = getQuestionScore(b) - getQuestionScore(a);
    if (scoreDiff !== 0) return scoreDiff;
    return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
  });
}
