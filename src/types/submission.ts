export interface User {
  id: string;
  name: string;
  email: string;
  profileImage?: string;
  isAdmin?: boolean;
}

export type SubmissionStatus = "pending" | "approved" | "rejected";

export type SubmissionCategory =
  | "adventure"
  | "culture"
  | "food"
  | "wildlife"
  | "scenic"
  | "spiritual";

export type DisplayNamePreference = "show" | "anonymous";

export interface PlaceLocation {
  latitude: number;
  longitude: number;
}

export interface PlaceSubmission {
  id: string;
  userId: string;
  contributorName: string;
  contributorProfileImage?: string;
  displayNamePreference: DisplayNamePreference;
  title: string;
  district: string;
  category: SubmissionCategory;
  description: string;
  reasonToVisit: string;
  location: PlaceLocation;
  images: string[];
  video?: string;
  status: SubmissionStatus;
  createdAt: string;
  reviewedAt?: string;
}

export interface PlaceSubmissionInput {
  title: string;
  district: string;
  category: SubmissionCategory;
  description: string;
  reasonToVisit: string;
  latitude: number;
  longitude: number;
  displayNamePreference: DisplayNamePreference;
}

export function getContributorDisplay(submission: PlaceSubmission) {
  if (submission.displayNamePreference === "anonymous") {
    return { name: "Anonymous", profileImage: undefined };
  }
  return {
    name: submission.contributorName,
    profileImage: submission.contributorProfileImage,
  };
}
