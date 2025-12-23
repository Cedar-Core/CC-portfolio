import { cn } from "@/lib/utils";
import { Icon } from "@/components/ui";

interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
  features?: string[];
  className?: string;
}

const ServiceCard = ({
  icon,
  title,
  description,
  features = [],
  className,
}: ServiceCardProps) => {
  return (
    <div
      className={cn(
        "group relative h-full p-6 rounded-2xl",
        "bg-surface/50 backdrop-blur-sm border border-border/50",
        "hover:border-primary/30 hover:bg-surface/80",
        "transition-all duration-300",
        className
      )}
    >
      {/* Subtle glow on hover */}
      <div className="absolute inset-0 rounded-2xl bg-linear-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <div className="relative z-10">
        {/* Icon */}
        <div className="w-12 h-12 rounded-xl bg-primary-light flex items-center justify-center mb-4 group-hover:scale-105 transition-transform duration-300">
          <Icon name={icon} size={24} className="text-primary" />
        </div>

        {/* Title */}
        <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
          {title}
        </h3>

        {/* Description */}
        <p className="text-foreground-muted text-sm leading-relaxed mb-4">
          {description}
        </p>

        {/* Features List */}
        {features.length > 0 && (
          <ul className="space-y-2 border-t border-border/50 pt-4">
            {features.slice(0, 3).map((feature, index) => (
              <li
                key={index}
                className="flex items-center gap-2 text-sm text-foreground-muted"
              >
                <span className="w-1 h-1 rounded-full bg-primary" />
                {feature}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default ServiceCard;
