import { cn } from "@/lib/utils";
import { Icon } from "@/components/ui";
import Image from "next/image";

interface ProjectCardProps {
  title: string;
  category: string;
  description: string;
  technologies: string[];
  imageUrl?: string;
  gradient?: string;
  href?: string;
  className?: string;
}

const ProjectCard = ({
  title,
  category,
  description,
  technologies,
  imageUrl,
  gradient = "from-primary to-secondary",
  href = "#",
  className,
}: ProjectCardProps) => {
  return (
    <div
      className={cn(
        "group relative h-full rounded-2xl overflow-hidden",
        "bg-surface/50 backdrop-blur-sm border border-border/50",
        "hover:border-primary/30 transition-all duration-300",
        className
      )}
    >
      {/* Project Image/Placeholder */}
      <div
        className={cn(
          "aspect-video bg-linear-to-br flex items-center justify-center overflow-hidden relative",
          gradient
        )}
      >
        {imageUrl ? (
          <Image
            src={imageUrl}
            alt={title}
            fill
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <>
            {/* Abstract pattern */}
            <div className="absolute inset-0 opacity-20">
              <div className="absolute top-1/4 left-1/4 w-32 h-32 border border-white/30 rounded-full" />
              <div className="absolute bottom-1/4 right-1/4 w-24 h-24 border border-white/20 rounded-full" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 border border-white/10 rounded-full" />
            </div>
            <div className="relative text-white/30 text-7xl font-bold">
              {title.charAt(0)}
            </div>
          </>
        )}

        {/* Category badge overlay */}
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-white text-xs font-medium">
            {category}
          </span>
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="text-foreground-muted text-sm leading-relaxed mb-4">
          {description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.slice(0, 4).map((tech, i) => (
            <span
              key={i}
              className="px-2 py-1 rounded-md bg-surface text-xs text-foreground-muted border border-border/50"
            >
              {tech}
            </span>
          ))}
          {technologies.length > 4 && (
            <span className="px-2 py-1 text-xs text-foreground-muted">
              +{technologies.length - 4} more
            </span>
          )}
        </div>

        {/* Link */}
        <a
          href={href}
          className="inline-flex items-center gap-2 text-primary font-medium text-sm group/link"
        >
          <span>View Case Study</span>
          <Icon
            name="ArrowRight"
            size={16}
            className="group-hover/link:translate-x-1 transition-transform"
          />
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
