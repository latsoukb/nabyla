import Image from "next/image";
import { assetPath } from "@/lib/utils";
import { cn } from "@/lib/utils";

interface LogoProps {
  alt?: string;
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
  priority?: boolean;
}

const sizes = {
  sm: "w-10 h-10",
  md: "w-14 h-14",
  lg: "w-28 h-28",
  xl: "w-56 h-56",
};

export default function Logo({
  alt = "Nabylaa",
  className,
  size = "sm",
  priority = false,
}: LogoProps) {
  return (
    <div className={cn("relative", sizes[size], className)}>
      <Image
        src={assetPath("/logo.png")}
        alt={alt}
        fill
        className="object-contain"
        priority={priority}
        unoptimized
      />
    </div>
  );
}
