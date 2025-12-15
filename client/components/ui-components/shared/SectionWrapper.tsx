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
    default: "bg-background",
    alternate: "bg-background-secondary dark:bg-surface",
    dark: "bg-[#020a18] dark:bg-[#010812]",
  };

  return (
    <section
      id={id}
      className={cn("py-24 px-6", variantClasses[variant], className)}
    >
      <div className={cn("max-w-6xl mx-auto", containerClassName)}>
        {children}
      </div>
    </section>
  );
};

export default SectionWrapper;
