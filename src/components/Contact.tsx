"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Send, Check } from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolioData";
import { InteractiveCard } from "./ui/InteractiveCard";
import { variantA, staggerContainer, SplitText } from "@/utils/animations";
import { MagneticButton } from "./ui/MagneticButton";

export const Contact = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.contacts.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-20 md:py-32 relative">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="space-y-6"
        >
          <motion.div variants={variantA} className="inline-flex items-center justify-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-xs font-medium text-primary mb-4">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            Available for Opportunities
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-content-primary mb-4">
            <SplitText text="Let's build something." />
          </h2>
          
          <motion.p variants={variantA} className="text-content-muted max-w-2xl mx-auto text-sm md:text-base leading-relaxed mb-10">
            Currently seeking opportunities to apply software engineering and data science skills to impactful projects. 
            Whether it's a technical deep-dive, a hackathon team-up, or a full-time role, I'm always open to talking tech.
          </motion.p>

          <motion.div variants={variantA} className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <MagneticButton 
              href={`mailto:${PERSONAL_INFO.contacts.email}`}
              className="w-full sm:w-auto group flex items-center justify-center gap-2 px-8 py-3.5 text-sm font-semibold text-bg bg-primary hover:bg-primary-hover rounded transition-colors"
            >
              <Send className="w-4 h-4" />
              Say Hello
            </MagneticButton>
            
            <MagneticButton 
              onClick={handleCopyEmail}
              className="w-full sm:w-auto group flex items-center justify-center gap-2 px-8 py-3.5 text-sm font-medium text-content-primary bg-surface border border-hairline hover:border-primary/40 rounded transition-colors overflow-hidden"
            >
              <div className="absolute inset-0 bg-surface-hover translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300 ease-out" />
              <span className="relative z-10 flex items-center gap-2">
                {copied ? <Check className="w-4 h-4 text-secondary" /> : <Mail className="w-4 h-4 text-primary" />}
                {copied ? "Email Copied!" : "Copy Email"}
              </span>
            </MagneticButton>
          </motion.div>

          <motion.div variants={variantA} className="mt-16 pt-10 border-t border-hairline grid grid-cols-1 sm:grid-cols-2 gap-6 text-left max-w-2xl mx-auto">
             <InteractiveCard className="p-4 flex items-center gap-4">
                <div className="p-2 rounded bg-surface-hover text-primary">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-content-muted uppercase tracking-wider mb-0.5">Location</p>
                  <p className="text-sm font-medium text-content-primary">Trivandrum, India</p>
                </div>
             </InteractiveCard>
             
             <InteractiveCard className="p-4 flex items-center gap-4">
                <div className="p-2 rounded bg-surface-hover text-primary">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-content-muted uppercase tracking-wider mb-0.5">Direct Line</p>
                  <a href={`mailto:${PERSONAL_INFO.contacts.email}`} className="text-sm font-medium text-content-primary hover:text-primary transition-colors">
                    {PERSONAL_INFO.contacts.email}
                  </a>
                </div>
             </InteractiveCard>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
