"use client";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui-components/shared";
import {
  getStatistics,
  getAvailability,
  getPersonalInfo,
  getCTA,
} from "@/config/helpers";
import { motion, defaultTransition } from "@/components/ui/motion";
import {
  staggerReveal,
  staggerRevealItem,
  buttonPress,
} from "@/components/ui/motion-variants";

interface HeroSectionProps {
  className?: string;
}

const HeroSection = ({ className }: HeroSectionProps) => {
  const stats = getStatistics();
  const availability = getAvailability();
  const personal = getPersonalInfo();
  const cta = getCTA("hero");

  return (
    <section
      className={cn(
        "relative min-h-screen flex items-center justify-center pt-20 pb-16 px-6 overflow-hidden",
        className
      )}
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-background">
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-linear-to-b from-transparent via-transparent to-background" />

        {/* Grid pattern */}
        <div className="absolute inset-0 grid-pattern opacity-30" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Availability Badge */}
        {availability.status === "available" && (
          <motion.div
            initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ ...defaultTransition, delay: 0.1 }}
            className="flex justify-center mb-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cedar-light border border-cedar/20 text-cedar text-sm font-medium">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cedar opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cedar" />
              </span>
              {availability.message}
            </div>
          </motion.div>
        )}

        {/* Main Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ ...defaultTransition, delay: 0.2 }}
          className="text-center mb-6"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1]">
            <span className="text-foreground">We build </span>
            <span className="gradient-text">reliable</span>
            <br />
            <span className="text-foreground">software that </span>
            <span className="gradient-text">scales</span>
          </h1>
        </motion.div>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ ...defaultTransition, delay: 0.35 }}
          className="text-lg md:text-xl text-foreground-muted text-center max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          {personal.shortBio}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ ...defaultTransition, delay: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <motion.div
            variants={buttonPress}
            initial="rest"
            whileHover="hover"
            whileTap="tap"
          >
            <Button
              text={cta?.primaryButton.text || "Start a Project"}
              className="px-8 py-4 rounded-full bg-linear-to-r from-primary to-secondary hover:opacity-90 text-white font-medium shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-shadow"
              onClick={() => {
                document
                  .querySelector(cta?.primaryButton.href || "#contact")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            />
          </motion.div>
          {cta?.secondaryButton && (
            <motion.div
              variants={buttonPress}
              initial="rest"
              whileHover="hover"
              whileTap="tap"
            >
              <Button
                variant="outline"
                text={cta.secondaryButton.text}
                className="px-8 py-4 rounded-full border-border hover:border-primary/50 hover:bg-primary-light transition-all"
                onClick={() => {
                  document
                    .querySelector(cta.secondaryButton!.href)
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
              />
            </motion.div>
          )}
        </motion.div>

        {/* Stats Section */}
        {stats.length > 0 && (
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerReveal}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-12 border-t border-border/50"
          >
            {stats.slice(0, 4).map((stat) => (
              <motion.div
                key={stat.id}
                variants={staggerRevealItem}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold gradient-text mb-1">
                  {stat.value}
                  {stat.suffix}
                </div>
                <div className="text-sm text-foreground-muted">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* Trusted By / Tech Stack Preview */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="mt-16 text-center"
        >
          <p className="text-xs text-foreground-muted uppercase tracking-widest mb-4">
            Building with modern technologies
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6 text-foreground-muted/50">
            {[
              "Next.js",
              "React",
              "TypeScript",
              "Node.js",
              "PostgreSQL",
              "AWS",
            ].map((tech) => (
              <span key={tech} className="text-sm font-mono">
                {tech}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
