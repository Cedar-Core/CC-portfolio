"use client";

import { cn } from "@/lib/utils";
import {
  SectionHeader,
  SectionWrapper,
} from "@/components/ui-components/shared";
import { Icon } from "@/components/ui";
import ContactForm from "./ContactForm";
import { getContactLinks } from "@/config/helpers";
import { motion } from "@/components/ui/motion";
import {
  staggerReveal,
  staggerRevealItem,
  hoverLift,
} from "@/components/ui/motion-variants";

interface ContactSectionProps {
  className?: string;
}

const ContactSection = ({ className }: ContactSectionProps) => {
  const contactInfo = getContactLinks();

  return (
    <SectionWrapper id="contact" className={cn("relative", className)}>
      {/* Background accents */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-linear-to-br from-primary/5 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-linear-to-tl from-secondary/5 to-transparent rounded-full blur-3xl pointer-events-none" />

      <SectionHeader
        label="Contact"
        title="Let's build something together"
        description="Have a project in mind? We'd love to discuss how we can help bring your vision to life."
      />

      <div className="grid lg:grid-cols-5 gap-12">
        {/* Contact Form - Glass panel */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-3"
        >
          <div className="p-8 rounded-2xl glass-card">
            <ContactForm />
          </div>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="lg:col-span-2 space-y-6"
        >
          {/* Info Cards - Floating panels */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerReveal}
            className="space-y-4"
          >
            {contactInfo.map((info, index) => (
              <motion.div key={index} variants={staggerRevealItem}>
                <motion.div
                  variants={hoverLift}
                  initial="rest"
                  whileHover="hover"
                  className="group p-5 rounded-xl glass-card hover:border-primary/50 transition-all duration-300 hover-glow"
                >
                  <div className="flex items-start gap-4">
                    <div className="relative w-12 h-12 rounded-xl bg-linear-to-br from-primary/20 to-secondary/10 flex items-center justify-center shrink-0">
                      <div className="absolute inset-0 rounded-xl bg-primary/20 blur-lg opacity-0 group-hover:opacity-100 transition-opacity" />
                      <Icon
                        name={info.icon || "Mail"}
                        size={22}
                        className="text-primary relative z-10"
                      />
                    </div>
                    <div>
                      <p className="text-xs text-foreground-muted uppercase tracking-wider mb-1">
                        {info.label}
                      </p>
                      {info.href ? (
                        <a
                          href={info.href}
                          className="text-foreground font-medium hover:text-primary transition-colors"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-foreground font-medium">
                          {info.value}
                        </p>
                      )}
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>

          {/* Response time card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="p-6 rounded-2xl bg-linear-to-br from-primary/10 to-secondary/10 border border-primary/20"
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                <Icon name="Zap" size={16} className="text-primary" />
              </div>
              <h4 className="font-semibold text-foreground">Quick Response</h4>
            </div>
            <p className="text-sm text-foreground-muted mb-4">
              We typically respond within 24 hours. For urgent inquiries, feel
              free to reach out directly.
            </p>
            <div className="flex items-center gap-4 text-sm text-foreground-muted">
              <div className="flex items-center gap-1">
                <Icon name="Clock" size={14} className="text-primary" />
                <span>Mon - Fri</span>
              </div>
              <div className="flex items-center gap-1">
                <Icon name="Globe" size={14} className="text-primary" />
                <span>9am - 6pm PST</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
};

export default ContactSection;
