import {
  IconBrandCraft,
  IconBriefcase,
  IconRocket,
  IconSparkles,
  IconVocabulary,
} from "@tabler/icons-react";
import { FloatingNav } from "./ui/floating-navbar";

const navItems = [
  {
    name: "Workflow",
    link: "/#workflow",
    icon: (
      <IconSparkles className="h-4 w-4 text-neutral-500 dark:text-white" />
    ),
  },
  {
    name: "Experiences",
    link: "/#experiences",
    icon: (
      <IconBriefcase className="h-4 w-4 text-neutral-500 dark:text-white" />
    ),
  },
  {
    name: "Projects",
    link: "/#projects",
    icon: <IconRocket className="h-4 w-4 text-neutral-500 dark:text-white" />,
  },
  {
    name: "Education",
    link: "/#education",
    icon: (
      <IconVocabulary className="h-4 w-4 text-neutral-500 dark:text-white" />
    ),
  },
  {
    name: "Skills",
    link: "/#skills",
    icon: (
      <IconBrandCraft className="h-4 w-4 text-neutral-500 dark:text-white" />
    ),
  },
];

export const Navbar = () => {
  return <FloatingNav navItems={navItems} />;
};
