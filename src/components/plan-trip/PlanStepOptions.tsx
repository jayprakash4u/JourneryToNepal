import { classNames } from "@/utils";

interface PlanStepOptionsProps<T extends string | number> {
  label: string;
  options: { value: T; label: string }[];
  value: T | null;
  onChange: (value: T) => void;
}

export default function PlanStepOptions<T extends string | number>({
  label,
  options,
  value,
  onChange,
}: PlanStepOptionsProps<T>) {
  return (
    <fieldset>
      <legend className="mb-3 text-sm font-semibold text-text-primary">{label}</legend>
      <div className="flex flex-wrap gap-2">
        {options.map((option) => {
          const isSelected = value === option.value;

          return (
            <button
              key={String(option.value)}
              type="button"
              onClick={() => onChange(option.value)}
              aria-pressed={isSelected}
              className={classNames(
                "rounded-md border px-4 py-2.5 text-sm font-medium transition-all",
                isSelected
                  ? "border-primary bg-primary/10 text-primary shadow-sm"
                  : "border-border bg-surface text-text-secondary hover:border-primary/30 hover:text-text-primary"
              )}
            >
              {option.label}
            </button>
          );
        })}
      </div>
    </fieldset>
  );
}
