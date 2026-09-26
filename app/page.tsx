import { About } from "@/components/sections/about";
import { Capabilities } from "@/components/sections/capabilities";
import { Contact } from "@/components/sections/contact";
import { Experience } from "@/components/sections/experience";
import { Hero } from "@/components/sections/hero";
import { Process } from "@/components/sections/process";
import { StackIndex } from "@/components/sections/stack-index";
import { Work } from "@/components/sections/work";

export default function Home() {
  return (
    <>
      <Hero />
      <Work />
      <StackIndex />
      <About />
      <Experience />
      <Process />
      <Capabilities />
      <Contact />
    </>
  );
}
