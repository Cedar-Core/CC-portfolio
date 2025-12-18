"use client";

import { motion, Variants, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";
import { useMemo, useState, useEffect } from "react";

// ============================================================================
// MOTION SYSTEM TOKENS
// Standardized values for consistent, organic feel
// ============================================================================

const EASE = {
  organic: [0.25, 0.4, 0.25, 1] as const, // Natural, fluid movement
  elastic: [0.34, 1.56, 0.64, 1] as const, // Subtle bounce for interactions
  stable: [0.4, 0, 0.2, 1] as const, // Grounded, heavy movement
  linear: "linear",
};

// Helper hook to handle hydration mismatch for reduced motion
const useSafeReducedMotion = () => {
  const shouldReduceMotion = useReducedMotion();
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    if (shouldReduceMotion) {
      setReduceMotion(true);
    }
  }, [shouldReduceMotion]);

  return reduceMotion;
};

// ============================================================================
// COMPONENT: GrowthRings
// Symbolizes: History, stability, expansion
// Optimization: Uses scale/opacity instead of layout properties
// ============================================================================

export const GrowthRings = ({
  className,
  ringCount = 3,
  delay = 0,
  baseSize = 200,
}: {
  className?: string;
  ringCount?: number;
  delay?: number;
  baseSize?: number;
}) => {
  const shouldReduceMotion = useSafeReducedMotion();

  if (shouldReduceMotion) return null;

  return (
    <div
      className={cn(
        "absolute inset-0 overflow-hidden pointer-events-none flex items-center justify-center",
        className
      )}
    >
      {Array.from({ length: ringCount }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full border border-primary/10"
          style={{ width: baseSize, height: baseSize }}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{
            scale: [0.8, 1.5, 2],
            opacity: [0, 0.3, 0],
          }}
          transition={{
            duration: 8,
            delay: delay + i * 2,
            repeat: Infinity,
            ease: "linear",
            times: [0, 0.5, 1],
          }}
        />
      ))}
    </div>
  );
};

// ============================================================================
// COMPONENT: CedarBranch
// Symbolizes: Organic growth, connection
// Optimization: Simplified paths, smoother draw
// ============================================================================

export const CedarBranch = ({
  className,
  direction = "left",
}: {
  className?: string;
  direction?: "left" | "right";
}) => {
  const isLeft = direction === "left";
  const shouldReduceMotion = useSafeReducedMotion();

  const draw = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 0.3,
      transition: {
        pathLength: {
          duration: shouldReduceMotion ? 0 : 2.5,
          ease: EASE.organic,
        },
        opacity: { duration: 1 },
      },
    },
  };

  return (
    <motion.svg
      viewBox="0 0 200 100"
      className={cn(
        "absolute w-64 opacity-30 pointer-events-none",
        isLeft ? "left-0 -scale-x-100" : "right-0",
        className
      )}
      initial="hidden"
      animate="visible"
    >
      {/* Main Branch */}
      <motion.path
        d="M0 50 C 40 50, 60 30, 100 40 C 140 50, 160 20, 200 30"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        className="text-primary"
        variants={draw}
      />
      {/* Secondary Twigs */}
      <motion.path
        d="M60 38 C 70 25, 80 20, 90 25"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
        className="text-primary/60"
        variants={draw}
        transition={{ delay: 0.5 }}
      />
      <motion.path
        d="M140 45 C 150 60, 160 65, 170 60"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
        className="text-primary/60"
        variants={draw}
        transition={{ delay: 0.8 }}
      />
    </motion.svg>
  );
};

// ============================================================================
// COMPONENT: CoreStrength (formerly CorePulse)
// Symbolizes: The stable core, reliability
// Optimization: Slower, "breathing" animation
// ============================================================================

export const CoreStrength = ({ className }: { className?: string }) => {
  return (
    <div className={cn("relative flex items-center justify-center", className)}>
      {/* Outer Glow - Breathing */}
      <motion.div
        className="absolute inset-0 rounded-full bg-primary/20 blur-xl"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      {/* Inner Core - Stable */}
      <div className="relative w-full h-full rounded-full bg-linear-to-br from-primary to-secondary shadow-lg shadow-primary/20" />
    </div>
  );
};

// ============================================================================
// COMPONENT: AmbientAtmosphere (formerly FloatingOrbs)
// Symbolizes: The environment, depth
// Optimization: GPU transforms, reduced count
// ============================================================================

