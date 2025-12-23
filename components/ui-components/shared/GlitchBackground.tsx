"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface GlitchBackgroundProps {
  className?: string;
  intensity?: "low" | "medium" | "high";
  showGrid?: boolean;
  showParticles?: boolean;
  showScanlines?: boolean;
}

/**
 * Cinematic glitch background effect inspired by Cedar Core brand imagery
 * Creates a futuristic tech atmosphere with floating particles, glitch effects, and digital grid
 */
const GlitchBackground = ({
  className,
  intensity = "medium",
  showGrid = true,
  showParticles = true,
  showScanlines = true,
}: GlitchBackgroundProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Particle animation
  useEffect(() => {
    if (!showParticles) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Particle system
    interface Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      opacity: number;
      color: string;
    }

    const particleCount =
      intensity === "high" ? 80 : intensity === "medium" ? 50 : 30;
    const particles: Particle[] = [];
    const colors = [
      "rgba(93, 158, 255, ",
      "rgba(82, 95, 249, ",
      "rgba(255, 255, 255, ",
    ];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2 + 0.5,
        speedX: (Math.random() - 0.5) * 0.3,
        speedY: (Math.random() - 0.5) * 0.3,
        opacity: Math.random() * 0.5 + 0.1,
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }

    // Animation loop
    let animationId: number;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle) => {
        // Update position
        particle.x += particle.speedX;
        particle.y += particle.speedY;

        // Wrap around edges
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;

        // Draw particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = `${particle.color}${particle.opacity})`;
        ctx.fill();

        // Add glow effect for larger particles
        if (particle.size > 1.5) {
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, particle.size * 3, 0, Math.PI * 2);
          const gradient = ctx.createRadialGradient(
            particle.x,
            particle.y,
            0,
            particle.x,
            particle.y,
            particle.size * 3
          );
          gradient.addColorStop(
            0,
            `${particle.color}${particle.opacity * 0.3})`
          );
          gradient.addColorStop(1, `${particle.color}0)`);
          ctx.fillStyle = gradient;
          ctx.fill();
        }
      });

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationId);
    };
  }, [showParticles, intensity]);

  return (
    <div
      className={cn(
        "fixed inset-0 z-0 pointer-events-none overflow-hidden",
        className
      )}
    >
      {/* Base gradient */}
      <div className="absolute inset-0 bg-[#031128]" />

      {/* Radial glow effects */}
      <div className="absolute top-1/4 left-1/4 w-[800px] h-[800px] bg-[radial-gradient(ellipse_at_center,_rgba(93,158,255,0.15)_0%,_transparent_60%)] blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-[radial-gradient(ellipse_at_center,_rgba(82,95,249,0.12)_0%,_transparent_60%)] blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-[radial-gradient(ellipse_at_center,_rgba(93,158,255,0.08)_0%,_transparent_50%)]" />

      {/* Digital grid overlay */}
      {showGrid && (
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(93, 158, 255, 0.5) 1px, transparent 1px),
              linear-gradient(90deg, rgba(93, 158, 255, 0.5) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
          }}
        />
      )}

      {/* Scanlines effect */}
      {showScanlines && (
        <div
          className="absolute inset-0 opacity-[0.02] animate-scanline"
          style={{
            backgroundImage: `repeating-linear-gradient(
              0deg,
              transparent,
              transparent 2px,
              rgba(93, 158, 255, 0.03) 2px,
              rgba(93, 158, 255, 0.03) 4px
            )`,
          }}
        />
      )}

      {/* Glitch lines - horizontal */}
      <div className="glitch-lines">
        <div className="glitch-line glitch-line-1" />
        <div className="glitch-line glitch-line-2" />
        <div className="glitch-line glitch-line-3" />
      </div>

      {/* Floating data blocks */}
      <div className="absolute inset-0">
        <div className="data-block data-block-1" />
        <div className="data-block data-block-2" />
        <div className="data-block data-block-3" />
      </div>

      {/* Particle canvas */}
      {showParticles && (
        <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
      )}

      {/* Noise texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.015] mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Vignette effect */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_0%,_rgba(3,17,40,0.4)_100%)]" />
    </div>
  );
};

export default GlitchBackground;
