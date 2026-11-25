import { NextResponse } from "next/server";
import { getSessionUser } from "@/lib/session";
import { getSubmissionsByStatus } from "@/lib/submissions-store";
import type { SubmissionCategory } from "@/types/submission";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const status = searchParams.get("status") ?? "approved";
  const category = searchParams.get("category") as SubmissionCategory | null;
  const district = searchParams.get("district");

  if (!["pending", "approved", "rejected"].includes(status)) {
    return NextResponse.json({ error: "Invalid status." }, { status: 400 });
  }

  if (status !== "approved") {
    const user = await getSessionUser();
    if (!user?.isAdmin) {
      return NextResponse.json({ error: "Unauthorized." }, { status: 401 });
    }
  }

  let submissions = await getSubmissionsByStatus(
    status as "pending" | "approved" | "rejected"
  );

  if (category) {
    submissions = submissions.filter((item) => item.category === category);
  }

  if (district) {
    submissions = submissions.filter((item) => item.district === district);
  }

  return NextResponse.json({ submissions });
}

export async function POST(request: Request) {
  const user = await getSessionUser();
  if (!user) {
    return NextResponse.json({ error: "Sign in required." }, { status: 401 });
  }

  const formData = await request.formData();
  const title = String(formData.get("title") ?? "").trim();
  const district = String(formData.get("district") ?? "").trim();
  const category = String(formData.get("category") ?? "").trim();
  const description = String(formData.get("description") ?? "").trim();
  const reasonToVisit = String(formData.get("reasonToVisit") ?? "").trim();
  const latitude = Number(formData.get("latitude"));
  const longitude = Number(formData.get("longitude"));
  const displayNamePreference = String(formData.get("displayNamePreference") ?? "show");

  if (!title || !district || !category || !description || !reasonToVisit) {
    return NextResponse.json({ error: "Please fill in all required fields." }, { status: 400 });
  }

  if (!Number.isFinite(latitude) || !Number.isFinite(longitude)) {
    return NextResponse.json({ error: "Valid location is required." }, { status: 400 });
  }

  const images = formData
    .getAll("images")
    .filter((item): item is File => item instanceof File && item.size > 0);

  if (images.length === 0) {
    return NextResponse.json({ error: "At least one image is required." }, { status: 400 });
  }

  const videoFile = formData.get("video");
  const video = videoFile instanceof File && videoFile.size > 0 ? videoFile : null;

  const { randomUUID } = await import("crypto");
  const id = randomUUID();

  const { saveSubmission, saveSubmissionFiles, updateSubmissionMedia } = await import(
    "@/lib/submissions-store"
  );

  const submission = await saveSubmission({
    id,
    userId: user.id,
    contributorName: user.name,
    contributorProfileImage: user.profileImage,
    displayNamePreference: displayNamePreference === "anonymous" ? "anonymous" : "show",
    title,
    district,
    category: category as SubmissionCategory,
    description,
    reasonToVisit,
    location: { latitude, longitude },
    images: [],
    video: undefined,
    status: "pending",
    createdAt: new Date().toISOString(),
  });

  const { imagePaths, videoPath } = await saveSubmissionFiles(id, images, video);
  const updated = await updateSubmissionMedia(id, imagePaths, videoPath);

  return NextResponse.json({ submission: updated ?? submission }, { status: 201 });
}
