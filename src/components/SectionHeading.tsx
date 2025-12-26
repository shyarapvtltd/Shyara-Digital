import { ReactNode } from "react";
import { cn } from "@/lib/utils";
import ScrollReveal from "./ScrollReveal";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  script?: string;
  centered?: boolean;
  className?: string;
  children?: ReactNode;
}

const SectionHeading = ({ 
  title, 
  subtitle, 
  script,
  centered = true,
  className,
  children 
}: SectionHeadingProps) => {
  return (
    <ScrollReveal className={cn("mb-12", centered && "text-center", className)}>
      {script && (
        <span className="font-script text-2xl md:text-3xl text-primary mb-2 block">
          {script}
        </span>
      )}
      <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      )}
      {children}
    </ScrollReveal>
  );
};

export default SectionHeading;
