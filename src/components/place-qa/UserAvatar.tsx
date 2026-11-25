import Image from "next/image";
import { UserCircle } from "lucide-react";

interface UserAvatarProps {
  name: string;
  profileImage?: string;
  size?: "sm" | "md";
}

export default function UserAvatar({
  name,
  profileImage,
  size = "sm",
}: UserAvatarProps) {
  const dimensions = size === "md" ? "h-10 w-10" : "h-8 w-8";
  const iconSize = size === "md" ? "h-5 w-5" : "h-4 w-4";
  const pixelSize = size === "md" ? 40 : 32;

  if (profileImage) {
    return (
      <Image
        src={profileImage}
        alt={name}
        width={pixelSize}
        height={pixelSize}
        className={`rounded-full object-cover ${dimensions}`}
      />
    );
  }

  return (
    <span
      className={`inline-flex items-center justify-center rounded-full bg-primary/10 text-primary ${dimensions}`}
      aria-hidden
    >
      <UserCircle className={iconSize} />
    </span>
  );
}
