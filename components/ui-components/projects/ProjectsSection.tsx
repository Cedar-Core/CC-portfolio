"use client";

import { cn } from "@/lib/utils";
import {
  SectionHeader,
  SectionWrapper,
  Button,
} from "@/components/ui-components/shared";
import { Icon } from "@/components/ui";
import { getFeaturedProjects } from "@/config/helpers";
import { motion } from "@/components/ui/motion";
import {
  staggerReveal,
  staggerRevealItem,
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
        label="Case Studies"
        title="Projects That Deliver Results"
        description="Real solutions for real challenges. See how we've helped businesses transform their operations with custom software."
      />

      {/* Projects as Case Study Cards */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerReveal}
        className="space-y-8"
      >
        {projects.slice(0, 3).map((project, index) => (
          <motion.div
            key={project.id}
            variants={staggerRevealItem}
            className="group"
          >
            <div
              className={cn(
                "grid md:grid-cols-2 gap-8 p-8 rounded-2xl bg-surface/50 border border-border/50 hover:border-primary/30 transition-all",
                index % 2 === 1 && "md:[direction:rtl] md:[&>*]:[direction:ltr]"
              )}
            >
              {/* Project Image/Visual */}
              <div className="relative aspect-video rounded-xl overflow-hidden bg-linear-to-br from-primary to-secondary">
                {/* Abstract pattern placeholder */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="absolute inset-0 opacity-20">
                    <div className="absolute top-1/4 left-1/4 w-32 h-32 border border-white/30 rounded-full" />
                    <div className="absolute bottom-1/4 right-1/4 w-24 h-24 border border-white/20 rounded-full" />
                  </div>
                  <span className="text-white/30 text-8xl font-bold">
                    {project.title.charAt(0)}
                  </span>
                </div>

                {/* Category badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md text-white text-sm font-medium">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Project Details - Case Study Format */}
              <div className="flex flex-col justify-center">
                <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>

                {/* Challenge → Solution → Result format */}
                <div className="space-y-4 mb-6">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <Icon name="Target" size={16} className="text-primary" />
                      <span className="text-sm font-semibold text-foreground">
                        Challenge
                      </span>
                    </div>
                    <p className="text-sm text-foreground-muted pl-6">
                      {project.shortDescription}
                    </p>
                  </div>

                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <Icon
                        name="Lightbulb"
                        size={16}
                        className="text-primary"
                      />
                      <span className="text-sm font-semibold text-foreground">
                        Solution
                      </span>
                    </div>
                    <p className="text-sm text-foreground-muted pl-6">
                      Built a custom {project.category.toLowerCase()} using{" "}
                      {project.techStack.slice(0, 3).join(", ")} with focus on
                      scalability and performance.
                    </p>
                  </div>

                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <Icon
                        name="TrendingUp"
                        size={16}
                        className="text-primary"
                      />
                      <span className="text-sm font-semibold text-foreground">
                        Result
                      </span>
                    </div>
                    <p className="text-sm text-foreground-muted pl-6">
                      Delivered on time with improved efficiency and positive
                      client feedback.
                    </p>
                  </div>
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.techStack.slice(0, 5).map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-full bg-surface text-xs text-foreground-muted border border-border/50"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* View case study link */}
                <motion.a
                  href={`/projects/${project.slug}`}
                  className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all"
                  whileHover={{ x: 4 }}
                >
                  View Full Case Study
                  <Icon name="ArrowRight" size={18} />
                </motion.a>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* View All CTA */}
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
            className="rounded-xl px-8 py-4 border-border hover:border-primary/50 hover:bg-primary/5 transition-all font-medium"
          />
        </motion.div>
      </motion.div>
    </SectionWrapper>
  );
};

export default ProjectsSection;
