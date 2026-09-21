"use client";

import React, { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
}

export const NodeNetworkMotif = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { amount: 0.1 });
  const [isPrefersReducedMotion, setIsPrefersReducedMotion] = useState(false);

  useEffect(() => {
    setIsPrefersReducedMotion(
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    );
  }, []);

  useEffect(() => {
    if (!canvasRef.current || !containerRef.current || !isInView || isPrefersReducedMotion) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = 0;
    let height = 0;

    const nodes: Node[] = [];
    const numNodes = 40;
    const maxDistance = 120;
    const mouse = { x: -1000, y: -1000 };

    const resize = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      
      // Handle high-DPI displays for crisp rendering
      const dpr = window.devicePixelRatio || 1;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);
    };

    const initNodes = () => {
      nodes.length = 0;
      for (let i = 0; i < numNodes; i++) {
        nodes.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.8,
          vy: (Math.random() - 0.5) * 0.8,
          radius: Math.random() * 2 + 1,
        });
      }
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      // Update & draw nodes
      for (let i = 0; i < nodes.length; i++) {
        const node = nodes[i];

        // Move
        node.x += node.vx;
        node.y += node.vy;

        // Bounce off walls
        if (node.x <= 0 || node.x >= width) node.vx *= -1;
        if (node.y <= 0 || node.y >= height) node.vy *= -1;

        // Mouse interaction (repel gently)
        const dx = mouse.x - node.x;
        const dy = mouse.y - node.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 100) {
          node.x -= dx * 0.02;
          node.y -= dy * 0.02;
        }

        // Draw Node
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(59, 130, 246, 0.8)"; // Primary blue
        ctx.fill();

        // Connect nearby nodes
        for (let j = i + 1; j < nodes.length; j++) {
          const node2 = nodes[j];
          const dx2 = node.x - node2.x;
          const dy2 = node.y - node2.y;
          const dist2 = Math.sqrt(dx2 * dx2 + dy2 * dy2);

          if (dist2 < maxDistance) {
            ctx.beginPath();
            ctx.moveTo(node.x, node.y);
            ctx.lineTo(node2.x, node2.y);
            // Opacity based on distance
            const opacity = 1 - dist2 / maxDistance;
            ctx.strokeStyle = `rgba(96, 165, 250, ${opacity * 0.3})`; // Secondary blue
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };

    window.addEventListener("resize", resize);
    canvas.addEventListener("mousemove", handleMouseMove);
    canvas.addEventListener("mouseleave", handleMouseLeave);

    resize();
    initNodes();
    draw();

    return () => {
      window.removeEventListener("resize", resize);
      canvas.removeEventListener("mousemove", handleMouseMove);
      canvas.removeEventListener("mouseleave", handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isInView, isPrefersReducedMotion]);

  if (isPrefersReducedMotion) {
    return (
      <div className="w-full aspect-[4/3] rounded border border-hairline bg-surface/50 flex items-center justify-center">
        <span className="text-content-muted text-xs">Data Visualization Rendered</span>
      </div>
    );
  }

  return (
    <div ref={containerRef} className="relative w-full aspect-[4/3] max-h-[500px] rounded border border-hairline bg-[#080d19] overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 pointer-events-none" />
      <canvas
        ref={canvasRef}
        className="w-full h-full block"
        style={{ touchAction: "none" }}
      />
    </div>
  );
};
