"use client";

import { SButton } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Icon from "@/components/ui/icon";

type Props = {
  onClick?: (args?: unknown) => void;
  children?: React.ReactNode;
  iconName?: string;
  iconSize?: string | number;
  text?: string;
  textColor?: string;
  rightIconName?: string;
  isSubmitting?: boolean;
  className?: string;
  disabled?: boolean;
  variant?:
    | "link"
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost"
    | null
    | undefined;
  size?: "default" | "sm" | "lg" | "icon" | null | undefined;
  formId?: string;
  type?: "button" | "submit" | "reset";
  asChild?: boolean;
  props?: React.ComponentProps<typeof SButton | "button">;
};

const Spinner = ({ className }: { className?: string }) => (
  <svg
    className={cn("animate-spin h-5 w-5", className)}
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
  >
    <circle
      className="opacity-25"
      cx="12"
      cy="12"
      r="10"
      stroke="currentColor"
      strokeWidth="4"
    ></circle>
    <path
      className="opacity-75"
      fill="currentColor"
      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
    ></path>
  </svg>
);

const Button = ({
  onClick,
  iconName,
  iconSize,
  text,
  textColor,
  isSubmitting,
  rightIconName,
  variant,
  disabled,
  className,
  children,
  size = "default",
  type = "button",
  formId,
  asChild = false,
  props,
}: Props) => {
  // When asChild is true and we have icons/text, we need to handle it differently
  if (asChild && children) {
    return (
      <SButton
        variant={variant ?? "default"}
        onClick={onClick}
        className={cn("flex-row gap-2 items-center cursor-pointer", className)}
        disabled={disabled || isSubmitting}
        size={size}
        type={type}
        form={formId}
        asChild={asChild}
        {...props}
      >
        {children}
      </SButton>
    );
  }

  return (
    <SButton
      variant={variant ?? "default"}
      onClick={onClick}
      className={cn("flex-row gap-2 items-center cursor-pointer", className)}
      disabled={disabled || isSubmitting}
      size={size}
      type={type}
      form={formId}
      {...props}
    >
      {isSubmitting ? (
        <Spinner className="text-muted" />
      ) : (
        <>
          {iconName && (
            <Icon onClick={onClick} name={iconName ?? "Info"} size={iconSize} />
          )}
          {children}
          {text && <span style={{ color: textColor }}>{text}</span>}
          {rightIconName && <Icon onClick={onClick} name={rightIconName} />}
        </>
      )}
    </SButton>
  );
};

export default Button;
