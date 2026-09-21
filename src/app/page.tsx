import React from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Education } from "@/components/Education";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Hackathons } from "@/components/Hackathons";
import { Leadership } from "@/components/Leadership";
import { Volunteering } from "@/components/Volunteering";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-bg text-content-primary selection:bg-copper selection:text-bg">
      <Navbar />
      <Hero />
      <Education />
      <Skills />
      <Projects />
      <Hackathons />
      <Leadership />
      <Volunteering />
      <Contact />
      <Footer />
    </main>
  );
}
