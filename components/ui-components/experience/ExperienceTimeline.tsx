"use client";

import { cn } from "@/lib/utils";
import {
  SectionHeader,
  SectionWrapper,
} from "@/components/ui-components/shared";
import { Icon } from "@/components/ui";
import { getExperiences } from "@/config/helpers";
import { motion, viewportSettings } from "@/components/ui/motion";
import {
  staggerReveal,
  staggerRevealItem,
} from "@/components/ui/motion-variants";

interface ExperienceTimelineProps {
  className?: string;
}

const ExperienceTimeline = ({ className }: ExperienceTimelineProps) => {
  const experiences = getExperiences();

  // Convert experiences to timeline events format
  const events = experiences.map((exp) => ({
    year: new Date(exp.startDate).getFullYear().toString(),
    title: exp.role,
    company: exp.company,
    description: exp.description,
    highlights: exp.highlights || [],
    icon: exp.current ? "Sparkles" : "Building",
    current: exp.current,
  }));

  return (
    <SectionWrapper
      id="experience"
      variant="alternate"
      className={cn("relative", className)}
    >
      {/* Background accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-lg h-96 bg-linear-to-b from-primary/5 to-transparent rounded-full blur-3xl pointer-events-none" />

      <SectionHeader
        label="Track Record"
        title="Experience & milestones"
        description="A timeline of growth, achievements, and the projects that shaped our expertise."
      />

      <div className="relative max-w-4xl mx-auto">
        {/* Timeline Line */}
        <motion.div
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={viewportSettings}
          transition={{ duration: 1, ease: "easeOut" }}
          style={{ originY: 0 }}
          className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-linear-to-b from-primary/50 via-border to-transparent"
        />

        {/* Timeline Events */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerReveal}
          className="space-y-12"
        >
          {events.map((event, index) => (
            <motion.div
              key={index}
              variants={staggerRevealItem}
              className={cn(
                "relative grid md:grid-cols-2 gap-6 md:gap-12",
                index % 2 === 0 ? "md:text-right" : "md:text-left"
              )}
            >
              {/* Content */}
              <div
                className={cn(
                  "pl-12 md:pl-0",
                  index % 2 === 0 ? "md:order-1" : "md:order-2 md:pl-12"
                )}
              >
                <div className="p-6 rounded-2xl bg-surface/50 border border-border/30 hover:border-primary/30 transition-colors">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="px-3 py-1 text-xs font-mono bg-primary-light text-primary rounded-full">
                      {event.year}
                    </span>
                    {event.current && (
                      <span className="px-2 py-0.5 text-xs bg-cedar-light text-cedar rounded-full">
                        Current
                      </span>
                    )}
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-1">
                    {event.title}
                  </h3>
                  {event.company && (
                    <p className="text-sm text-primary mb-3">{event.company}</p>
                  )}
                  <p className="text-sm text-foreground-muted leading-relaxed">
                    {event.description}
                  </p>

                  {/* Highlights */}
                  {event.highlights.length > 0 && (
                    <div className="mt-4 pt-4 border-t border-border/30">
                      <div className="flex flex-wrap gap-2">
                        {event.highlights.slice(0, 3).map((highlight, i) => (
                          <span
                            key={i}
                            className="text-xs text-foreground-muted bg-surface px-2 py-1 rounded"
                          >
                            {highlight.text}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Empty space for alignment */}
              <div
                className={cn(
                  "hidden md:block",
                  index % 2 === 0 ? "md:order-2" : "md:order-1"
                )}
              />

              {/* Timeline Node */}
              <div className="absolute left-4 md:left-1/2 top-6 -translate-x-1/2 w-8 h-8 bg-background border-2 border-primary rounded-full flex items-center justify-center">
                <Icon name={event.icon} size={14} className="text-primary" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </SectionWrapper>
  );
};

export default ExperienceTimeline;
