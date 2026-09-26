export type WorkflowItem = {
  id: string;
  phase: string;
  badge: string;
  title: string;
  description: string;
  highlights: string[];
};

export const workflows: WorkflowItem[] = [
  {
    id: "gather",
    phase: "Phase 01",
    badge: "Gather requirements",
    title: "Audit the front-end surface",
    description:
      "I review the existing UI, design tokens and performance telemetry with product/design so the next iteration solves the right UX gaps without breaking the system.",
    highlights: [
      "Component inventory + CSS/tailwind audit for duplication or drift",
      "Metrics + UX insights doc outlining the jobs the interface must solve",
    ],
  },
  {
    id: "plan",
    phase: "Phase 02",
    badge: "Plan",
    title: "Map interface architecture",
    description:
      "I translate product flows into information architecture, component APIs and responsive breakpoints so the UI kit, data contracts and accessibility stories are crystal clear.",
    highlights: [
      "Screen flows with loading/error/empty states defined up front",
      "Storybook tickets with props, motion specs and accessibility notes",
    ],
  },
  {
    id: "implement",
    phase: "Phase 03",
    badge: "Implement",
    title: "Ship production-grade slices",
    description:
      "I pair with backend and design to ship UI slices that include responsive states, accessibility, analytics hooks and regression tests—ready for a direct merge.",
    highlights: [
      "Typesafe data hooks + Suspense/loading skeletons per feature",
      "Chromatic + Playwright runs on each PR with visual baselines",
    ],
  },
  {
    id: "optimize",
    phase: "Phase 04",
    badge: "Optimize",
    title: "Optimize the experience",
    description:
      "Once live, I monitor Core Web Vitals, replay tooling and product analytics to prioritize UI polish, bundle tuning and experimentation that moves adoption.",
    highlights: [
      "Lighthouse budgets + Next.js bundle analyzer fixes each sprint",
      "Experiment roadmap with hypotheses tied to UI interactions",
    ],
  },
  {
    id: "refine",
    phase: "Phase 05",
    badge: "Refine & Test",
    title: "Refine, test, hand off",
    description:
      "Before release I lock down edge cases, RTL/locale checks and feature flags, then create Loom walkthroughs and docs so future frontend work can build on the pattern.",
    highlights: [
      "Automated regression suite covering priority devices + assistive tech",
      "Handoff kit with Storybook links, configuration docs and rollout plan",
    ],
  },
];

export type EducationDetail = {
  school: string;
  degree: string;
  period: string;
  location: string;
  summary: string;
  highlights: string[];
  focus: string[];
};

export const educationDetail: EducationDetail = {
  school: "Baku State University",
  degree: "Bachelor of Science — Computer Science",
  period: "2017 — 2021",
  location: "Baku, Azerbaijan",
  summary:
    "Four-year journey grounded in fundamentals—algorithms on whiteboards, data structures in C++/C#, and hands-on practice with raw HTML/CSS/JS. Those building blocks still guide how I architect modern interfaces.",
  highlights: [
    "Solved 200+ algorithm problems in C++/C# across labs and contests",
    "Led peer workshops translating pseudocode into optimized solutions",
    "Built vanilla JS/CSS prototypes that later informed SPA architecture",
  ],
  focus: [
    "Data Structures & Algorithms",
    "C++ / C# Fundamentals",
    "HTML / CSS / JavaScript",
    "Object-Oriented Design",
    "Problem-Solving Workshops",
  ],
};

/** Brand tone of each project, used to tint the stage behind its media. */
export const projectTints = {
  blue: "#3b82f6",
  darkblue: "#0284c7",
  gold: "#d9b56a",
  gray: "#737373",
  green: "#65a30d",
  purple: "#9333ea",
  plum: "#7e3fa0",
  emeraldGray: "#047857",
};

/** A list entry is plain text, or a term with its detail (e.g. a user role). */
export type ProjectListItem = string | { term: string; detail: string };

export type ProjectSection = {
  title: string;
  items: ProjectListItem[];
};

