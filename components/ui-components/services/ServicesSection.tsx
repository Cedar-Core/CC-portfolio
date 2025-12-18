"use client";

import { cn } from "@/lib/utils";
import {
  SectionHeader,
  SectionWrapper,
} from "@/components/ui-components/shared";
import ServiceCard from "./ServiceCard";
import { getCapabilities, getServices } from "@/config/helpers";
import { motion } from "@/components/ui/motion";
import {
  staggerReveal,
  staggerRevealItem,
  hoverLift,
} from "@/components/ui/motion-variants";
import { Icon } from "@/components/ui";

interface ServicesSectionProps {
  className?: string;
}

const ServicesSection = ({ className }: ServicesSectionProps) => {
  const services = getServices();
  const capabilities = getCapabilities();

  return (
    <SectionWrapper
      id="services"
      variant="alternate"
      className={cn("relative", className)}
    >
      {/* Subtle background accent */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-linear-to-bl from-primary/5 to-transparent rounded-full blur-3xl pointer-events-none" />

      <SectionHeader
        label="What We Build"
        title="Software, systems, platforms"
        description="We partner with ambitious teams to build reliable, scalable software that drives real business impact."
      />

      {/* Quick capabilities ribbon */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="flex flex-wrap items-center justify-center gap-4 mb-12"
      >
        {capabilities.map((cap, i) => (
          <motion.div
            key={cap.label}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 + 0.3 }}
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-surface border border-border/50 text-sm text-foreground-muted hover:text-foreground hover:border-primary/50 transition-colors cursor-default"
          >
            <Icon name={cap.icon} size={16} className="text-primary" />
            <span>{cap.label}</span>
          </motion.div>
        ))}
      </motion.div>

      {/* Services grid */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerReveal}
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {services.map((service) => (
          <motion.div key={service.id} variants={staggerRevealItem}>
            <motion.div variants={hoverLift} initial="rest" whileHover="hover">
              <ServiceCard
                icon={service.icon}
                title={service.title}
                description={service.shortDescription}
                features={service.features}
              />
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </SectionWrapper>
  );
};

export default ServicesSection;
