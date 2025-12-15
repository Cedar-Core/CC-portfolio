"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface SectionHeaderProps {
  label: string;
  title: string;
  description?: string;
  className?: string;
  align?: "left" | "center";
}

const SectionHeader = ({
  label,
  title,
  description,
  className,
  align = "center",
}: SectionHeaderProps) => {
  return (
    <div
      className={cn(
        "mb-16",
        align === "center" ? "text-center" : "text-left",
        className
      )}
    >
      <motion.span
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="text-primary font-medium text-sm uppercase tracking-wider inline-block"
      >
        {label}
      </motion.span>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        className="text-3xl md:text-4xl font-bold text-foreground dark:text-white mt-3 mb-4"
      >
        {title}
      </motion.h2>
      {description && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className={cn(
            "text-foreground-secondary dark:text-foreground-muted",
            align === "center" && "max-w-2xl mx-auto"
          )}
        >
          {description}
        </motion.p>
      )}
    </div>
  );
};

export default SectionHeader;