export type Project = {
  slug: string;
  name: string;
  tagline?: string;
  link: string;
  thumbnail: string;
  color: keyof typeof projectTints;
  category: string;
  role: string;
  technologies: string[];
  highlights: string[];
  intro: string;
  sections: ProjectSection[];
};

export const projects: Project[] = [
  {
    slug: "paypower",
    name: "PayPower",
    tagline: "Prepaid Card App",
    link: "https://paypower.ca",
    thumbnail: "/paypower.webp",
    color: "blue",
    category: "Fintech • Mobile Banking",
    role: "Senior Frontend Developer",
    technologies: ["React Native", "TypeScript", "Redux", "REST APIs"],
    highlights: [
      "75K+ downloads across iOS & Android",
      "99.9% uptime for cardholders nationwide",
    ],
    intro:
      "A nationwide prepaid Mastercard ecosystem built for reliability, compliance and seamless everyday payments. Designed with a strong emphasis on security, performance and user trust.",
    sections: [
      {
        title: "Key Features",
        items: [
          "Full KYC system with document verification",
          "FATCA compliance automation for cross‑border regulations",
          "Canada Post verified address lookup",
          "Scheduled bill payments with smart reminders",
          "Reloadable Mastercard support with instant balance updates",
          "Digital gift card marketplace",
          "Apple / Google Wallet integration",
          "Real‑time alerts for every transaction",
          "Multi‑currency support with dynamic FX management",
        ],
      },
      {
        title: "Technical Achievements",
        items: [
          "Redesigned platform UI improving engagement by 35%",
          "Maintained legacy code while introducing modern architecture",
          "Ensured PCI DSS compliance for sensitive financial operations",
          "Delivered consistently high performance across mobile and web",
        ],
      },
    ],
  },
  {
    slug: "turbotable",
    name: "TurboTable.ai",
    link: "https://turbotable.ai",
    thumbnail: "/turbotable.webp",
    color: "emeraldGray",
    category: "AI Automation • Workflow Platform",
    role: "Frontend Engineer",
    technologies: ["Next.js", "Tailwind CSS", "shadcn/ui", "Supabase"],
    highlights: [
      "Natural language automation builder",
      "OCR + frontier models orchestrated visually",
      "1M free tokens bundled at launch",
    ],
    intro:
      "TurboTable turns repetitive document chores into automated workflows powered by OCR and frontier AI models. Users describe the job in plain language—“Extract customer names from these invoices”—and the platform assembles the steps, handles data capture and streams results into spreadsheets or Supabase-backed tables.",
    sections: [
      {
        title: "Product Snapshot",
        items: [
          "Chat-first interface that converts natural language requests into multi-step automations",
          "Live spreadsheet canvas that auto-populates with parsed results",
          "Built-in pricing tiers with 1M free tokens so teams can experiment",
        ],
      },
      {
        title: "Document Intelligence",
        items: [
          "OCR pipelines for receipts, contracts, forms and handwritten notes",
          "Clean data export into structured tables without manual typing or copy/paste",
          "Accuracy guardrails with review states before pushing to Supabase",
        ],
      },
      {
        title: "Scale-Ready Workflows",
        items: [
          "Handles 10 to 10M tasks with the same flow—no additional setup",
          "Analytics dashboards for workload, cost and throughput",
          "Enterprise controls: BYOK, on-prem deployment, dedicated AI expert",
        ],
      },
    ],
  },
  {
    slug: "the-lobby",
    name: "THE Lobby",
    tagline: "Social Media Platform",
    link: "https://thelobbylifestyle.com",
    thumbnail: "/thelobby.webp",
    color: "gold",
    category: "Social Network • Luxury Lifestyle",
    role: "Frontend Developer",
    technologies: [
      "React",
      "TypeScript",
      "Matrix Protocol",
      "Stripe",
      "Material-UI",
      "Apollo Client",
    ],
    highlights: ["Exclusive members", "Real-time messaging"],
    intro:
      "A premium social platform crafted for high‑end communities—where secure communication, luxury events and curated social experiences come together.",
    sections: [
      {
        title: "Core Features",
        items: [
          "Rich‑media social feed with seamless interactions",
          "End‑to‑end encrypted chat using Matrix protocol",
          "Premium events marketplace with secure ticketing",
          "Full calendar sync with Apple, Google & in‑app calendar",
          "Advanced privacy controls and profile customization",
          "Real‑time push notifications",
        ],
      },
      {
        title: "Role‑Based Dashboards",
        items: [
          {
            term: "User",
            detail: "Personalized feed, event access, messaging",
          },
          { term: "Admin", detail: "Moderation, user management, insights" },
        ],
      },
      {
        title: "Technical Contributions",
        items: [
          "Created a complete design system with full theming",
          "Implemented encrypted chat UI with realtime sync",
          "Integrated Stripe for high‑value event payments",
          "Optimized feed rendering for fast scroll performance",
        ],
      },
    ],
  },
  {
    slug: "staffy",
    name: "Staffy",
    tagline: "Job search & Recruitment Platform",
    link: "https://staffy.az",
    thumbnail: "/staffy.webp",
    color: "blue",
    category: "HR Tech • Recruitment Platform",
    role: "Frontend Developer",
    technologies: [
      "React",
      "React Context",
      "Material-UI",
      "Formik",
      "Yup",
      "Payment Integration",
    ],
    highlights: ["50+ businesses", "Streamlined hiring", "3 dashboard types"],
    intro:
      "A fully streamlined hiring platform designed to eliminate external communication and centralize the entire recruitment workflow—from job posting to hiring.",
    sections: [
      {
        title: "Platform Features",
        items: [
          "End‑to‑end hiring lifecycle",
          "Built‑in messaging replacing email communication",
          "Advanced job search with multi‑layer filtering",
          "CV upload & automated profile parsing",
          "Interview scheduling with calendar sync",
          "Subscription system for businesses",
          "Analytics dashboard for hiring performance",
        ],
      },
      {
        title: "Three Dashboards",
        items: [
          { term: "Job Seeker", detail: "Applications, messaging, profile" },
          { term: "Employer", detail: "Job creation, tracking, plans" },
          { term: "Admin", detail: "System control, payments, disputes" },
        ],
      },
      {
        title: "Technical Implementation",
        items: [
          "Reusable UI library with consistent patterns",
          "Formik + Yup for enterprise‑level validation",
          "Payment integration for subscription logic",
          "Optimized state via Context API",
        ],
      },
    ],
  },
  {
    slug: "tutor-az",
    name: "Tutor.az",
    tagline: "Find teachers & Courses",
    link: "https://tutor.az",
    thumbnail: "/tutor.webp",
    color: "darkblue",
    category: "EdTech • Learning Platform",
    role: "Frontend Developer",
    technologies: ["React", "TypeScript", "Payment Integration", "REST APIs"],
    highlights: ["Education marketplace", "Payment integrated", "3 user roles"],
    intro:
      "A dynamic learning marketplace designed to help students discover the right tutor—covering everything from exam prep to university‑level subjects.",
    sections: [
      {
        title: "Core Functionality",
        items: [
          "Flexible search and filtering system",
          "Detailed tutor profiles with credentials",
          "Integrated payments for class bookings",
          "Live session system with reminders",
          "Video conferencing integration",
          "Progress tracking & student reviews",
          "Document sharing for learning materials",
        ],
      },
      {
        title: "Multi‑Role System",
        items: [
          { term: "Student", detail: "Tutor discovery, sessions, payments" },
          { term: "Teacher", detail: "Availability, management, earnings" },
          { term: "Admin", detail: "Verification, disputes, analytics" },
        ],
      },
    ],
  },
  {
    slug: "yunik",
    name: "Yunik",
    tagline: "E-Commerce Platform",
    link: "https://yunik.az",
    thumbnail: "/yunik.webp",
    color: "green",
    category: "E-commerce • B2B",
    role: "Frontend Developer",
    technologies: ["React", "TypeScript", "E-commerce", "Payment Gateway"],
    highlights: ["Multi-industry uniforms", "B2B platform", "Custom orders"],
    intro:
      "A tailored B2B e‑commerce experience built for businesses purchasing professional uniforms in bulk—complete with customization and industry‑specific requirements.",
    sections: [
      {
        title: "E‑commerce Features",
        items: [
          "Industry‑sorted product catalogue",
          "Advanced filtering by size, composition & certifications",
          "Bulk ordering with dynamic price tiers",
          "Custom uniform design with embroidery printing",
          "Measurement‑based size chart system",
          "Wishlist, comparison tool, order tracking",
          "Invoice generation for corporate accounts",
        ],
      },
      {
        title: "Business Solutions",
        items: [
          "Corporate profile management",
          "Custom branding options",
          "Compliance with industry safety standards",
          "Flexible payment terms for B2B clients",
        ],
      },
    ],
  },
  {
    slug: "fintlabs",
    name: "Fintlabs",
    tagline: "Company Portfolio",
    link: "https://fintlabs.com",
    thumbnail: "/fintlabs.webp",
    color: "gray",
    category: "Company Portfolio • Showcase",
    role: "Frontend Developer",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Contact Forms"],
    highlights: ["Modern design", "SEO optimized", "Contact integration"],
    intro:
      "A polished, professional company website built to highlight expertise, showcase projects and drive client engagement with a clean modern look.",
    sections: [
      {
        title: "Website Sections",
        items: [
          "Company overview & mission",
          "Detailed case studies",
          "Technology stack highlights",
          "Service descriptions & value propositions",
          "Testimonials & social proof",
          "SEO‑friendly blog & insights",
          "Interactive, validated contact form",
        ],
      },
      {
        title: "Technical Excellence",
        items: [
          "Next.js SSR + SSG for blazing performance",
          "Tailwind‑based responsive design system",
          "Optimized images & accessibility‑first UI",
          "Analytics integration for tracking performance",
        ],
      },
    ],
  },
  {
    slug: "website-builder",
    name: "Website Builder",
    tagline: "Built for Fintlabs",
    link: "https://fintlabs.com",
    thumbnail: "/cms.webp",
    color: "purple",
    category: "CMS • Website Builder • Automation",
    role: "Frontend Developer",
    technologies: ["Strapi", "Next.js", "TypeScript", "Tailwind CSS"],
    highlights: ["Easy setup", "SEO optimized", "Analytics integration"],
    intro:
      "A flexible CMS-based website builder that allows full customization through the Strapi dashboard. Supports multiple templates for company sites, e-commerce platforms and more, all optimized for performance and SEO.",
    sections: [
      {
        title: "Dynamic Page Sections",
        items: [
          "Customizable Headers & Footers",
          "Lots of templates and sections to choose from",
          "Dynamic color themes: light, dark, or custom",
          "Flexible layout options per page",
        ],
      },
      {
        title: "Technical Highlights",
        items: [
          "Strapi-powered CMS for easy content management",
          "Next.js frontend with Tailwind CSS styling",
          "SEO and analytics integration made simple",
          "Highly modular and scalable architecture",
        ],
      },
    ],
  },
  {
    slug: "rashad-dev",
    name: "Personal Portfolio",
    tagline: "Rashad.dev",
    link: "https://rashad.dev",
    thumbnail: "/portfolio.webp",
    color: "plum",
    category: "Showcase • Personal Brand",
    role: "Frontend Engineer",
    technologies: [
      "Next.js",
      "Tailwind CSS",
      "shadcn/ui",
      "Aceternity UI",
      "Strapi",
    ],
    highlights: [
      "Strapi-powered content updates",
      "Sticky scroll project storytelling",
      "Contact form with server actions",
    ],
    intro:
      "My current digital home—a narrative portfolio that blends motion, sticky interactions and CMS-backed sections so I can showcase new work fast without redeploying. Every UI flourish you see here is built in this project.",
    sections: [
      {
        title: "Experience Highlights",
        items: [
          "Hero parallax that streams highlighted projects with depth and scroll-linked motion",
          "Sticky scroll reveal where project descriptions drive the right rail content and gradient",
          "Section titles/descriptions driven from a central config for ultra-fast copy edits",
        ],
      },
      {
        title: "Under the Hood",
        items: [
          "Next.js App Router, server actions for the contact form and smooth morphing hero animations",
          "Tailwind + shadcn/ui + Aceternity UI for consistent components and expressive effects",
          "Strapi CMS powering projects data so new case studies publish in minutes",
        ],
      },
    ],
  },
];

