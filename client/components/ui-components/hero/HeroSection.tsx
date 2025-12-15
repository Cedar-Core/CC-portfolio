"use client";

import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui-components/shared";
import {
  getStatistics,
  getAvailability,
  getPersonalInfo,
  getCTA,
} from "@/config/helpers";
import {
  motion,
  FadeInUp,
  staggerContainer,
  staggerItem,
  defaultTransition,
} from "@/components/ui/motion";

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
        "min-h-screen flex items-center justify-center pt-16 px-6 bg-background",
        className
      )}
    >
      <div className="max-w-4xl mx-auto text-center">
        {/* Badge */}
        {availability.status === "available" && (
          <FadeInUp delay={0}>
            <Badge variant="success" className="mb-8 px-4 py-2 text-sm gap-2">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              {availability.message}
            </Badge>
          </FadeInUp>
        )}

        {/* Main Heading */}
        <FadeInUp delay={0.1}>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground dark:text-white leading-tight mb-6">
            We Build{" "}
            <span className="bg-linear-to-r from-primary to-secondary bg-clip-text text-transparent">
              Digital Experiences
            </span>{" "}
            That Matter
          </h1>
        </FadeInUp>

        {/* Subheading */}
        <FadeInUp delay={0.2}>
          <p className="text-lg md:text-xl text-foreground-secondary dark:text-foreground-muted max-w-2xl mx-auto mb-10">
            {personal.shortBio}
          </p>
        </FadeInUp>

        {/* CTA Buttons */}
        <FadeInUp delay={0.3}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
              <Button
                text={cta?.primaryButton.text || "View Our Work"}
                className="w-full sm:w-auto px-8 py-6 rounded-xl bg-linear-to-r from-primary to-secondary hover:opacity-90"
                onClick={() => {
                  document
                    .querySelector(cta?.primaryButton.href || "#projects")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
              />
            </motion.div>
            {cta?.secondaryButton && (
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button
                  variant="outline"
                  text={cta.secondaryButton.text}
                  className="w-full sm:w-auto px-8 py-6 rounded-xl"
                  onClick={() => {
                    document
                      .querySelector(cta.secondaryButton!.href)
                      ?.scrollIntoView({ behavior: "smooth" });
                  }}
                />
              </motion.div>
            )}
          </div>
        </FadeInUp>

        {/* Stats */}
        {stats.length > 0 && (
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
            className="grid grid-cols-3 gap-8 mt-16 pt-16 border-t border-border"
          >
            {stats.slice(0, 3).map((stat, index) => (
              <motion.div
                key={stat.id}
                variants={staggerItem}
                transition={{ ...defaultTransition, delay: index * 0.1 }}
              >
                <div className="text-3xl md:text-4xl font-bold text-foreground dark:text-white">
                  {stat.value}
                  {stat.suffix}
                </div>
                <div className="text-sm text-foreground-muted mt-1">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default HeroSection;
