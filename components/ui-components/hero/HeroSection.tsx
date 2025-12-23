"use client";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui-components/shared";
import { Icon } from "@/components/ui";
import { getStatistics, getAvailability, getCTA } from "@/config/helpers";
import { motion } from "@/components/ui/motion";
import {
  staggerReveal,
  staggerRevealItem,
  buttonPress,
} from "@/components/ui/motion-variants";

interface HeroSectionProps {
  className?: string;
}

// Floating UI Panel Component for visual interest
const FloatingPanel = ({
  className,
  delay = 0,
  children,
}: {
  className?: string;
  delay?: number;
  children?: React.ReactNode;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20, scale: 0.95 }}
    animate={{ opacity: 1, y: 0, scale: 1 }}
    transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
    className={cn("floating-panel rounded-xl p-4", className)}
  >
    {children}
  </motion.div>
);

const HeroSection = ({ className }: HeroSectionProps) => {
  const stats = getStatistics();
  const availability = getAvailability();
  const cta = getCTA("hero");

  return (
    <section
      className={cn(
        "relative min-h-screen flex flex-col justify-center pt-24 pb-20 px-6 overflow-hidden",
        className
      )}
    >
      {/* Floating UI Panels - Visual depth elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-20">
        {/* Top left panel - System status */}
        <FloatingPanel
          className="absolute top-32 left-[5%] w-48 h-32 opacity-40 hidden lg:block"
          delay={0.8}
        >
          <div className="flex items-center gap-2 mb-2">
            <div className="w-2 h-2 rounded-full bg-cedar animate-pulse" />
            <span className="text-xs text-foreground-muted font-mono">
              System Status
            </span>
          </div>
          <div className="space-y-1.5">
            <div className="h-1.5 bg-primary/30 rounded-full w-full" />
            <div className="h-1.5 bg-primary/20 rounded-full w-3/4" />
            <div className="h-1.5 bg-primary/10 rounded-full w-1/2" />
          </div>
        </FloatingPanel>

        {/* Top right panel - Security */}
        <FloatingPanel
          className="absolute top-40 right-[8%] w-40 h-28 opacity-40 hidden lg:block"
          delay={1}
        >
          <div className="text-xs text-foreground-muted font-mono mb-2">
            Security
          </div>
          <Icon name="Shield" size={32} className="text-primary/50 mb-2" />
          <div className="text-xs text-cedar font-semibold">Protected</div>
        </FloatingPanel>

        {/* Bottom left panel - Performance */}
        <FloatingPanel
          className="absolute bottom-40 left-[8%] w-44 h-24 opacity-40 hidden lg:block"
          delay={1.2}
        >
          <div className="flex items-center gap-2">
            <Icon name="Cpu" size={20} className="text-primary/50" />
            <span className="text-xs text-foreground-muted font-mono">
              Performance
            </span>
          </div>
          <div className="text-2xl font-bold text-primary mt-2">99.9%</div>
        </FloatingPanel>

        {/* Bottom right panel - Tech stack */}
        <FloatingPanel
          className="absolute bottom-32 right-[5%] w-52 h-28 opacity-40 hidden lg:block"
          delay={1.4}
        >
          <div className="text-xs text-foreground-muted font-mono mb-2">
            Tech Stack
          </div>
          <div className="flex flex-wrap gap-1">
            {["React", "Node", "AWS", "K8s"].map((tech) => (
              <span
                key={tech}
                className="px-2 py-0.5 text-xs bg-primary/10 rounded text-primary/70 border border-primary/20"
              >
                {tech}
              </span>
            ))}
          </div>
        </FloatingPanel>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto w-full">
        {/* Main Content */}
        <div className="text-center">
          {/* Availability Badge */}
          {availability.status === "available" && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex justify-center mb-8"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-primary text-sm font-medium">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cedar opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-cedar" />
                </span>
                {availability.message}
              </div>
            </motion.div>
          )}

          {/* Problem Statement - Bold, dramatic like the image */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mb-4"
          >
            <span className="text-lg md:text-xl lg:text-2xl text-foreground-muted font-light tracking-wide">
              If your <span className="text-primary font-semibold">TECH</span>{" "}
              is slowing you down.
            </span>
          </motion.div>

          {/* Solution Statement - Hero headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight leading-[1.05] mb-8"
          >
            <span className="text-foreground">We can </span>
            <span className="gradient-text neon-text">solve</span>
            <br />
            <span className="text-foreground">the problem</span>
          </motion.h1>

          {/* Value Props - Feature checklist like the image */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12"
          >
            {[
              "Custom Software Solutions",
              "Scalable Backend Architecture",
              "Long-term Security & Stability",
            ].map((feature, i) => (
              <motion.div
                key={feature}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 + i * 0.1 }}
                className="flex items-center gap-2"
              >
                <div className="w-5 h-5 rounded bg-primary/20 flex items-center justify-center border border-primary/30">
                  <Icon name="Check" size={14} className="text-primary" />
                </div>
                <span className="text-sm text-foreground-muted">{feature}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* Tagline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="mb-10"
          >
            <p className="text-lg md:text-xl font-semibold text-foreground mb-2">
              LEAVE <span className="gradient-text">TECH WORRIES</span> BEHIND
            </p>
            <p className="text-foreground-muted">
              Focus on growth while we handle the tech.
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
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
                      .querySelector(cta.secondaryButton!.href || "#projects")
                      ?.scrollIntoView({ behavior: "smooth" });
                  }}
                />
              </motion.div>
            )}
          </motion.div>
        </div>

        {/* Stats Bar */}
        {stats.length > 0 && (
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerReveal}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 p-6 md:p-8 rounded-2xl glass-card"
          >
            {stats.slice(0, 4).map((stat) => (
              <motion.div
                key={stat.id}
                variants={staggerRevealItem}
                className="text-center group"
              >
                <div className="text-3xl md:text-4xl font-bold gradient-text mb-1 group-hover:animate-pulse">
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
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2 text-foreground-muted/50"
        >
          <span className="text-xs uppercase tracking-widest font-mono">
            Scroll
          </span>
          <Icon name="ChevronDown" size={20} />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
