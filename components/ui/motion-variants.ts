import { Variants } from "framer-motion";

// ============================================================================
// MOTION VARIANTS
// Reusable animation variants for Framer Motion
// ============================================================================

const EASE = {
  organic: [0.25, 0.4, 0.25, 1] as const,
  elastic: [0.34, 1.56, 0.64, 1] as const,
};

// Stagger reveal for lists
export const staggerReveal: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.05,
    },
  },
};

export const staggerRevealItem: Variants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: EASE.organic,
    },
  },
};

// Scale entrance animation
export const scaleReveal: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: EASE.organic,
    },
  },
};

// Smooth hover lift for cards
export const hoverLift: Variants = {
  rest: { y: 0, scale: 1 },
  hover: {
    y: -4,
    scale: 1.01,
    transition: {
      duration: 0.4,
      ease: EASE.elastic,
    },
  },
};

// Button press animation
export const buttonPress: Variants = {
  rest: { scale: 1 },
  hover: { scale: 1.02 },
  tap: { scale: 0.98 },
};

// Line draw animation for decorative elements
export const lineDraw: Variants = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: {
    pathLength: 1,
    opacity: 1,
    transition: {
      pathLength: { duration: 1.5, ease: EASE.organic },
      opacity: { duration: 0.3 },
    },
  },
};
