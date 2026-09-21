"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  href?: string;
  target?: string;
  rel?: string
}

export const MagneticButton = ({ children, className = "", onClick, href, target, rel, }: MagneticButtonProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isPointerFine, setIsPointerFine] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(pointer: fine)");
    setIsPointerFine(mq.matches);
    const listener = (e: MediaQueryListEvent) => setIsPointerFine(e.matches);
    mq.addEventListener("change", listener);
    return () => mq.removeEventListener("change", listener);
  }, []);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { stiffness: 150, damping: 15, mass: 0.5 };
  const smoothX = useSpring(x, springConfig);
  const smoothY = useSpring(y, springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isPointerFine || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const distanceX = e.clientX - centerX;
    const distanceY = e.clientY - centerY;

    x.set(distanceX * 0.2);
    y.set(distanceY * 0.2);
  };

  const handleMouseLeave = () => {
    if (!isPointerFine) return;
    x.set(0);
    y.set(0);
  };

  const mobileProps = !isPointerFine ? { whileTap: { scale: 0.95 } } : {};

  const MotionTag = href ? motion.a : motion.button;
  const commonProps = {
    ref,
    onMouseMove: handleMouseMove,
    onMouseLeave: handleMouseLeave,
    style: isPointerFine ? { x: smoothX, y: smoothY } : {},
    className: `relative inline-flex overflow-hidden ${className}`,
    ...mobileProps,
  };

  if (href) {
    return (
      <MotionTag
        href={href}
        target={target}
        rel={rel}
        {...(commonProps as any)}
      >
        {children}
      </MotionTag>
    );
  }

  return (
    <MotionTag onClick={onClick} {...(commonProps as any)}>
      {children}
    </MotionTag>
  );
};
