import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolioData";
import { MagneticButton } from "./ui/MagneticButton";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-bg border-t border-hairline py-8 md:py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          
          <div className="flex flex-col items-center md:items-start">
            <span className="font-semibold text-content-primary mb-1 tracking-tight">
              Ashik Muhammed T
            </span>
            <span className="text-xs text-content-muted">
              Computer Science & Data Science Undergrad
            </span>
          </div>

          <div className="flex items-center gap-4">
            <MagneticButton href={PERSONAL_INFO.contacts.githubUrl} className="text-content-muted hover:text-primary transition-colors p-2">
              <Github className="w-4 h-4" />
            </MagneticButton>
            <MagneticButton href={PERSONAL_INFO.contacts.linkedinUrl} className="text-content-muted hover:text-primary transition-colors p-2">
              <Linkedin className="w-4 h-4" />
            </MagneticButton>
            <MagneticButton href={`mailto:${PERSONAL_INFO.contacts.email}`} className="text-content-muted hover:text-primary transition-colors p-2">
              <Mail className="w-4 h-4" />
            </MagneticButton>
          </div>
          
        </div>
        
        <div className="mt-8 pt-8 border-t border-hairline flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-content-dim">
          <p>© {currentYear} Ashik Muhammed T. All rights reserved.</p>
          <p>
            Designed & Built with <span className="text-primary hover:text-secondary transition-colors cursor-default">Next.js & Framer Motion</span>
          </p>
        </div>
      </div>
    </footer>
  );
};
