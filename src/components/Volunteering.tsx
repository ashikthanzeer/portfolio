"use client";

import React from "react";
import { motion } from "framer-motion";
import { HeartHandshake } from "lucide-react";
import { VOLUNTEERING_LIST } from "@/data/portfolioData";
import { InteractiveCard } from "./ui/InteractiveCard";
import { variantB, staggerContainer } from "@/utils/animations";

export const Volunteering = () => {
  return (
    <section id="volunteering" className="py-20 md:py-32 border-b border-hairline bg-[#080c17]">
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
              Volunteering
            </h2>
          </motion.div>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {VOLUNTEERING_LIST.map((item, idx) => (
            <InteractiveCard key={idx} delay={idx * 0.1} className="p-6 group flex flex-col h-full">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded bg-surface-hover border border-hairline group-hover:border-primary/40 transition-colors">
                  <HeartHandshake className="w-4 h-4 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-content-primary group-hover:text-primary transition-colors">
                  {item.organization}
                </h3>
              </div>
              <p className="text-sm font-medium text-secondary mb-2">
                {item.role}
              </p>
              <p className="text-xs text-content-muted font-mono uppercase tracking-wider mb-4">
                {item.period}
              </p>
              {item.description && (
                <p className="text-sm text-content-muted leading-relaxed mt-auto border-t border-hairline pt-4 group-hover:border-primary/20 transition-colors">
                  {item.description}
                </p>
              )}
            </InteractiveCard>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
