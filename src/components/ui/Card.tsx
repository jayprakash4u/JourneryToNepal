import { ReactNode } from "react";

interface CardProps {
  title: string;
  description: string;
  features: string[];
  icon?: ReactNode;
}

export default function Card({ title, description, features, icon }: CardProps) {
  return (
    <div className="overflow-hidden rounded-md border border-border bg-surface shadow-sm transition-shadow hover:shadow-md">
      <div className="flex h-48 items-center justify-center bg-secondary/10">
        {icon || <span className="font-semibold text-primary">{title}</span>}
      </div>
      <div className="p-6">
        <h4 className="mb-3 text-xl font-semibold text-text-primary">{title}</h4>
        <p className="mb-4 leading-relaxed text-text-secondary">{description}</p>
        <ul className="space-y-2 text-sm text-text-primary">
          {features.map((feature) => (
            <li key={feature} className="flex items-center gap-2">
              <span className="h-2 w-2 shrink-0 rounded-full bg-accent" aria-hidden />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
