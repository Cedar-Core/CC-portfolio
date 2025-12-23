"use client";

import { cn } from "@/lib/utils";
import { SectionWrapper } from "@/components/ui-components/shared";
import { Icon } from "@/components/ui";
import { motion } from "@/components/ui/motion";
import {
  staggerReveal,
  staggerRevealItem,
} from "@/components/ui/motion-variants";
import { getClients, getClientTestimonials } from "@/config/helpers";

interface ClientsSectionProps {
  className?: string;
}

const ClientsSection = ({ className }: ClientsSectionProps) => {
  const clients = getClients();
  const testimonials = getClientTestimonials();

  return (
    <SectionWrapper id="clients" className={cn("relative", className)}>
      {/* Background accent */}
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-linear-to-tr from-secondary/5 to-transparent rounded-full blur-3xl pointer-events-none" />

      {/* Section Label */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <span className="text-sm font-mono text-primary uppercase tracking-widest">
          Trusted By
        </span>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3 mb-4">
          Companies That <span className="gradient-text">Trust Us</span>
        </h2>
        <p className="text-foreground-muted max-w-2xl mx-auto">
          From startups to enterprises, we've helped businesses across
          industries build software that drives results.
        </p>
      </motion.div>

      {/* Client Logos Grid */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerReveal}
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-20"
      >
        {clients.map((client) => (
          <motion.div
            key={client.name}
            variants={staggerRevealItem}
            whileHover={{ scale: 1.05 }}
            className="flex flex-col items-center justify-center p-6 rounded-xl bg-surface/30 border border-border/30 hover:border-primary/30 transition-all"
          >
            {/* Placeholder logo */}
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
              <Icon name="Building" size={24} className="text-primary/70" />
            </div>
            <span className="font-semibold text-foreground">{client.name}</span>
            <span className="text-xs text-foreground-muted">
              {client.industry}
            </span>
          </motion.div>
        ))}
      </motion.div>

      {/* Testimonials */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-8"
      >
        <h3 className="text-2xl font-bold text-foreground mb-2">
          What Our Clients Say
        </h3>
        <p className="text-foreground-muted">
          Real feedback from real partnerships
        </p>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerReveal}
        className="grid md:grid-cols-3 gap-6"
      >
        {testimonials.map((testimonial) => (
          <motion.div
            key={testimonial.id}
            variants={staggerRevealItem}
            className="relative p-6 rounded-2xl bg-surface/50 border border-border/50 hover:border-primary/30 transition-colors"
          >
            {/* Quote icon */}
            <div className="absolute -top-3 left-6">
              <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                <Icon name="Quote" size={16} className="text-white" />
              </div>
            </div>

            {/* Quote text */}
            <p className="text-foreground-muted leading-relaxed mt-4 mb-6 text-sm">
              "{testimonial.quote}"
            </p>

            {/* Author */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                <span className="text-primary font-semibold text-sm">
                  {testimonial.author
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </span>
              </div>
              <div>
                <p className="font-semibold text-foreground text-sm">
                  {testimonial.author}
                </p>
                <p className="text-xs text-foreground-muted">
                  {testimonial.role} at {testimonial.company}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </SectionWrapper>
  );
};

export default ClientsSection;
