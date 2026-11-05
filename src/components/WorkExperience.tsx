"use client";

import React from "react";
import { motion } from "framer-motion";
import { Github, ExternalLink, FileCheck } from "lucide-react";
import { WORK_EXPERIENCE_LIST } from "@/data/portfolioData";
import { InteractiveCard } from "./ui/InteractiveCard";
import { variantB, staggerContainer } from "@/utils/animations";

export const WorkExperience = () => {
  return (
    <section id="work-experience" className="py-20 md:py-32 border-b border-hairline bg-bg relative">
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
              Work Experience
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
          {WORK_EXPERIENCE_LIST.map((item, idx) => (
            <InteractiveCard key={idx} delay={idx * 0.1} className="p-6 group flex flex-col h-full">
              <div className="flex items-start gap-3 mb-4">
                <div className="p-2 rounded bg-surface-hover border border-hairline group-hover:border-primary/40 transition-colors mt-0.5">
                  <FileCheck className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-content-primary group-hover:text-primary transition-colors leading-tight">
                    {item.position}
                  </h3>
                  <p className="text-sm text-primary/70 font-medium mt-0.5">{item.company}</p>
                </div>
              </div>
              <p className="text-xs text-content-muted font-mono uppercase tracking-wider mb-2">
                {item.period}
              </p>
              {item.description && (
                <p className="text-sm text-content-muted leading-relaxed mt-auto border-t border-hairline pt-4 group-hover:border-primary/20 transition-colors">
                  {item.description}
                </p>
              )}

              <div className="flex gap-3 mt-4">
                {item.githubUrl && (
                  <a
                    href={item.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1.5 text-content-muted hover:text-primary transition-colors"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                )}
                {item.liveUrl && (
                  <a
                    href={item.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1.5 text-content-muted hover:text-primary transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}
                {item.certificateUrls && item.certificateUrls.length > 0 && (
                  <a
                    href={item.certificateUrls[0]}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1.5 text-content-muted hover:text-primary transition-colors"
                  >
                    <FileCheck className="w-4 h-4" />
                  </a>
                )}
              </div>
            </InteractiveCard>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
