"use client";

import { cn } from "@/lib/utils";
import { Icon } from "@/components/ui";

interface SocialLink {
  name: string;
  href: string;
  icon: string;
}

interface SocialLinksProps {
  links?: SocialLink[];
  className?: string;
  variant?: "default" | "filled";
  size?: "sm" | "md" | "lg";
}

const defaultLinks: SocialLink[] = [
  { name: "Twitter", href: "#", icon: "Twitter" },
  { name: "LinkedIn", href: "#", icon: "Linkedin" },
  { name: "GitHub", href: "#", icon: "Github" },
];

const SocialLinks = ({
  links = defaultLinks,
  className,
  variant = "default",
  size = "md",
}: SocialLinksProps) => {
  const sizeClasses = {
    sm: "w-8 h-8",
    md: "w-10 h-10",
    lg: "w-12 h-12",
  };

  const iconSizes = {
    sm: 14,
    md: 18,
    lg: 20,
  };

  const variantClasses = {
    default:
      "bg-surface dark:bg-surface text-foreground-secondary dark:text-foreground-muted hover:bg-primary-light dark:hover:bg-primary/20 hover:text-primary",
    filled: "bg-primary/10 text-primary hover:bg-primary hover:text-white",
  };

  return (
    <div className={cn("flex gap-3", className)}>
      {links.map((link) => (
        <a
          key={link.name}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            "rounded-lg flex items-center justify-center transition-colors",
            sizeClasses[size],
            variantClasses[variant]
          )}
          aria-label={link.name}
        >
          <Icon name={link.icon} size={iconSizes[size]} />
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;
