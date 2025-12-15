"use client";

import {
  SectionHeader,
  SectionWrapper,
} from "@/components/ui-components/shared";
import {
  Badge,
  Progress,
  FadeInUp,
  StaggerContainer,
  StaggerItem,
  motion,
} from "@/components/ui";
import { getSkills, config } from "@/config/exports";

interface SkillsSectionProps {
  className?: string;
}

const SkillsSection = ({ className }: SkillsSectionProps) => {
  const skills = getSkills();
  const categories = config.skillCategories.sort((a, b) => a.order - b.order);

  return (
    <SectionWrapper id="skills" className={className}>
      <SectionHeader
        label="Expertise"
        title="Skills & Technologies"
        description="Our team brings a diverse set of skills and expertise to every project."
      />

      {/* Category Badges */}
      <FadeInUp className="flex flex-wrap justify-center gap-2 mb-10">
        {categories.map((category, index) => (
          <motion.div
            key={category.id}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.2 }}
          >
            <Badge
              variant="outline"
              className="px-4 py-2 text-sm cursor-default"
            >
              {category.label}
            </Badge>
          </motion.div>
        ))}
      </FadeInUp>

      {/* Skills Grid */}
      <StaggerContainer className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {skills.slice(0, 10).map((skill) => (
          <StaggerItem key={skill.id}>
            <motion.div
              className="space-y-2"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <div className="flex items-center justify-between">
                <span className="font-medium text-foreground dark:text-white">
                  {skill.name}
                </span>
                <span className="text-sm text-foreground-muted">
                  {skill.proficiencyPercent}%
                </span>
              </div>
              <Progress value={skill.proficiencyPercent} className="h-2" />
            </motion.div>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </SectionWrapper>
  );
};

export default SkillsSection;
