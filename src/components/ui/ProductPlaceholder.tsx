import { cn } from "@/lib/utils";
import Logo from "@/components/ui/Logo";

interface ProductPlaceholderProps {
  label?: string;
  sublabel?: string;
  className?: string;
  showLogo?: boolean;
  size?: "sm" | "md" | "lg";
}

export default function ProductPlaceholder({
  label = "Bientôt disponible",
  sublabel,
  className,
  showLogo = true,
  size = "md",
}: ProductPlaceholderProps) {
  return (
    <div
      className={cn(
        "relative w-full h-full bg-black-brand flex flex-col items-center justify-center overflow-hidden",
        className
      )}
    >
      <div className="absolute inset-0 opacity-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "repeating-linear-gradient(45deg, #c9a227 0, #c9a227 1px, transparent 0, transparent 50%)",
            backgroundSize: "12px 12px",
          }}
        />
      </div>
      <div className="absolute top-0 right-0 w-24 h-24 bg-gold/10 rounded-bl-full" />
      <div className="absolute bottom-0 left-0 w-16 h-16 bg-gold/5 rounded-tr-full" />

      {showLogo && (
        <Logo
          alt=""
          size="sm"
          className={cn("mb-3 opacity-60", {
            "w-10 h-10": size === "sm",
            "w-14 h-14": size === "md",
            "w-20 h-20": size === "lg",
          })}
        />
      )}

      <p
        className={cn("relative text-gold font-medium tracking-widest uppercase", {
          "text-[10px]": size === "sm",
          "text-xs": size === "md",
          "text-sm": size === "lg",
        })}
      >
        {label}
      </p>
      {sublabel && (
        <p className="relative text-muted-light text-xs mt-1 tracking-wide">
          {sublabel}
        </p>
      )}
    </div>
  );
}
