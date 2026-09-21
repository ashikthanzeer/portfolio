"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useInView, useMotionValue, animate } from "framer-motion";

interface CountUpProps {
  value: number;
  duration?: number;
  isDecimal?: boolean;
}

export const CountUp = ({ value, duration = 1.5, isDecimal = false }: CountUpProps) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const count = useMotionValue(0);
  const [displayValue, setDisplayValue] = useState(isDecimal ? "0.00" : "0");

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, value, {
        duration,
        ease: "easeOut",
        onUpdate: (v) => {
          if (isDecimal) {
            // Check if it's 8.625 vs 9.66 to keep exactly 2 or 3 decimals based on the value?
            // Actually, we'll format based on string split length to match original data.
            const decimals = value.toString().split(".")[1]?.length || 2;
            setDisplayValue(v.toFixed(decimals));
          } else {
            setDisplayValue(Math.round(v).toString());
          }
        },
      });

      return controls.stop;
    }
  }, [isInView, value, duration, isDecimal, count]);

  return <motion.span ref={ref}>{displayValue}</motion.span>;
};
