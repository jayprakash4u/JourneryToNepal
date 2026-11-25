import type { TrustPoint } from "@/lib/trust";

interface TrustPointCardProps {
  point: TrustPoint;
}

export default function TrustPointCard({ point }: TrustPointCardProps) {
  const Icon = point.icon;

  return (
    <div className="flex h-full flex-col rounded-md border border-border bg-surface p-6 shadow-sm">
      <span className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-md bg-primary/10 text-primary">
        <Icon className="h-5 w-5" aria-hidden />
      </span>
      <h3 className="mb-2 text-base font-bold text-primary">{point.title}</h3>
      <p className="text-sm leading-relaxed text-text-secondary">{point.description}</p>
    </div>
  );
}
