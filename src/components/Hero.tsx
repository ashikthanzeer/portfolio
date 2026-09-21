"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, FileText, Mail, Phone, Linkedin, Github, Check, Copy } from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolioData";
import { NodeNetworkMotif } from "./NodeNetworkMotif";
import { SplitText, variantA, staggerContainer, springSmooth } from "@/utils/animations";
import { MagneticButton } from "./ui/MagneticButton";
import { CountUp } from "./ui/CountUp";

export const Hero = () => {
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(label);
    setTimeout(() => setCopiedField(null), 2000);
  };

  return (
    <section id="hero" className="relative pt-28 pb-16 md:pt-36 md:pb-24 border-b border-hairline overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
        >
          {/* Left Column */}
          <div className="lg:col-span-7 space-y-6">
            {/* Status Pill */}
            <motion.div variants={variantA} className="inline-flex items-center gap-2 px-3 py-1 rounded bg-surface border border-hairline text-xs">
              <span className="w-2 h-2 rounded-full bg-primary" />
              <span className="text-content-muted">CSE at CET · BS Data Science at IIT Madras</span>
            </motion.div>

            {/* Identity */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-content-primary leading-[1.08]">
                <SplitText text={PERSONAL_INFO.name} />
              </h1>
              <motion.p variants={variantA} className="text-sm sm:text-base font-medium text-primary tracking-wide uppercase">
                {PERSONAL_INFO.roleTitle}
              </motion.p>
            </div>

            {/* Tagline */}
            <motion.div variants={variantA} className="text-base sm:text-lg text-content-muted leading-relaxed max-w-2xl font-normal">
              <SplitText text={PERSONAL_INFO.tagline} />
            </motion.div>

            {/* CTAs */}
            <motion.div variants={variantA} className="pt-2 flex flex-wrap items-center gap-3">
              <MagneticButton
                href="#projects"
                className="group items-center gap-2 px-5 py-2.5 text-sm font-semibold text-bg bg-primary hover:bg-primary-hover rounded transition-colors"
              >
                <span className="relative z-10 flex items-center gap-2">
                  View Built Projects
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </span>
              </MagneticButton>

              <MagneticButton
                href={PERSONAL_INFO.contacts.resumeUrl}
                className="group items-center gap-2 px-4 py-2.5 text-sm font-medium text-content-primary border border-hairline rounded bg-surface overflow-hidden"
              >
                <div className="absolute inset-0 bg-primary-muted translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                <span className="relative z-10 flex items-center gap-2">
                  <FileText className="w-4 h-4 text-primary" />
                  Download Resume
                </span>
              </MagneticButton>
            </motion.div>

            {/* Social Links */}
            <motion.div variants={variantA} className="pt-3 border-t border-hairline flex flex-wrap items-center gap-4 text-xs text-content-muted">
              {/* Email */}
              <div className="flex items-center gap-1.5 bg-surface/80 border border-hairline px-2.5 py-1.5 rounded">
                <Mail className="w-3.5 h-3.5 text-primary" />
                <a href={`mailto:${PERSONAL_INFO.contacts.email}`} className="hover:text-content-primary transition-colors font-mono">
                  {PERSONAL_INFO.contacts.email}
                </a>
                <button
                  type="button"
                  onClick={() => copyToClipboard(PERSONAL_INFO.contacts.email, "email")}
                  title="Copy email"
                  className="text-content-dim hover:text-primary transition-colors ml-1"
                >
                  {copiedField === "email" ? <Check className="w-3.5 h-3.5 text-secondary" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-1.5 bg-surface/80 border border-hairline px-2.5 py-1.5 rounded">
                <Phone className="w-3.5 h-3.5 text-primary" />
                <a href={`tel:${PERSONAL_INFO.contacts.phone.replace(/\s+/g, "")}`} className="hover:text-content-primary transition-colors font-mono">
                  {PERSONAL_INFO.contacts.phone}
                </a>
                <button
                  type="button"
                  onClick={() => copyToClipboard(PERSONAL_INFO.contacts.phone, "phone")}
                  title="Copy phone"
                  className="text-content-dim hover:text-primary transition-colors ml-1"
                >
                  {copiedField === "phone" ? <Check className="w-3.5 h-3.5 text-secondary" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
              </div>

              {/* External Profiles */}
              <div className="flex items-center gap-2">
                <MagneticButton href={PERSONAL_INFO.contacts.githubUrl} className="p-1.5 bg-surface border border-hairline hover:border-primary/40 rounded text-content-muted hover:text-primary transition-colors">
                  <Github className="w-4 h-4" />
                </MagneticButton>
                <MagneticButton href={PERSONAL_INFO.contacts.linkedinUrl} className="p-1.5 bg-surface border border-hairline hover:border-primary/40 rounded text-content-muted hover:text-primary transition-colors">
                  <Linkedin className="w-4 h-4" />
                </MagneticButton>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Node Network Motif */}
          <motion.div variants={variantA} className="lg:col-span-5">
            <NodeNetworkMotif />
          </motion.div>
        </motion.div>

        {/* Rectilinear Metrics Strip */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ ...springSmooth, delay: 0.3 }}
          className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-px bg-hairline border border-hairline rounded overflow-hidden"
        >
          {PERSONAL_INFO.metrics.map((metric) => (
            <div key={metric.label} className="bg-surface p-4 flex flex-col justify-center transition-colors hover:bg-surface-hover">
              <span className="text-xl sm:text-2xl font-bold text-content-primary tracking-tight font-mono">
                <CountUp value={metric.value} isDecimal={metric.isDecimal} />
                {metric.suffix}
              </span>
              <span className="text-xs text-content-muted mt-1">{metric.label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
