"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { Icon } from "@/components/ui";

interface ThemeToggleProps {
  className?: string;
}

const ThemeToggle = ({ className }: ThemeToggleProps) => {
  const [theme, setTheme] = React.useState<"light" | "dark">("dark");

  React.useEffect(() => {
    const isDark = document.documentElement.classList.contains("dark");
    setTheme(isDark ? "dark" : "light");
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    document.documentElement.classList.toggle("dark");
    localStorage.setItem("theme", newTheme);
  };

  return (
    <button
      onClick={toggleTheme}
      className={cn(
        "w-10 h-10 rounded-lg flex items-center justify-center transition-colors",
        "bg-surface hover:bg-surface-hover dark:bg-surface dark:hover:bg-surface-hover",
        "text-foreground-secondary dark:text-foreground-muted",
        className
      )}
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
    >
      {theme === "dark" ? (
        <Icon name="Sun" size={20} />
      ) : (
        <Icon name="Moon" size={20} />
      )}
    </button>
  );
};

export default ThemeToggle;