export type Experience = {
  company: string;
  role: string;
  start: string;
  end: string;
  summary: string;
  highlights: { title: string; description: string }[];
  stack: string[];
  impact: string;
};

export const experiences: Experience[] = [
  {
    company: "Fintlabs",
    role: "Senior Frontend Developer",
    start: "Jul 2025",
    end: "Present",
    summary:
      "Leading front-of-site experiences and automation tooling for Fintlabs, spanning marketing sites, CMS templates and AI-powered workflow products.",
    highlights: [
      {
        title: "Portfolio Platform Leadership",
        description:
          "Own the end-to-end experience for Fintlabs.com, shipping new case studies, SEO optimizations and interactive sections while keeping the design system consistent with the brand.",
      },
      {
        title: "CMS Website Builder",
        description:
          "Extended our Strapi + Next.js website builder so internal teams can launch microsites in minutes — adding drag-and-drop sections, theme presets and analytics hooks.",
      },
      {
        title: "TurboTable Launch",
        description:
          "Brought the TurboTable.ai automation product to market with a chat-first command interface, Supabase-backed storage and enterprise-ready onboarding.",
      },
    ],
    stack: [
      "Next.js",
      "Tailwind CSS",
      "shadcn/ui",
      "Strapi",
      "Supabase",
      "AI/ML",
    ],
    impact:
      "Helped vaporize marketing bottlenecks and accelerate AI product launches.",
  },
  {
    company: "Peoples Group",
    role: "Senior Frontend Developer",
    start: "Feb 2022",
    end: "Jun 2025",
    summary:
      "Led frontend development for fintech applications serving thousands of prepaid card users across Canada, delivering seamless cross-platform experiences for both web and mobile platforms.",
    highlights: [
      {
        title: "Legacy System Modernization",
        description:
          "Successfully refactored and maintained critical legacy codebases, ensuring zero downtime while implementing modern development practices and improving code maintainability by 40%.",
      },
      {
        title: "Feature Development & Delivery",
        description:
          "Architected and implemented high-impact features including real-time transaction monitoring, multi-currency support and enhanced security protocols.",
      },
      {
        title: "Complete Product Redesign",
        description:
          "Led a comprehensive UI/UX overhaul of web and mobile apps, improving engagement by 35% while boosting accessibility compliance.",
      },
    ],
    stack: [
      "React Native",
      "TypeScript",
      "Redux",
      "Tanstack Query",
      "React Hook Form",
    ],
    impact:
      "Contributed to processing over $50M in transactions annually with 99.9% uptime.",
  },
  {
    company: "Morpho",
    role: "Frontend Team Lead",
    start: "Jun 2020",
    end: "Jan 2022",
    summary:
      "Managed and mentored a cross-functional frontend team while delivering enterprise solutions across CRM, logistics, fintech and real-time communication domains.",
    highlights: [
      {
        title: "Technical Leadership & Standards",
        description:
          "Established frontend best practices, coding standards and workflows that reduced bug rates by 45% and accelerated sprint velocity by 30%.",
      },
      {
        title: "Client Solutions Architecture",
        description:
          "Collaborated with clients to translate complex requirements into scalable solutions that consistently exceeded expectations.",
      },
      {
        title: "Agile Development Management",
        description:
          "Oversaw sprint planning, estimation and code reviews across multiple projects, maintaining a 95% on-time delivery rate.",
      },
      {
        title: "Innovation & R&D",
        description:
          "Built proof-of-concepts for emerging technologies, validating performance and ROI before production adoption, cutting technical debt by 25%.",
      },
      {
        title: "Team Development",
        description:
          "Mentored junior and mid-level developers through workshops and reviews, resulting in multiple team promotions.",
      },
    ],
    stack: [
      "React",
      "React Native",
      "TypeScript",
      "Node.js",
      "WebSocket",
      "GraphQL",
      "CI/CD",
    ],
    impact:
      "Delivered 8+ production applications serving 100K+ users across multiple industries.",
  },
  {
    company: "THE Lobby",
    role: "Frontend Developer",
    start: "Sep 2019",
    end: "Mar 2020",
    summary:
      "Core team member building an innovative social networking platform with integrated secure messaging capabilities.",
    highlights: [
      {
        title: "Design System Architecture",
        description:
          "Built comprehensive component library from scratch with full light/dark mode support, ensuring consistent experiences across 50+ screens and reducing development time by 40%.",
      },
      {
        title: "Feature Engineering",
        description:
          "Developed social networking staples including real-time feeds, user profiles and engagement mechanics with optimized performance.",
      },
      {
        title: "Secure Messaging Integration",
        description:
          "Implemented end-to-end encrypted chat using Matrix protocol, balancing privacy-first communication with intuitive UI.",
      },
      {
        title: "Payment Integration",
        description:
          "Integrated Stripe for premium experiences, handling complex subscription flows while maintaining PCI compliance.",
      },
    ],
    stack: [
      "React Hooks",
      "TypeScript",
      "React-Tracked",
      "Matrix Protocol",
      "Stripe",
      "Material-UI",
      "Apollo Client",
      "i18next",
      "Formik",
      "Yup",
    ],
    impact: "Launched with an initial 10K+ user base and 4.5/5 rating.",
  },
  {
    company: "Staffy LLC",
    role: "Frontend Developer",
    start: "Feb 2019",
    end: "Aug 2019",
    summary:
      "Contributed to building a modern HR management platform with focus on scalable component architecture and user experience.",
    highlights: [
      {
        title: "Component Library Development",
        description:
          "Created a reusable, accessible component system with light/dark theming, accelerating feature delivery across the platform.",
      },
      {
        title: "Feature Implementation",
        description:
          "Built HR modules for employee management, scheduling, time tracking and analytics with real-time data sync.",
      },
      {
        title: "State Management Architecture",
        description:
          "Implemented React-Tracked to optimize rendering and cut unnecessary re-renders by 60%.",
      },
    ],
    stack: [
      "React Hooks",
      "TypeScript",
      "React-Tracked",
      "Material-UI",
      "Apollo Client",
      "i18next",
      "Formik",
      "Yup",
    ],
    impact:
      "Helped streamline HR operations for 50+ small-to-medium businesses.",
  },
  {
    company: "Freelance",
    role: "React Native Developer",
    start: "Oct 2018",
    end: "Jan 2019",
    summary:
      "Contracted to develop an innovative blockchain-powered mobile application combining secure messaging with e-commerce capabilities.",
    highlights: [
      {
        title: "Blockchain Integration",
        description:
          "Architected decentralized messaging backed by blockchain to guarantee tamper-proof communication.",
      },
      {
        title: "E-commerce Platform",
        description:
          "Built marketplace features—listings, cart, secure checkout and order tracking—directly inside the chat experience.",
      },
      {
        title: "Cross-Platform Delivery",
        description:
          "Used React Native + Expo to ship simultaneously on iOS and Android, halving the development effort versus native builds.",
      },
      {
        title: "Backend Collaboration",
        description:
          "Partnered with .NET Core engineers to design RESTful APIs and real-time protocols that powered messaging and commerce flows.",
      },
    ],
    stack: [
      "React Native",
      "Expo",
      ".NET Core",
      "Blockchain",
      "RESTful APIs",
      "WebSocket",
    ],
    impact:
      "Delivered MVP within four months, helping the client secure seed funding.",
  },
  {
    company: "Pronet LLC",
    role: "Junior Frontend Developer",
    start: "Jan 2018",
    end: "Sep 2018",
    summary:
      "Started professional journey building and maintaining an internal enterprise portal, gaining foundational experience in shipping production-ready features.",
    highlights: [
      {
        title: "Feature Development",
        description:
          "Delivered new portal modules that streamlined internal workflows and boosted employee productivity.",
      },
      {
        title: "Maintenance & Support",
        description:
          "Handled bug fixes and upkeep, sustaining 99% uptime for 200+ employees.",
      },
      {
        title: "Technical Foundation",
        description:
          "Built core skills in web technologies, version control, debugging and collaborative practices that shaped future work.",
      },
    ],
    stack: ["JavaScript", "HTML5", "CSS3", "jQuery", "Git"],
    impact:
      "Improved internal tool efficiency by 25% and built the foundation for a career in scalable frontend engineering.",
  },
];

