"use client";

import React from "react";
import { motion } from "framer-motion";
import { Rocket } from "lucide-react";
import { HACKATHON_ITEM } from "@/data/portfolioData";
import { InteractiveCard } from "./ui/InteractiveCard";
import { variantB, staggerContainer } from "@/utils/animations";

export const Hackathons = () => {
  return (
    <section id="hackathon" className="py-20 md:py-32 border-b border-hairline bg-[#080c17]">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12"
        >
          {/* Header */}
          <motion.div variants={variantB} className="lg:col-span-4 flex flex-col justify-start">
            <div className="sticky top-24">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-px bg-primary/50" />
                <h2 className="text-3xl font-bold tracking-tight text-content-primary">
                  Hackathons
                </h2>
              </div>
              <p className="text-content-muted text-sm md:text-base leading-relaxed">
                Competitive problem-solving and rapid prototyping in high-pressure environments.
              </p>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div variants={variantB} className="lg:col-span-8">
            <InteractiveCard className="p-6 md:p-8 flex flex-col group overflow-hidden">
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-2">
                  <Rocket className="w-5 h-5 text-primary" />
                  <h3 className="text-2xl font-bold text-content-primary group-hover:text-primary transition-colors">
                    {HACKATHON_ITEM.title}
                  </h3>
                </div>
                <p className="text-sm font-medium text-secondary mb-6 pl-8">
                  {HACKATHON_ITEM.organizer}
                </p>

                <div className="space-y-3 pl-8 border-l-2 border-hairline group-hover:border-primary/30 transition-colors ml-2.5">
                  {HACKATHON_ITEM.details.map((detail, idx) => (
                    <p key={idx} className="text-sm text-content-muted leading-relaxed relative before:content-[''] before:absolute before:-left-[19px] before:top-2 before:w-1.5 before:h-1.5 before:rounded-full before:bg-hairline group-hover:before:bg-primary/50 before:transition-colors">
                      {detail}
                    </p>
                  ))}
                </div>
              </div>
              
              {/* Decorative element */}
              <div className="absolute right-0 bottom-0 p-8 opacity-[0.02] group-hover:opacity-[0.05] transition-opacity pointer-events-none text-primary">
                <Rocket className="w-48 h-48 transform translate-x-1/4 translate-y-1/4 group-hover:-translate-y-4 group-hover:translate-x-4 transition-transform duration-700" />
              </div>
            </InteractiveCard>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
