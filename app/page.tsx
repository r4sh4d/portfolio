"use client";

import AboutSection from "@/components/sections/about";
import EducationsSection from "@/components/sections/educations";
import ExperiencesSection from "@/components/sections/experiences";
import HeroSection from "@/components/sections/hero";
import ProjectsSection from "@/components/sections/projects";
import SkillsSection from "@/components/sections/skills";
import ContactSection from "@/components/sections/contact";
import { Button } from "@/components/ui/button";

export default function Portfolio() {
  return (
    <div className="relative min-h-screen w-full bg-black text-white">
      <HeroSection />

      <div id="education" className="">
        <EducationsSection />
      </div>

      <div id="experiences" className="bg-neutral-950">
        <ExperiencesSection />
      </div>

      <div id="skills">
        <SkillsSection />
      </div>

      <div id="projects">
        <ProjectsSection />
      </div>
      {/* 
      <div id="about">
        <AboutSection />
      </div> */}

      <div id="contact">
        <ContactSection />
      </div>
    </div>
  );
}