export type Skill = {
  name: string;
  area: string;
  description: string;
};

export type SkillGroup = {
  id: string;
  title: string;
  caption: string;
  skills: Skill[];
};

export const skillGroups: SkillGroup[] = [
  {
    id: "core",
    title: "Core Stack",
    caption: "Frameworks & languages I use daily to ship production apps.",
    skills: [
      {
        name: "React",
        area: "Frontend",
        description: "Hooks, Suspense, Concurrent features.",
      },
      {
        name: "React Native",
        area: "Mobile",
        description: "Expo, native modules, OTA updates.",
      },
      {
        name: "JavaScript",
        area: "Language",
        description: "The language that powers my work.",
      },
      {
        name: "TypeScript",
        area: "Language",
        description: "Type-safe APIs, utility types, generics.",
      },
      {
        name: "Next.js",
        area: "Full-stack",
        description: "App Router, RSC, Edge deployments.",
      },
      {
        name: "Tailwind CSS",
        area: "Styling",
        description: "Design systems, adaptive theming.",
      },
      {
        name: "React Query",
        area: "Data",
        description: "Server-state caching, infinite queries.",
      },
    ],
  },
  {
    id: "ecosystem",
    title: "Ecosystem",
    caption: "Supporting tools and runtimes I rely on for scale and DX.",
    skills: [
      {
        name: "GraphQL",
        area: "API",
        description: "Schema-first design, Apollo Federation.",
      },
      {
        name: "Apollo Client",
        area: "Data",
        description: "Cache orchestration, optimistic UI.",
      },
      {
        name: "Zustand",
        area: "State",
        description: "Composable stores with persistence.",
      },
      {
        name: "React Hook Form",
        area: "Forms",
        description: "Accessible headless validations.",
      },
      {
        name: "Node.js",
        area: "Runtime",
        description: "APIs, SSR helpers, tooling scripts.",
      },
      {
        name: "Strapi",
        area: "CMS",
        description: "Composable content APIs for marketing and docs.",
      },
    ],
  },
  {
    id: "tooling",
    title: "Tooling & Ops",
    caption: "Collaboration and delivery stack that keeps releases moving.",
    skills: [
      {
        name: "Expo",
        area: "Mobile",
        description: "Build service, OTA, app store pipelines.",
      },
      {
        name: "Figma",
        area: "Design",
        description: "Component libraries, motion handoff.",
      },
      {
        name: "Tailwind UI & shadcn",
        area: "UI Kits",
        description: "Product UI scaffolding at velocity.",
      },
      {
        name: "Git & GitHub",
        area: "Versioning",
        description: "Trunk-based flow, protected releases.",
      },
      {
        name: "GitLab",
        area: "CI/CD",
        description: "Multi-stage pipelines, review apps.",
      },
      {
        name: "TanStack Router",
        area: "Routing",
        description: "Typed routing and data loaders.",
      },
    ],
  },
];
