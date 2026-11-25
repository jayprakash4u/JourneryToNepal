import Image from "next/image";
import { UserCircle } from "lucide-react";
import { RECOMMEND_COPY } from "@/lib/recommend";
import { getContributorDisplay, type PlaceSubmission } from "@/types/submission";

interface ContributorBadgeProps {
  submission: PlaceSubmission;
  variant?: "card" | "detail";
}

export default function ContributorBadge({
  submission,
  variant = "card",
}: ContributorBadgeProps) {
  const contributor = getContributorDisplay(submission);
  const isDetail = variant === "detail";

  return (
    <div className={`flex items-center gap-2 ${isDetail ? "gap-3" : ""}`}>
      {contributor.profileImage ? (
        <Image
          src={contributor.profileImage}
          alt={contributor.name}
          width={isDetail ? 40 : 28}
          height={isDetail ? 40 : 28}
          className={`rounded-full object-cover ${isDetail ? "h-10 w-10" : "h-7 w-7"}`}
        />
      ) : (
        <span
          className={`inline-flex items-center justify-center rounded-full bg-primary/10 text-primary ${
            isDetail ? "h-10 w-10" : "h-7 w-7"
          }`}
        >
          <UserCircle className={isDetail ? "h-6 w-6" : "h-4 w-4"} aria-hidden />
        </span>
      )}
      <div>
        <p className={`text-text-muted ${isDetail ? "text-sm" : "text-xs"}`}>
          {RECOMMEND_COPY.contributorLabel}
        </p>
        <p
          className={`font-medium text-text-primary ${
            isDetail ? "text-base" : "text-sm"
          }`}
        >
          {contributor.name}
        </p>
      </div>
    </div>
  );
}
