"use client";

import React from "react";
import { motion } from "framer-motion";
import { Code2 } from "lucide-react";
import { SKILL_CATEGORIES } from "@/data/portfolioData";
import { InteractiveCard } from "./ui/InteractiveCard";
import { variantB, staggerContainer } from "@/utils/animations";

export const Skills = () => {
  return (
    <section id="skills" className="py-20 md:py-32 border-b border-hairline relative">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mb-12 md:mb-16"
        >
          <motion.div variants={variantB} className="flex items-center gap-3">
            <span className="w-8 h-px bg-primary/50" />
            <h2 className="text-3xl font-bold tracking-tight text-content-primary">
              Technical Arsenal
            </h2>
          </motion.div>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {SKILL_CATEGORIES.map((category, idx) => (
            <InteractiveCard key={category.category} delay={idx * 0.05} className="p-6 group relative overflow-hidden flex flex-col h-full">
              <div className="relative z-10 flex items-center gap-3 mb-6 border-b border-hairline pb-4 group-hover:border-primary/30 transition-colors">
                <Code2 className="w-5 h-5 text-primary opacity-70 group-hover:opacity-100 transition-opacity" />
                <h3 className="text-lg font-semibold text-content-primary tracking-wide">
                  {category.category}
                </h3>
              </div>
              
              <div className="relative z-10 flex flex-wrap gap-2 mt-auto">
                {category.skills.map((skill, sIdx) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.1 + (sIdx * 0.05) }}
                    className="px-3 py-1.5 text-xs font-medium text-content-muted bg-surface-hover border border-hairline rounded transition-colors group-hover:border-primary/20 hover:!text-primary hover:!border-primary/40 cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </InteractiveCard>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
