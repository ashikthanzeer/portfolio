"use client";

import React from "react";
import { motion } from "framer-motion";
import { Users } from "lucide-react";
import { LEADERSHIP_LIST } from "@/data/portfolioData";
import { InteractiveCard } from "./ui/InteractiveCard";
import { variantB, staggerContainer } from "@/utils/animations";

export const Leadership = () => {
  return (
    <section id="leadership" className="py-20 md:py-32 border-b border-hairline relative">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="mb-12 md:mb-16"
        >
          <motion.div variants={variantB} className="flex items-center gap-3">
            <span className="w-8 h-px bg-primary/50" />
            <h2 className="text-3xl font-bold tracking-tight text-content-primary">
              Leadership
            </h2>
          </motion.div>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {LEADERSHIP_LIST.map((item, idx) => (
            <InteractiveCard key={idx} delay={idx * 0.1} className="p-6 group flex items-start gap-4">
              <div className="mt-1 p-2 rounded bg-surface-hover border border-hairline group-hover:border-primary/40 transition-colors shrink-0">
                <Users className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-content-primary group-hover:text-primary transition-colors">
                  {item.role}
                </h3>
                <p className="text-sm font-medium text-secondary mt-1">
                  {item.organization}
                </p>
                <p className="text-xs text-content-muted mt-2 font-mono uppercase tracking-wider">
                  {item.period}
                </p>
              </div>
            </InteractiveCard>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
