export const PLACE_QA_COPY = {
  sectionTitle: "Ask About This Place",
  homepageTitle: "Traveler Questions",
  homepageSubtext:
    "Planning a visit? See what others are asking — or post your own question before you go.",
  sectionSubtext:
    "Planning a visit? Ask travelers and locals anything before you go.",
  selectPlace: "Select a place",
  viewAllQuestions: "View on place page",
  askPlaceholder: "Ask a question… e.g. Is this place safe during winter?",
  postQuestion: "Post Question",
  postAnswer: "Post Answer",
  answerPlaceholder: "Write your answer…",
  signInToAsk: "Sign in to ask a question",
  signInToAnswer: "Sign in to reply",
  noQuestions: "No questions yet. Be the first to ask!",
  pendingNote: "Your question is pending review and will appear once approved.",
  bestAnswer: "Best answer",
  upvote: "Helpful",
  upvoted: "Marked helpful",
  reply: "Reply",
  replies: (count: number) => (count === 1 ? "1 answer" : `${count} answers`),
} as const;

export interface QaPlaceOption {
  id: string;
  name: string;
  href: string;
}
