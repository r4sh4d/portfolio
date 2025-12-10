"use client";

import EducationsSection from "@/components/sections/educations";
import ExperiencesSection from "@/components/sections/experiences";
import HeroSection from "@/components/sections/hero";
import ProjectsSection from "@/components/sections/projects";
import SkillsSection from "@/components/sections/skills";
import ContactSection from "@/components/sections/contact";
import WorkflowSection from "@/components/sections/workflow";

export default function Portfolio() {
  return (
    <div className="relative min-h-screen w-full bg-background text-foreground transition-[background-color,border-color] duration-500">
      <HeroSection />

      <div id="experiences" className="bg-neutral-950">
        <ExperiencesSection />
      </div>

      <div id="workflow">
        <WorkflowSection />
      </div>

      <div id="projects">
        <ProjectsSection />
      </div>

      <div id="education" className="">
        <EducationsSection />
      </div>

      <div id="skills">
        <SkillsSection />
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
