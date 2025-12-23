"use client";

import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Icon } from "@/components/ui";
import { SocialLinks, Button } from "@/components/ui-components/shared";
import {
  getFooterNavigation,
  getSocialLinks,
  getBranding,
  getPersonalInfo,
} from "@/config/helpers";
import { motion } from "framer-motion";
import {
  staggerReveal,
  staggerRevealItem,
} from "@/components/ui/motion-variants";

interface FooterProps {
  className?: string;
}

const Footer = ({ className }: FooterProps) => {
  const currentYear = new Date().getFullYear();
  const footerSections = getFooterNavigation();
  const socialLinks = getSocialLinks();
  const branding = getBranding();
  const personalInfo = getPersonalInfo();

  return (
    <footer
      className={cn(
        "relative bg-[#010812] text-white overflow-hidden",
        className
      )}
    >
      {/* Subtle gradient accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-2xl h-px bg-linear-to-r from-transparent via-border to-transparent" />

      {/* Main CTA Section */}
      <div className="border-b border-border/20">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-2xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to build something{" "}
              <span className="gradient-text">exceptional</span>?
            </h2>
            <p className="text-foreground-muted mb-8">
              Let&apos;s discuss how we can help bring your vision to life with
              software that scales.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button
                  text="Start a Project"
                  className="rounded-full px-8 py-4 bg-linear-to-r from-primary to-secondary"
                  onClick={() => {
                    document
                      .getElementById("contact")
                      ?.scrollIntoView({ behavior: "smooth" });
                  }}
                />
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button
                  variant="outline"
                  text="View Our Work"
                  className="rounded-full px-8 py-4 border-border/50 hover:border-primary/50"
                  onClick={() => {
                    document
                      .getElementById("projects")
                      ?.scrollIntoView({ behavior: "smooth" });
                  }}
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Footer Links Section */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerReveal}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-12"
        >
          {/* Brand Column */}
          <motion.div variants={staggerRevealItem} className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Image
                src="/logo-dark.png"
                alt="Cedar Core Logo"
                loading="eager"
                width={28}
                height={28}
                className="rounded-lg"
              />
              <span className="font-semibold text-white">{branding.name}</span>
            </Link>
            <p className="text-foreground-muted text-sm mb-6 leading-relaxed">
              Building reliable, scalable software that drives real business
              impact.
            </p>
            <SocialLinks
              links={socialLinks.map((link) => ({
                name: link.platform,
                href: link.url,
                icon: link.icon,
              }))}
              className="[&>a]:bg-surface/50 [&>a]:text-foreground-muted [&>a:hover]:bg-primary/10 [&>a:hover]:text-primary"
            />
          </motion.div>

          {/* Navigation Columns */}
          {footerSections.slice(0, 2).map((section) => (
            <motion.div key={section.title} variants={staggerRevealItem}>
              <h4 className="font-medium text-white text-sm mb-4">
                {section.title}
              </h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-foreground-muted hover:text-white transition-colors text-sm"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}

          {/* Contact Column */}
          <motion.div variants={staggerRevealItem}>
            <h4 className="font-medium text-white text-sm mb-4">
              Get in Touch
            </h4>
            <ul className="space-y-3">
              {personalInfo.contact.slice(0, 3).map((contact) => (
                <li key={contact.type}>
                  <a
                    href={contact.href}
                    className="flex items-center gap-2 text-foreground-muted hover:text-white transition-colors text-sm group"
                  >
                    {contact.icon && (
                      <Icon
                        name={contact.icon}
                        size={14}
                        className="text-primary group-hover:text-primary"
                      />
                    )}
                    <span>{contact.value}</span>
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border/20">
        <div className="max-w-6xl mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-foreground-muted text-sm">
              © {currentYear} {branding.name}. Crafted with precision.
            </p>
            <div className="flex items-center gap-6">
              {footerSections.length > 2 &&
                footerSections[2].links.slice(0, 3).map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="text-foreground-muted hover:text-white transition-colors text-xs"
                  >
                    {link.label}
                  </a>
                ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
