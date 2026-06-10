import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "new" | "sale" | "default";
  className?: string;
}

export default function Badge({
  children,
  variant = "default",
  className,
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-block px-3 py-1 text-xs font-semibold uppercase tracking-wider rounded-full",
        {
          "bg-gold text-black-brand": variant === "new",
          "bg-black-brand text-gold border border-gold/30": variant === "sale",
          "bg-ivory-dark text-muted": variant === "default",
        },
        className
      )}
    >
      {children}
    </span>
  );
}
