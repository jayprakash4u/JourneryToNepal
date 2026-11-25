import type { SubmissionCategory } from "@/types/submission";

export const SUBMISSION_CATEGORIES: {
  value: SubmissionCategory;
  label: string;
}[] = [
  { value: "adventure", label: "Adventure" },
  { value: "culture", label: "Culture" },
  { value: "food", label: "Food" },
  { value: "wildlife", label: "Wildlife" },
  { value: "scenic", label: "Scenic" },
  { value: "spiritual", label: "Spiritual" },
];

export function getCategoryLabel(category: SubmissionCategory) {
  return SUBMISSION_CATEGORIES.find((item) => item.value === category)?.label ?? category;
}
