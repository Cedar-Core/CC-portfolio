"use client";

import { cn } from "@/lib/utils";
import {
  SectionHeader,
  SectionWrapper,
} from "@/components/ui-components/shared";
import { getServices } from "@/config/helpers";
import { motion } from "@/components/ui/motion";
import {
  staggerReveal,
  staggerRevealItem,
} from "@/components/ui/motion-variants";
import { Icon } from "@/components/ui";

interface ServicesSectionProps {
  className?: string;
}

const ServicesSection = ({ className }: ServicesSectionProps) => {
  const services = getServices();

  return (
    <SectionWrapper id="services" className={cn("relative", className)}>
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-linear-to-bl from-primary/5 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-linear-to-tr from-secondary/5 to-transparent rounded-full blur-3xl pointer-events-none" />

      <SectionHeader
        label="Our Services"
        title="End-to-End Software Solutions"
        description="From concept to deployment, we provide comprehensive software development services tailored to your business needs."
      />

      {/* Services Grid - Clean icon card layout */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerReveal}
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {services.map((service) => (
          <motion.div
            key={service.id}
            variants={staggerRevealItem}
            whileHover={{ y: -8, scale: 1.02 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
            className="group"
          >
            <div className="h-full p-8 rounded-2xl glass-card hover:border-primary/50 transition-all duration-300 hover-glow">
              {/* Icon with glow */}
              <div className="relative w-16 h-16 rounded-2xl bg-linear-to-br from-primary/20 to-secondary/10 flex items-center justify-center mb-6 group-hover:from-primary/30 group-hover:to-secondary/20 transition-all">
                <div className="absolute inset-0 rounded-2xl bg-primary/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <Icon
                  name={service.icon}
                  size={32}
                  className="text-primary relative z-10"
                />
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-foreground-muted leading-relaxed mb-6">
                {service.shortDescription}
              </p>

              {/* Features list */}
              {service.features && service.features.length > 0 && (
                <ul className="space-y-2">
                  {service.features.slice(0, 4).map((feature, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-sm text-foreground-muted"
                    >
                      <Icon
                        name="Check"
                        size={16}
                        className="text-primary mt-0.5 shrink-0"
                      />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              )}

              {/* Learn more link */}
              <div className="mt-6 pt-4 border-t border-border/30">
                <motion.a
                  href={`/services/${service.id}`}
                  className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary-hover transition-colors"
                  whileHover={{ x: 4 }}
                >
                  Learn More
                  <Icon name="ArrowRight" size={16} />
                </motion.a>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Bottom CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
        className="mt-16 text-center"
      >
        <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-6 rounded-2xl bg-linear-to-r from-primary/10 via-secondary/10 to-primary/10 border border-primary/20">
          <div className="text-center sm:text-left">
            <p className="font-semibold text-foreground">
              Need a custom solution?
            </p>
            <p className="text-sm text-foreground-muted">
              Let's discuss your specific requirements.
            </p>
          </div>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="px-6 py-3 rounded-xl bg-linear-to-r from-primary to-secondary text-white font-medium hover:opacity-90 transition-opacity whitespace-nowrap"
            onClick={(e) => {
              e.preventDefault();
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Get a Quote
          </motion.a>
        </div>
      </motion.div>
    </SectionWrapper>
  );
};

export default ServicesSection;
