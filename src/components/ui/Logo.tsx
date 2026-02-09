import Image from "next/image";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

const sizes = {
  sm: { width: 32, height: 32 },
  md: { width: 40, height: 40 },
  lg: { width: 48, height: 48 },
};

export function Logo({ className, size = "md" }: LogoProps) {
  const { width, height } = sizes[size];

  return (
    <Image
      src="/logo.svg"
      alt="Daniel Urbina"
      width={width}
      height={height}
      className={cn("select-none", className)}
      priority
    />
  );
}