export const AmbientAtmosphere = ({ className }: { className?: string }) => {
  const shouldReduceMotion = useSafeReducedMotion();

  if (shouldReduceMotion)
    return (
      <div
        className={cn(
          "absolute inset-0 bg-linear-to-b from-primary/5 to-transparent",
          className
        )}
      />
    );

  return (
    <div
      className={cn(
        "absolute inset-0 overflow-hidden pointer-events-none",
        className
      )}
    >
      <motion.div
        className="absolute top-[-10%] left-[20%] w-[40vw] h-[40vw] rounded-full bg-primary/5 blur-[120px]"
        animate={{
          x: [0, 50, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-[-10%] right-[10%] w-[30vw] h-[30vw] rounded-full bg-secondary/5 blur-[100px]"
        animate={{
          x: [0, -30, 0],
          y: [0, -50, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />
    </div>
  );
};

// ============================================================================
// COMPONENT: OrganicSeeds (formerly ParticleField)
// Symbolizes: Potential, spreading ideas
// Optimization: Upward drift, stable positions
// ============================================================================

export const OrganicSeeds = ({
  className,
  count = 12,
}: {
  className?: string;
  count?: number;
}) => {
  const shouldReduceMotion = useSafeReducedMotion();

  const seeds = useMemo(() => {
    return Array.from({ length: count }).map((_, i) => ({
      left: `${(i * 17) % 100}%`,
      top: `${(i * 23) % 100}%`,
      size: ((i * 3) % 4) + 2,
      duration: 15 + (i % 10),
      delay: i * 2,
    }));
  }, [count]);

  if (shouldReduceMotion) return null;

  return (
    <div
      className={cn(
        "absolute inset-0 overflow-hidden pointer-events-none",
        className
      )}
    >
      {seeds.map((seed, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-primary/20"
          style={{
            left: seed.left,
            top: seed.top,
            width: seed.size,
            height: seed.size,
          }}
          animate={{
            y: [0, -100],
            opacity: [0, 0.5, 0],
          }}
          transition={{
            duration: seed.duration,
            delay: seed.delay,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
};

// ============================================================================
// COMPONENT: AnimatedGrid
// Symbolizes: Structure, foundation
// Optimization: Subtle opacity, no layout thrashing
// ============================================================================

export const AnimatedGrid = ({ className }: { className?: string }) => {
  return (
    <div
      className={cn(
        "absolute inset-0 overflow-hidden pointer-events-none",
        className
      )}
    >
      <motion.div
        className="absolute inset-0 grid-pattern opacity-30"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ duration: 1 }}
      />
      {/* Subtle scan line */}
      <motion.div
        className="absolute h-px bg-linear-to-r from-transparent via-primary/10 to-transparent"
        style={{ width: "100%", top: "0%" }}
        animate={{
          top: ["0%", "100%"],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear",
        }}
      />
    </div>
  );
};

// ============================================================================
// COMPONENT: TypingCursor
// Symbolizes: Code, creation
// ============================================================================

export const TypingCursor = ({ className }: { className?: string }) => {
  return (
    <motion.span
      className={cn(
        "inline-block w-0.5 h-5 bg-primary ml-1 align-middle",
        className
      )}
      animate={{ opacity: [1, 0, 1] }}
      transition={{
        duration: 1,
        repeat: Infinity,
        ease: "linear",
      }}
    />
  );
};

// ============================================================================
// COMPONENT: Spotlight
// Symbolizes: Focus, clarity
// ============================================================================

export const Spotlight = ({ className }: { className?: string }) => {
  return (
    <motion.div
      className={cn(
        "absolute w-[500px] h-[500px] rounded-full pointer-events-none",
        "bg-radial-gradient from-primary/5 via-transparent to-transparent",
        className
      )}
      animate={{
        opacity: [0.5, 0.8, 0.5],
        scale: [1, 1.1, 1],
      }}
      transition={{
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );
};

// ============================================================================
// VARIANTS & UTILITIES
// ============================================================================

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

export const buttonPress: Variants = {
  rest: { scale: 1 },
  hover: { scale: 1.02 },
  tap: { scale: 0.98 },
};

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

// ============================================================================
// BACKWARD COMPATIBILITY ALIASES
// ============================================================================

export const FloatingOrbs = AmbientAtmosphere;
export const ParticleField = OrganicSeeds;
export const CorePulse = CoreStrength;

// Export named animations
const CedarAnimations = {
  GrowthRings,
  CedarBranch,
  CoreStrength,
  AmbientAtmosphere,
  OrganicSeeds,
  AnimatedGrid,
  TypingCursor,
  Spotlight,
  // Aliases
  FloatingOrbs,
  ParticleField,
  CorePulse,
  // Variants
  staggerReveal,
  staggerRevealItem,
  scaleReveal,
  hoverLift,
  buttonPress,
  lineDraw,
};

export default CedarAnimations;
