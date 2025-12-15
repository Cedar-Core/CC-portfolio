import { cn } from "@/lib/utils";
import { Shad, Icon } from "@/components/ui";

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
    <Shad.Card
      className={cn(
        "group relative overflow-hidden hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 hover:-translate-y-1",
        className
      )}
    >
      {/* Gradient border effect on hover */}
      <div className="absolute inset-0 bg-linear-to-r from-primary to-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
      <div className="absolute inset-px bg-card rounded-2xl" />

      <Shad.CardContent className="relative p-6 z-10">
        {/* Icon */}
        <div className="w-14 h-14 rounded-xl bg-linear-to-r from-primary to-secondary flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-primary/25">
          <Icon name={icon} size={28} className="text-white" />
        </div>

        {/* Title */}
        <h3 className="text-xl font-semibold text-foreground dark:text-white mb-3">
          {title}
        </h3>

        {/* Description */}
        <p className="text-foreground-secondary dark:text-foreground-muted mb-4 leading-relaxed">
          {description}
        </p>

        {/* Features List */}
        {features.length > 0 && (
          <ul className="space-y-2">
            {features.map((feature, index) => (
              <li
                key={index}
                className="flex items-center gap-2 text-sm text-foreground-secondary dark:text-foreground-muted"
              >
                <Icon
                  name="Check"
                  size={16}
                  className="text-primary shrink-0"
                />
                {feature}
              </li>
            ))}
          </ul>
        )}
      </Shad.CardContent>
    </Shad.Card>
  );
};

export default ServiceCard;
