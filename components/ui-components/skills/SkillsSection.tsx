"use client";

import { cn } from "@/lib/utils";
import {
  SectionHeader,
  SectionWrapper,
} from "@/components/ui-components/shared";
import { Icon, motion } from "@/components/ui";
import { getSkills, config } from "@/config/exports";
import {
  staggerReveal,
  staggerRevealItem,
} from "@/components/ui/motion-variants";

interface SkillsSectionProps {
  className?: string;
}

const SkillsSection = ({ className }: SkillsSectionProps) => {
  const skills = getSkills();
  const categories = config.skillCategories.sort((a, b) => a.order - b.order);

  // Group skills by category
  const skillsByCategory = categories.reduce((acc, category) => {
    acc[category.id] = skills.filter((skill) => skill.category === category.id);
    return acc;
  }, {} as Record<string, typeof skills>);

  return (
    <SectionWrapper id="skills" className={cn("relative", className)}>
      {/* Background accent */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-96 h-96 bg-linear-to-l from-secondary/5 to-transparent rounded-full blur-3xl pointer-events-none" />

      <SectionHeader
        label="Tech Stack"
        title="Technologies we master"
        description="We stay current with the modern tools and frameworks that power today's best software."
      />

      {/* Technology Grid */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerReveal}
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {categories.slice(0, 6).map((category) => (
          <motion.div
            key={category.id}
            variants={staggerRevealItem}
            className="group"
          >
            <div className="p-6 rounded-2xl bg-surface/30 border border-border/30 hover:border-primary/30 transition-colors h-full">
              {/* Category header */}
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-primary-light flex items-center justify-center">
                  <Icon
                    name={category.icon}
                    size={20}
                    className="text-primary"
                  />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">
                    {category.label}
                  </h3>
                  <p className="text-xs text-foreground-muted">
                    {category.description}
                  </p>
                </div>
              </div>

              {/* Skills list */}
              <div className="flex flex-wrap gap-2">
                {skillsByCategory[category.id]?.slice(0, 6).map((skill) => (
                  <span
                    key={skill.id}
                    className="px-3 py-1.5 rounded-full bg-background text-sm text-foreground-muted border border-border/50 hover:border-primary/50 hover:text-foreground transition-colors cursor-default"
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Featured technologies row */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
        className="mt-12 text-center"
      >
        <p className="text-xs text-foreground-muted uppercase tracking-widest mb-4">
          Featured Expertise
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          {skills
            .filter((s) => s.featured)
            .slice(0, 6)
            .map((skill) => (
              <motion.div
                key={skill.id}
                whileHover={{ y: -4 }}
                className="px-6 py-3 rounded-xl bg-surface border border-border/50 hover:border-primary/30 transition-all"
              >
                <span className="font-medium text-foreground">
                  {skill.name}
                </span>
                <span className="text-xs text-foreground-muted ml-2">
                  {skill.yearsOfExperience}+ yrs
                </span>
              </motion.div>
            ))}
        </div>
      </motion.div>
    </SectionWrapper>
  );
};

export default SkillsSection;
