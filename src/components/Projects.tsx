"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Github, ExternalLink } from "lucide-react";
import { PROJECTS_LIST } from "@/data/portfolioData";
import { InteractiveCard } from "./ui/InteractiveCard";
import { variantA, staggerContainer, SplitText } from "@/utils/animations";
import { MagneticButton } from "./ui/MagneticButton";

const categories = ["All", "AI & Systems", "Web & Platforms", "Automation & Tools"];

export const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = PROJECTS_LIST.filter(
    (project) => activeCategory === "All" || project.category === activeCategory
  );

  return (
    <section id="projects" className="py-20 md:py-32 border-b border-hairline">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mb-12 md:mb-16 space-y-4"
        >
          <div className="flex items-center gap-3">
            <span className="w-8 h-px bg-primary/50" />
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-content-primary">
              <SplitText text="Selected Projects" />
            </h2>
          </div>
          <motion.p variants={variantA} className="text-content-muted max-w-2xl text-sm md:text-base">
            A showcase of technical tools, full-stack platforms, and AI-integrated systems built for scale and utility.
          </motion.p>
        </motion.div>

        {/* Filters */}
        <div className="flex flex-wrap items-center gap-2 mb-10">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 text-xs md:text-sm font-medium rounded transition-all duration-300 ${
                activeCategory === category
                  ? "bg-primary text-bg"
                  : "bg-surface border border-hairline text-content-muted hover:text-content-primary hover:border-primary/40"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="h-full"
              >
                <InteractiveCard delay={idx * 0.1} className="h-full flex flex-col p-6 group cursor-default">
                  <div className="flex justify-between items-start mb-5 relative z-10">
                    <div className="p-2.5 rounded bg-surface border border-hairline group-hover:border-primary/40 transition-colors">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-primary">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                      </svg>
                    </div>
                    <div className="flex gap-2">
                      <MagneticButton className="p-1.5 text-content-muted hover:text-primary transition-colors">
                        <Github className="w-4 h-4" />
                      </MagneticButton>
                      <MagneticButton className="p-1.5 text-content-muted hover:text-primary transition-colors">
                        <ExternalLink className="w-4 h-4" />
                      </MagneticButton>
                    </div>
                  </div>

                  <h3 className="text-xl font-semibold text-content-primary mb-3 relative z-10 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  
                  <div className="space-y-2 mb-6 relative z-10 flex-grow">
                    {project.points.slice(0, 2).map((point, i) => (
                      <p key={i} className="text-sm text-content-muted leading-relaxed">
                        {point}
                      </p>
                    ))}
                  </div>

                  <div className="mt-auto relative z-10">
                    <div className="flex flex-wrap gap-2 pt-4 border-t border-hairline">
                      {project.stack.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 text-[10px] uppercase tracking-wider font-medium text-secondary bg-secondary/10 rounded border border-secondary/20 transition-all hover:bg-secondary hover:text-bg cursor-default"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </InteractiveCard>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};
