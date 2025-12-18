"use client";

import { cn } from "@/lib/utils";
import {
  SectionHeader,
  SectionWrapper,
  Button,
} from "@/components/ui-components/shared";
import ProjectCard from "./ProjectCard";
import { getFeaturedProjects } from "@/config/helpers";
import { motion } from "@/components/ui/motion";
import {
  staggerReveal,
  staggerRevealItem,
  hoverLift,
  buttonPress,
} from "@/components/ui/motion-variants";

interface ProjectsSectionProps {
  className?: string;
}

const ProjectsSection = ({ className }: ProjectsSectionProps) => {
  const projects = getFeaturedProjects();

  return (
    <SectionWrapper
      id="projects"
      variant="alternate"
      className={cn("relative", className)}
    >
      {/* Background accent */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-96 bg-linear-to-t from-primary/5 to-transparent rounded-full blur-3xl pointer-events-none" />

      <SectionHeader
        label="Selected Work"
        title="Projects that define us"
        description="Real solutions for real problems. Here's a look at some of the systems we've built and the impact they've made."
      />

      {/* Projects grid */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerReveal}
        className="grid md:grid-cols-2 gap-8"
      >
        {projects.map((project) => (
          <motion.div key={project.id} variants={staggerRevealItem}>
            <motion.div variants={hoverLift} initial="rest" whileHover="hover">
              <ProjectCard
                title={project.title}
                category={project.category}
                description={project.shortDescription}
                technologies={project.techStack}
                gradient={`from-primary to-secondary`}
                href={`/projects/${project.slug}`}
              />
            </motion.div>
          </motion.div>
        ))}
      </motion.div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
        className="text-center mt-12"
      >
        <motion.div
          variants={buttonPress}
          initial="rest"
          whileHover="hover"
          whileTap="tap"
          className="inline-block"
        >
          <Button
            variant="outline"
            text="View All Projects"
            rightIconName="ArrowRight"
            className="rounded-full px-6 py-3 border-border hover:border-primary/50 hover:bg-primary-light transition-all"
          />
        </motion.div>
      </motion.div>
    </SectionWrapper>
  );
};

export default ProjectsSection;
