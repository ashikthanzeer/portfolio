"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { springSmooth } from "@/utils/animations";

interface InteractiveCardProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export const InteractiveCard = ({ children, className = "", delay = 0 }: InteractiveCardProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isPointerFine, setIsPointerFine] = useState(false);

  // Fallback check for mobile/touch
  useEffect(() => {
    const mq = window.matchMedia("(pointer: fine)");
    setIsPointerFine(mq.matches);

    const listener = (e: MediaQueryListEvent) => setIsPointerFine(e.matches);
    mq.addEventListener("change", listener);
    return () => mq.removeEventListener("change", listener);
  }, []);

  // Framer Motion values for 3D tilt
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);

  const springConfig = { stiffness: 100, damping: 15 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  // Transform constraints for subtle tilt (max ~8 degrees)
  const rotateX = useTransform(smoothY, [0, 1], [8, -8]);
  const rotateY = useTransform(smoothX, [0, 1], [-8, 8]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isPointerFine || !ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Normalized values (0 to 1) for tilt
    const normX = x / rect.width;
    const normY = y / rect.height;
    mouseX.set(normX);
    mouseY.set(normY);

    // Set CSS variables for spotlight
    ref.current.style.setProperty("--mouse-x", `${x}px`);
    ref.current.style.setProperty("--mouse-y", `${y}px`);
  };

  const handleMouseLeave = () => {
    if (!isPointerFine) return;
    mouseX.set(0.5);
    mouseY.set(0.5);
  };

  const desktopStyle = isPointerFine ? { rotateX, rotateY, transformPerspective: 1000 } : {};
  const mobileProps = !isPointerFine ? { whileTap: { scale: 0.98 } } : {};

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ ...springSmooth, delay }}
      whileHover={isPointerFine ? { y: -6 } : undefined}
      style={desktopStyle}
      {...mobileProps}
      className={`relative panel-rectilinear card-spotlight will-change-transform ${className}`}
    >
      {children}
    </motion.div>
  );
};
