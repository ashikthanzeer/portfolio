"use client";

import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, Award } from "lucide-react";
import { EDUCATION_LIST } from "@/data/portfolioData";
import { InteractiveCard } from "./ui/InteractiveCard";
import { variantB, staggerContainer } from "@/utils/animations";

export const Education = () => {
  return (
    <section id="education" className="py-20 md:py-32 border-b border-hairline bg-[#080c17]">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12"
        >
          {/* Header column */}
          <motion.div variants={variantB} className="lg:col-span-4 flex flex-col justify-start">
            <div className="sticky top-24">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-px bg-primary/50" />
                <h2 className="text-3xl font-bold tracking-tight text-content-primary">
                  Academic Background
                </h2>
              </div>
              <p className="text-content-muted text-sm md:text-base leading-relaxed">
                Pursuing dual degrees to build a strong foundation in both core software engineering principles and modern data science practices.
              </p>
            </div>
          </motion.div>

          {/* List column */}
          <div className="lg:col-span-8 flex flex-col gap-6">
            {EDUCATION_LIST.map((edu, idx) => (
              <InteractiveCard key={idx} delay={idx * 0.1} className="p-6 md:p-8 group relative overflow-hidden">
                <div className="relative z-10">
                  <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-content-primary group-hover:text-primary transition-colors flex items-center gap-2">
                        {edu.institution}
                        {edu.badge && (
                          <span className="hidden sm:inline-flex items-center gap-1 px-2 py-0.5 text-[10px] uppercase font-bold text-bg bg-secondary rounded-sm">
                            <Award className="w-3 h-3" />
                            {edu.badge}
                          </span>
                        )}
                      </h3>
                      <p className="text-sm text-content-muted mt-1">{edu.degree}</p>
                    </div>
                    <div className="flex flex-col items-start md:items-end gap-1 shrink-0">
                      <span className="px-3 py-1 text-xs font-medium text-primary bg-primary/10 border border-primary/20 rounded">
                        {edu.period}
                      </span>
                      {edu.grade && (
                        <span className="text-sm font-semibold text-content-primary mt-2 md:mt-0 font-mono">
                          {edu.grade}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
                {/* Background decorative element */}
                <div className="absolute -right-8 -bottom-8 opacity-[0.02] group-hover:opacity-[0.05] group-hover:text-primary transition-all duration-500 pointer-events-none transform group-hover:-rotate-12">
                  <GraduationCap className="w-48 h-48" />
                </div>
              </InteractiveCard>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
