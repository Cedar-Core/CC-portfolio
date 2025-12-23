import { cn } from "@/lib/utils";

interface SectionWrapperProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
  containerClassName?: string;
  variant?: "default" | "alternate" | "dark";
}

const SectionWrapper = ({
  children,
  id,
  className,
  containerClassName,
  variant = "default",
}: SectionWrapperProps) => {
  const variantClasses = {
    default: "bg-transparent",
    alternate: "bg-transparent",
    dark: "bg-transparent",
  };

  return (
    <section
      id={id}
      className={cn(
        "relative py-24 md:py-32 px-6",
        variantClasses[variant],
        className
      )}
    >
      <div
        className={cn("relative z-10 max-w-6xl mx-auto", containerClassName)}
      >
        {children}
      </div>
    </section>
  );
};

export default SectionWrapper;
