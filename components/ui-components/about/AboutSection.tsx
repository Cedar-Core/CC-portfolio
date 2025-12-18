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
  hoverLift,
} from "@/components/ui/motion-variants";
import { getValues, getBranding, getPrinciples } from "@/config/helpers";

interface AboutSectionProps {
  className?: string;
}

const AboutSection = ({ className }: AboutSectionProps) => {
  const values = getValues();
  const branding = getBranding();
  const principles = getPrinciples();

  return (
    <SectionWrapper
      id="about"
      className={cn("relative overflow-hidden", className)}
    >
      {/* Background decorations */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-linear-to-r from-primary/5 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-linear-to-l from-secondary/5 to-transparent rounded-full blur-3xl pointer-events-none" />

      <SectionHeader
        label="How We Work"
        title="Engineering mindset, human approach"
        description={`At ${branding.name}, we combine technical rigor with creative problem-solving. We don't just write code—we craft systems that empower your business to thrive.`}
      />

      {/* Main content grid */}
      <div className="grid lg:grid-cols-2 gap-16 items-start">
        {/* Left: Engineering Principles */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerReveal}
          className="space-y-6"
        >
          <motion.div variants={staggerRevealItem}>
            <h3 className="text-sm font-mono text-primary uppercase tracking-widest mb-4">
              Our Principles
            </h3>
          </motion.div>

          {principles.map((principle) => (
            <motion.div key={principle.title} variants={staggerRevealItem}>
              <motion.div
                variants={hoverLift}
                initial="rest"
                whileHover="hover"
                className="group flex gap-4 p-4 rounded-xl bg-surface/50 border border-border/50 hover:border-primary/30 transition-colors"
              >
                <div className="w-10 h-10 rounded-lg bg-primary-light flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  <Icon
                    name={principle.icon || "LightBulb"}
                    size={20}
                    className="text-primary"
                  />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">
                    {principle.title}
                  </h4>
                  <p className="text-sm text-foreground-muted leading-relaxed">
                    {principle.description}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Right: Process / Tech Stack visualization */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative"
        >
          {/* Terminal-style process card */}
          <div className="rounded-2xl bg-[#0a1628] border border-border/50 overflow-hidden">
            {/* Terminal header */}
            <div className="flex items-center gap-2 px-4 py-3 border-b border-border/50">
              <div className="w-3 h-3 rounded-full bg-red-500/80" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <div className="w-3 h-3 rounded-full bg-green-500/80" />
              <span className="ml-4 text-xs text-foreground-muted font-mono">
                cedar-process.sh
              </span>
            </div>

            {/* Terminal content */}
            <div className="p-6 font-mono text-sm space-y-3">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="flex items-center gap-2"
              >
                <span className="text-primary">$</span>
                <span className="text-foreground-muted">
                  cedar init --project
                </span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
                className="space-y-1 pl-4"
              >
                <div className="text-cedar">✓ Discovery & Planning</div>
                <div className="text-cedar">✓ Architecture Design</div>
                <div className="text-cedar">✓ Iterative Development</div>
                <div className="text-cedar">✓ Testing & QA</div>
                <div className="text-cedar">✓ Deployment & Launch</div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8 }}
                className="flex items-center gap-2 pt-2"
              >
                <span className="text-primary">$</span>
                <span className="text-foreground-muted">project.status</span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 1 }}
                className="pl-4 text-foreground"
              >
                Ready for production 🚀
              </motion.div>
            </div>
          </div>

          {/* Values quick cards */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerReveal}
            className="grid grid-cols-2 gap-4 mt-6"
          >
            {values.slice(0, 4).map((value) => (
              <motion.div
                key={value.title}
                variants={staggerRevealItem}
                className="p-4 rounded-xl bg-surface/30 border border-border/30 text-center hover:border-primary/30 transition-colors"
              >
                <Icon
                  name={value.icon}
                  size={24}
                  className="text-primary mx-auto mb-2"
                />
                <h4 className="text-sm font-medium text-foreground">
                  {value.title}
                </h4>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
};

export default AboutSection;
