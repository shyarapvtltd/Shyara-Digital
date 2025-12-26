import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface AnimatedCardProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  hoverEffect?: "lift" | "glow" | "scale";
}

const AnimatedCard = ({ 
  children, 
  className, 
  delay = 0,
  hoverEffect = "lift" 
}: AnimatedCardProps) => {
  const hoverClasses = {
    lift: "hover:-translate-y-3 hover:shadow-2xl",
    glow: "hover:shadow-glow hover:shadow-rose/30",
    scale: "hover:scale-105",
  };

  return (
    <div
      className={cn(
        "bg-card rounded-2xl border border-rose-light/30 p-6 transition-all duration-500 ease-out",
        "shadow-lg shadow-rose/5",
        hoverClasses[hoverEffect],
        className
      )}
      style={{
        animationDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
};

export default AnimatedCard;
