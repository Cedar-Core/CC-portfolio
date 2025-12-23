"use client";

import { cn } from "@/lib/utils";
import {
  SectionHeader,
  SectionWrapper,
} from "@/components/ui-components/shared";
import { Icon } from "@/components/ui";
import { motion } from "@/components/ui/motion";
import {
  staggerReveal,
  staggerRevealItem,
} from "@/components/ui/motion-variants";
import { getTechnologies } from "@/config/helpers";

interface TechExpertiseProps {
  className?: string;
}

const TechExpertise = ({ className }: TechExpertiseProps) => {
  const technologies = getTechnologies();
  return (
    <SectionWrapper
      id="technologies"
      variant="alternate"
      className={cn("relative", className)}
    >
      {/* Background accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[radial-gradient(circle,_var(--primary-light)_0%,_transparent_70%)] opacity-20 pointer-events-none" />

      <SectionHeader
        label="Tech Stack"
        title="Technologies We Master"
        description="We leverage cutting-edge technologies to build robust, scalable, and maintainable solutions for your business."
      />

      {/* Technology Grid */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerReveal}
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4"
      >
        {technologies.map((tech) => (
          <motion.div
            key={tech.name}
            variants={staggerRevealItem}
            whileHover={{ y: -8, scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
            className="group relative"
          >
            <div className="flex flex-col items-center p-6 rounded-2xl glass-card hover:border-primary/50 transition-all h-full hover-glow">
              {/* Icon with glow */}
              <div className="relative w-14 h-14 rounded-xl bg-linear-to-br from-primary/20 to-secondary/10 flex items-center justify-center mb-4 group-hover:from-primary/30 group-hover:to-secondary/20 transition-all">
                <div className="absolute inset-0 rounded-xl bg-primary/20 blur-lg opacity-0 group-hover:opacity-100 transition-opacity" />
                <Icon
                  name={tech.icon}
                  size={28}
                  className="text-primary relative z-10"
                />
              </div>

              {/* Name */}
              <h3 className="font-bold text-foreground text-center mb-1 group-hover:text-primary transition-colors">
                {tech.name}
              </h3>

              {/* Category */}
              <span className="text-xs text-foreground-muted font-mono">
                {tech.category}
              </span>

              {/* Experience badge - appears on hover */}
              <div className="absolute -top-2 -right-2 px-2.5 py-1 rounded-full bg-linear-to-r from-primary to-secondary text-white text-xs font-bold opacity-0 group-hover:opacity-100 transition-opacity shadow-lg shadow-primary/30">
                {tech.years}+ yrs
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Additional tech categories */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
        className="mt-12"
      >
        <div className="flex flex-wrap justify-center gap-3">
          {[
            "CI/CD Pipelines",
            "Microservices",
            "REST APIs",
            "WebSockets",
            "OAuth 2.0",
            "Unit Testing",
            "E2E Testing",
            "Agile/Scrum",
          ].map((item) => (
            <span
              key={item}
              className="px-4 py-2 rounded-full bg-surface border border-border/50 text-sm text-foreground-muted hover:text-foreground hover:border-primary/30 transition-colors cursor-default"
            >
              {item}
            </span>
          ))}
        </div>
      </motion.div>
    </SectionWrapper>
  );
};

export default TechExpertise;
