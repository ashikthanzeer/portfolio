import React from "react";
import { motion, Variants } from "framer-motion";

/**
 * Common spring configurations for consistent physical feel.
 */
export const springSmooth = {
  type: "spring",
  stiffness: 100,
  damping: 15,
};

export const springSnappy = {
  type: "spring",
  stiffness: 300,
  damping: 20,
};

/**
 * Variant A: Blur + Y-Offset (Used for Hero, Projects, Contact)
 */
export const variantA: Variants = {
  hidden: { opacity: 0, y: 20, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { ...springSmooth, duration: 0.8 },
  },
};

/**
 * Variant B: Clip-path inset wipe (Used for Education, Skills, Hackathons, Leadership)
 */
export const variantB: Variants = {
  hidden: { opacity: 0, clipPath: "inset(0 100% 0 0)" },
  visible: {
    opacity: 1,
    clipPath: "inset(0 0 0 0)",
    transition: { ease: [0.16, 1, 0.3, 1], duration: 0.8 },
  },
};

/**
 * Container variant for staggering children.
 */
export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

/**
 * Utility to split text into word-level motion.span elements for staggering.
 */
export const SplitText = ({
  text,
  className = "",
}: {
  text: string;
  className?: string;
}) => {
  const words = text.split(" ");

  const wordVariant: Variants = {
    hidden: { opacity: 0, y: 10, filter: "blur(4px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: springSmooth,
    },
  };

  return (
    <motion.span
      className={`inline-block ${className}`}
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      {words.map((word, i) => (
        <span key={i} className="inline-block whitespace-nowrap">
          <motion.span
            className="inline-block"
            variants={wordVariant}
          >
            {word}
          </motion.span>
          {i !== words.length - 1 && <span>&nbsp;</span>}
        </span>
      ))}
    </motion.span>
  );
};
