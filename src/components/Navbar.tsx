"use client";

import React, { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Menu, X, FileText, ArrowUpRight } from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolioData";
import { MagneticButton } from "./ui/MagneticButton";

export const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  const { scrollY } = useScroll();
  const navBg = useTransform(scrollY, [0, 50], ["rgba(5, 9, 20, 0)", "rgba(5, 9, 20, 0.8)"]);
  const navBorder = useTransform(scrollY, [0, 50], ["rgba(238, 242, 255, 0)", "rgba(238, 242, 255, 0.08)"]);
  const navBlur = useTransform(scrollY, [0, 50], ["blur(0px)", "blur(12px)"]);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "education", "skills", "projects", "hackathon", "leadership", "volunteering", "contact"];
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 140 && rect.bottom >= 140) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "About", href: "#hero" },
    { label: "Education", href: "#education" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Hackathons", href: "#hackathon" },
    { label: "Leadership", href: "#leadership" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <motion.header
      style={{ backgroundColor: navBg, borderColor: navBorder, backdropFilter: navBlur }}
      className="fixed top-0 left-0 right-0 z-50 border-b transition-colors duration-200"
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Brand identity */}
        <a href="#hero" className="flex items-center gap-2.5 text-content-primary hover:text-primary transition-colors group">
          <span className="w-2 h-2 rounded-full bg-primary group-hover:scale-125 transition-transform" />
          <span className="font-semibold tracking-tight text-sm sm:text-base">Ashik Muhammed T</span>
          <span className="hidden md:inline-block text-xs text-content-muted font-normal border-l border-hairline pl-2.5">CET · IIT Madras</span>
        </a>

        {/* Desktop Navigation links */}
        <nav className="hidden lg:flex items-center gap-1 relative">
          {navItems.map((item) => {
            const isActive = (item.href === "#hero" && activeSection === "hero") || item.href.slice(1) === activeSection;

            return (
              <a
                key={item.label}
                href={item.href}
                className={`relative px-3 py-1.5 text-xs font-medium transition-colors rounded ${isActive ? "text-primary" : "text-content-muted hover:text-content-primary"}`}
              >
                {isActive && (
                  <motion.span
                    layoutId="activeNavIndicator"
                    className="absolute inset-0 bg-primary-muted rounded z-0"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{item.label}</span>
              </a>
            );
          })}
        </nav>

        {/* Action buttons */}
        <div className="hidden sm:flex items-center gap-3">
          <MagneticButton href={PERSONAL_INFO.contacts.resumeUrl} target="_blank" rel="noopener noreferrer" className="group items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-content-muted border border-hairline rounded bg-surface overflow-hidden">
            <div className="absolute inset-0 bg-surface-hover translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300 ease-out" />
            <span className="relative z-10 flex items-center gap-1.5">
              <FileText className="w-3.5 h-3.5 group-hover:text-primary transition-colors" />
              Resume
            </span>
          </MagneticButton>
          <MagneticButton href="#contact" className="group items-center gap-1 px-3.5 py-1.5 text-xs font-semibold text-bg bg-primary hover:bg-primary-hover rounded transition-colors overflow-hidden">
            <div className="absolute inset-0 bg-primary-active translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300 ease-out" />
            <span className="relative z-10 flex items-center gap-1">
              Get in touch
              <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </span>
          </MagneticButton>
        </div>

        {/* Mobile menu trigger */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle navigation menu"
          className="lg:hidden p-2 text-content-muted hover:text-content-primary border border-hairline rounded bg-surface"
        >
          {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="lg:hidden bg-surface border-b border-hairline px-6 py-4 space-y-2"
        >
          <div className="flex flex-col space-y-1">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-sm text-content-muted hover:text-content-primary hover:bg-surface-hover rounded transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>
          <div className="pt-3 border-t border-hairline flex flex-col gap-2">
            <a
              href={PERSONAL_INFO.contacts.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 py-2 text-xs font-medium text-content-primary border border-hairline rounded hover:bg-surface-hover"
            >
              <FileText className="w-3.5 h-3.5" />
              View Resume
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-1.5 py-2 text-xs font-semibold text-bg bg-primary hover:bg-primary-hover rounded"
            >
              Get in touch
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
};
