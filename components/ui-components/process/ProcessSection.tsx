"use client";

import { cn } from "@/lib/utils";
import {
  SectionWrapper,
  SectionHeader,
} from "@/components/ui-components/shared";
import { Icon } from "@/components/ui";
import { motion } from "@/components/ui/motion";
import {
  staggerReveal,
  staggerRevealItem,
} from "@/components/ui/motion-variants";
import { getProcessSteps } from "@/config/helpers";

interface ProcessSectionProps {
  className?: string;
}

const ProcessSection = ({ className }: ProcessSectionProps) => {
  const processSteps = getProcessSteps();
  return (
    <SectionWrapper
      id="process"
      variant="alternate"
      className={cn("relative", className)}
    >
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-linear-to-bl from-primary/5 to-transparent rounded-full blur-3xl pointer-events-none" />

      <SectionHeader
        label="Our Process"
        title="How We Work"
        description="A proven methodology that delivers results on time and within budget."
      />

      {/* Process Timeline */}
      <div className="relative">
        {/* Connecting line - visible on larger screens */}
        <div className="hidden lg:block absolute top-24 left-0 right-0 h-0.5 bg-linear-to-r from-transparent via-border to-transparent" />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerReveal}
          className="grid md:grid-cols-2 lg:grid-cols-5 gap-8"
        >
          {processSteps.map((step, index) => (
            <motion.div
              key={step.id}
              variants={staggerRevealItem}
              className="relative"
            >
              {/* Step card */}
              <div className="h-full p-6 rounded-2xl bg-surface/50 border border-border/50 hover:border-primary/30 transition-colors">
                {/* Step number + Icon */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="relative">
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                      <Icon
                        name={step.icon}
                        size={24}
                        className="text-primary"
                      />
                    </div>
                    {/* Step number badge */}
                    <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-primary text-white text-xs font-bold flex items-center justify-center">
                      {step.id}
                    </span>
                  </div>

                  {/* Arrow connecting steps - visible on lg */}
                  {index < processSteps.length - 1 && (
                    <div className="hidden lg:flex absolute -right-4 top-10 text-border z-10">
                      <Icon name="ChevronRight" size={16} />
                    </div>
                  )}
                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-foreground-muted leading-relaxed mb-4">
                  {step.description}
                </p>

                {/* Deliverables */}
                <div className="pt-4 border-t border-border/30">
                  <p className="text-xs text-foreground-muted uppercase tracking-wider mb-2">
                    Deliverables
                  </p>
                  <div className="flex flex-wrap gap-1">
                    {step.deliverables.map((deliverable) => (
                      <span
                        key={deliverable}
                        className="text-xs px-2 py-1 rounded bg-surface text-foreground-muted"
                      >
                        {deliverable}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
        className="mt-16 text-center"
      >
        <p className="text-foreground-muted mb-4">
          Ready to start your project? Let's discuss your requirements.
        </p>
        <motion.a
          href="#contact"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-linear-to-r from-primary to-secondary text-white font-medium hover:opacity-90 transition-opacity"
          onClick={(e) => {
            e.preventDefault();
            document
              .getElementById("contact")
              ?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          Start a Conversation
          <Icon name="ArrowRight" size={18} />
        </motion.a>
      </motion.div>
    </SectionWrapper>
  );
};

export default ProcessSection;
