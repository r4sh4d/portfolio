import { TimelineEntry } from "@/components/ui/timeline";
import { projectColorVariants, experienceColorVariants } from "@/theme";
import { ProjectParagraph } from "@/components/project/project-paragraph";
import { ProjectSection } from "@/components/project/project-section";
import { ProjectList } from "@/components/project/project-list";
import { ProjectContainer } from "@/components/project/project-container";
import { ExperienceEntry } from "@/components/experience/experience-entry";
import { ExperienceHighlights } from "@/components/experience/experience-highlights";
import { ExperienceTagList } from "@/components/experience/experience-tag-list";
import { ExperienceImpact } from "@/components/experience/experience-impact";
import {
  IconChartLine,
  IconCode,
  IconDeviceFloppy,
  IconHierarchy3,
  IconTargetArrow,
} from "@tabler/icons-react";

export type WorkflowItem = {
  id: string;
  phase: string;
  badge: string;
  title: string;
  description: string;
  highlights: string[];
  icon: React.ReactNode;
  area: string;
  accent: string;
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
    icon: <IconTargetArrow className="h-5 w-5 text-sky-400" />,
    area: "md:[grid-area:1/1/2/7] xl:[grid-area:1/1/2/5]",
    accent:
      "from-sky-500/10 via-sky-500/0 to-transparent dark:from-sky-500/25 dark:via-sky-500/10 dark:to-transparent",
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
    icon: <IconHierarchy3 className="h-5 w-5 text-purple-400" />,
    area: "md:[grid-area:1/7/2/13] xl:[grid-area:2/1/3/5]",
    accent:
      "from-purple-500/10 via-purple-500/0 to-transparent dark:from-purple-500/25 dark:via-purple-500/10 dark:to-transparent",
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
    icon: <IconCode className="h-5 w-5 text-emerald-400" />,
    area: "md:[grid-area:2/1/3/7] xl:[grid-area:1/5/3/9]",
    accent:
      "from-emerald-500/10 via-emerald-500/0 to-transparent dark:from-emerald-500/25 dark:via-emerald-500/10 dark:to-transparent",
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
    icon: <IconChartLine className="h-5 w-5 text-cyan-400" />,
    area: "md:[grid-area:2/7/3/13] xl:[grid-area:1/9/2/13]",
    accent:
      "from-cyan-500/10 via-cyan-500/0 to-transparent dark:from-cyan-500/25 dark:via-cyan-500/10 dark:to-transparent",
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
    icon: <IconDeviceFloppy className="h-5 w-5 text-amber-400" />,
    area: "md:[grid-area:3/1/4/13] xl:[grid-area:2/9/3/13]",
    accent:
      "from-amber-500/10 via-amber-500/0 to-transparent dark:from-amber-500/25 dark:via-amber-500/10 dark:to-transparent",
  },
];

export type EducationDetail = {
  school: string;
  degree: string;
  period: string;
  location: string;
  logo: string;
  summary: string;
  highlights: string[];
  focus: string[];
};

export const educationDetail: EducationDetail = {
  school: "Baku State University",
  degree: "Bachelor of Science — Computer Science",
  period: "2017 — 2021",
  location: "Baku, Azerbaijan",
  logo: "/bsu.png",
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

export const projects: {
  title: string;
  link: string;
  thumbnail: string;
  color: keyof typeof projectColorVariants;
  description: React.ReactNode;
  category: string;
  role: string;
  technologies: string[];
  highlights: string[];
}[] = [
  {
    title: "PayPower - Prepaid Card App",
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
    description: (
      <ProjectContainer>
        <ProjectParagraph>
          A nationwide prepaid Mastercard ecosystem built for reliability,
          compliance and seamless everyday payments. Designed with a strong
          emphasis on security, performance and user trust.
        </ProjectParagraph>

        <ProjectSection title="✨ Key Features">
          <ProjectList>
            <li>Full KYC system with document verification</li>
            <li>FATCA compliance automation for cross‑border regulations</li>
            <li>Canada Post verified address lookup</li>
            <li>Scheduled bill payments with smart reminders</li>
            <li>Reloadable Mastercard support with instant balance updates</li>
            <li>Digital gift card marketplace</li>
            <li>Apple / Google Wallet integration</li>
            <li>Real‑time alerts for every transaction</li>
            <li>Multi‑currency support with dynamic FX management</li>
          </ProjectList>
        </ProjectSection>

        <ProjectSection title="🛠️ Technical Achievements">
          <ProjectList>
            <li>Redesigned platform UI improving engagement by 35%</li>
            <li>
              Maintained legacy code while introducing modern architecture
            </li>
            <li>
              Ensured PCI DSS compliance for sensitive financial operations
            </li>
            <li>
              Delivered consistently high performance across mobile and web
            </li>
          </ProjectList>
        </ProjectSection>
      </ProjectContainer>
    ),
  },

  // --- TurboTable ---
  {
    title: "TurboTable.ai",
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
    description: (
      <ProjectContainer>
        <ProjectParagraph>
          TurboTable turns repetitive document chores into automated workflows
          powered by OCR and frontier AI models. Users describe the job in plain
          language—“Extract customer names from these invoices”—and the platform
          assembles the steps, handles data capture and streams results into
          spreadsheets or Supabase-backed tables.
        </ProjectParagraph>

        <ProjectSection title="✨ Product Snapshot">
          <ProjectList>
            <li>
              Chat-first interface that converts natural language requests into
              multi-step automations
            </li>
            <li>
              Live spreadsheet canvas that auto-populates with parsed results
            </li>
            <li>
              Built-in pricing tiers with 1M free tokens so teams can experiment
            </li>
          </ProjectList>
        </ProjectSection>

        <ProjectSection title="📄 Document Intelligence">
          <ProjectList>
            <li>
              OCR pipelines for receipts, contracts, forms and handwritten notes
            </li>
            <li>
              Clean data export into structured tables without manual typing or
              copy/paste
            </li>
            <li>
              Accuracy guardrails with review states before pushing to Supabase
            </li>
          </ProjectList>
        </ProjectSection>

        <ProjectSection title="📊 Scale-Ready Workflows">
          <ProjectList>
            <li>
              Handles 10 to 10M tasks with the same flow—no additional setup
            </li>
            <li>Analytics dashboards for workload, cost and throughput</li>
            <li>
              Enterprise controls: BYOK, on-prem deployment, dedicated AI expert
            </li>
          </ProjectList>
        </ProjectSection>
      </ProjectContainer>
    ),
  },

  // --- THE LOBBY ---
  {
    title: "THE Lobby - Social Media Platform",
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
    description: (
      <ProjectContainer>
        <ProjectParagraph>
          A premium social platform crafted for high‑end communities—where
          secure communication, luxury events and curated social experiences
          come together.
        </ProjectParagraph>

        <ProjectSection title="🌟 Core Features">
          <ProjectList>
            <li>Rich‑media social feed with seamless interactions</li>
            <li>End‑to‑end encrypted chat using Matrix protocol</li>
            <li>Premium events marketplace with secure ticketing</li>
            <li>Full calendar sync with Apple, Google & in‑app calendar</li>
            <li>Advanced privacy controls and profile customization</li>
            <li>Real‑time push notifications</li>
          </ProjectList>
        </ProjectSection>

        <ProjectSection title="🧩 Role‑Based Dashboards">
          <ProjectList>
            <li>
              <strong>User:</strong> Personalized feed, event access, messaging
            </li>
            <li>
              <strong>Admin:</strong> Moderation, user management, insights
            </li>
          </ProjectList>
        </ProjectSection>

        <ProjectSection title="🚀 Technical Contributions">
          <ProjectList>
            <li>Created a complete design system with full theming</li>
            <li>Implemented encrypted chat UI with realtime sync</li>
            <li>Integrated Stripe for high‑value event payments</li>
            <li>Optimized feed rendering for fast scroll performance</li>
          </ProjectList>
        </ProjectSection>
      </ProjectContainer>
    ),
  },

  // --- STAFFY ---
  {
    title: "Staffy - Job search & Recruitment Platform",
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
    description: (
      <ProjectContainer>
        <ProjectParagraph>
          A fully streamlined hiring platform designed to eliminate external
          communication and centralize the entire recruitment workflow—from job
          posting to hiring.
        </ProjectParagraph>

        <ProjectSection title="🧱 Platform Features">
          <ProjectList>
            <li>End‑to‑end hiring lifecycle</li>
            <li>Built‑in messaging replacing email communication</li>
            <li>Advanced job search with multi‑layer filtering</li>
            <li>CV upload & automated profile parsing</li>
            <li>Interview scheduling with calendar sync</li>
            <li>Subscription system for businesses</li>
            <li>Analytics dashboard for hiring performance</li>
          </ProjectList>
        </ProjectSection>

        <ProjectSection title="👥 Three Dashboards">
          <ProjectList>
            <li>
              <strong>Job Seeker:</strong> Applications, messaging, profile
            </li>
            <li>
              <strong>Employer:</strong> Job creation, tracking, plans
            </li>
            <li>
              <strong>Admin:</strong> System control, payments, disputes
            </li>
          </ProjectList>
        </ProjectSection>

        <ProjectSection title="🧠 Technical Implementation">
          <ProjectList>
            <li>Reusable UI library with consistent patterns</li>
            <li>Formik + Yup for enterprise‑level validation</li>
            <li>Payment integration for subscription logic</li>
            <li>Optimized state via Context API</li>
          </ProjectList>
        </ProjectSection>
      </ProjectContainer>
    ),
  },

  // --- TUTOR.AZ ---
  {
    title: "Tutor.az - Find teachers & Courses",
    link: "https://tutor.az",
    thumbnail: "/tutor.webp",
    color: "darkblue",
    category: "EdTech • Learning Platform",
    role: "Frontend Developer",
    technologies: ["React", "TypeScript", "Payment Integration", "REST APIs"],
    highlights: ["Education marketplace", "Payment integrated", "3 user roles"],
    description: (
      <ProjectContainer>
        <ProjectParagraph>
          A dynamic learning marketplace designed to help students discover the
          right tutor—covering everything from exam prep to university‑level
          subjects.
        </ProjectParagraph>

        <ProjectSection title="⚙️ Core Functionality">
          <ProjectList>
            <li>Flexible search and filtering system</li>
            <li>Detailed tutor profiles with credentials</li>
            <li>Integrated payments for class bookings</li>
            <li>Live session system with reminders</li>
            <li>Video conferencing integration</li>
            <li>Progress tracking & student reviews</li>
            <li>Document sharing for learning materials</li>
          </ProjectList>
        </ProjectSection>

        <ProjectSection title="👤 Multi‑Role System">
          <ProjectList>
            <li>
              <strong>Student:</strong> Tutor discovery, sessions, payments
            </li>
            <li>
              <strong>Teacher:</strong> Availability, management, earnings
            </li>
            <li>
              <strong>Admin:</strong> Verification, disputes, analytics
            </li>
          </ProjectList>
        </ProjectSection>
      </ProjectContainer>
    ),
  },

  // --- YUNIK ---
  {
    title: "Yunik - E-Commerce Platform",
    link: "https://yunik.az",
    thumbnail: "/yunik.webp",
    color: "green",
    category: "E-commerce • B2B",
    role: "Frontend Developer",
    technologies: ["React", "TypeScript", "E-commerce", "Payment Gateway"],
    highlights: ["Multi-industry uniforms", "B2B platform", "Custom orders"],
    description: (
      <ProjectContainer>
        <ProjectParagraph>
          A tailored B2B e‑commerce experience built for businesses purchasing
          professional uniforms in bulk—complete with customization and
          industry‑specific requirements.
        </ProjectParagraph>

        <ProjectSection title="🛍️ E‑commerce Features">
          <ProjectList>
            <li>Industry‑sorted product catalogue</li>
            <li>Advanced filtering by size, composition & certifications</li>
            <li>Bulk ordering with dynamic price tiers</li>
            <li>Custom uniform design with embroidery printing</li>
            <li>Measurement‑based size chart system</li>
            <li>Wishlist, comparison tool, order tracking</li>
            <li>Invoice generation for corporate accounts</li>
          </ProjectList>
        </ProjectSection>

        <ProjectSection title="🏢 Business Solutions">
          <ProjectList>
            <li>Corporate profile management</li>
            <li>Custom branding options</li>
            <li>Compliance with industry safety standards</li>
            <li>Flexible payment terms for B2B clients</li>
          </ProjectList>
        </ProjectSection>
      </ProjectContainer>
    ),
  },

  // --- FINTLABS ---
  {
    title: "Fintlabs - Company Portfolio",
    link: "https://fintlabs.com",
    thumbnail: "/fintlabs.webp",
    color: "gray",
    category: "Company Portfolio • Showcase",
    role: "Frontend Developer",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Contact Forms"],
    highlights: ["Modern design", "SEO optimized", "Contact integration"],
    description: (
      <ProjectContainer>
        <ProjectParagraph>
          A polished, professional company website built to highlight expertise,
          showcase projects and drive client engagement with a clean modern
          look.
        </ProjectParagraph>

        <ProjectSection title="🧭 Website Sections">
          <ProjectList>
            <li>Company overview & mission</li>
            <li>Detailed case studies</li>
            <li>Technology stack highlights</li>
            <li>Service descriptions & value propositions</li>
            <li>Testimonials & social proof</li>
            <li>SEO‑friendly blog & insights</li>
            <li>Interactive, validated contact form</li>
          </ProjectList>
        </ProjectSection>

        <ProjectSection title="💡 Technical Excellence">
          <ProjectList>
            <li>Next.js SSR + SSG for blazing performance</li>
            <li>Tailwind‑based responsive design system</li>
            <li>Optimized images & accessibility‑first UI</li>
            <li>Analytics integration for tracking performance</li>
          </ProjectList>
        </ProjectSection>
      </ProjectContainer>
    ),
  },

  // --- CMS ---
  {
    title: "Website Builder - Built for Fintlabs",
    link: "https://fintlabs.com",
    thumbnail: "/cms.webp",
    color: "purple",
    category: "CMS • Website Builder • Automation",
    role: "Frontend Developer",
    technologies: ["Strapi", "Next.js", "TypeScript", "Tailwind CSS"],
    highlights: ["Easy setup", "SEO optimized", "Analytics integration"],
    description: (
      <ProjectContainer>
        <ProjectParagraph>
          A flexible CMS-based website builder that allows full customization
          through the Strapi dashboard. Supports multiple templates for company
          sites, e-commerce platforms and more, all optimized for performance
          and SEO.
        </ProjectParagraph>
        <ProjectSection title="🧱 Dynamic Page Sections">
          <ProjectList className="gap-2">
            <li>Customizable Headers & Footers</li>
            <li>Lots of templates and sections to choose from</li>
            <li>Dynamic color themes: light, dark, or custom</li>
            <li>Flexible layout options per page</li>
          </ProjectList>
        </ProjectSection>
        <ProjectSection title="⚙️ Technical Highlights">
          <ProjectList>
            <li>Strapi-powered CMS for easy content management</li>
            <li>Next.js frontend with Tailwind CSS styling</li>
            <li>SEO and analytics integration made simple</li>
            <li>Highly modular and scalable architecture</li>
          </ProjectList>
        </ProjectSection>
      </ProjectContainer>
    ),
  },

  // --- Portfolio ---
  {
    title: "Personal Portfolio — Rashad.dev",
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
    description: (
      <ProjectContainer>
        <ProjectParagraph>
          My current digital home—a narrative portfolio that blends motion,
          sticky interactions and CMS-backed sections so I can showcase new work
          fast without redeploying. Every UI flourish you see here is built in
          this project.
        </ProjectParagraph>

        <ProjectSection title="✨ Experience Highlights">
          <ProjectList>
            <li>
              Hero parallax that streams highlighted projects with depth and
              scroll-linked motion
            </li>
            <li>
              Sticky scroll reveal where project descriptions drive the right
              rail content and gradient
            </li>
            <li>
              Section titles/descriptions driven from a central config for
              ultra-fast copy edits
            </li>
          </ProjectList>
        </ProjectSection>

        <ProjectSection title="⚙️ Under the Hood">
          <ProjectList>
            <li>
              Next.js App Router, server actions for the contact form and smooth
              morphing hero animations
            </li>
            <li>
              Tailwind + shadcn/ui + Aceternity UI for consistent components and
              expressive effects
            </li>
            <li>
              Strapi CMS powering projects data so new case studies publish in
              minutes
            </li>
          </ProjectList>
        </ProjectSection>
      </ProjectContainer>
    ),
  },
];

export const experiences: TimelineEntry[] = [
  {
    title: (
      <span className={experienceColorVariants.charcoal.dateRange}>
        Jul 2025 — Present
      </span>
    ),
    markerBgClass: experienceColorVariants.charcoal.markerBg,
    markerBorderClass: experienceColorVariants.charcoal.markerBorder,
    content: (
      <ExperienceEntry
        title="Senior Frontend Developer — Fintlabs"
        subtitle="Leading front-of-site experiences and automation tooling for Fintlabs, spanning marketing sites, CMS templates and AI-powered workflow products."
      >
        <ExperienceHighlights
          title="Key Achievements & Responsibilities"
          accentClass={experienceColorVariants.charcoal.highlightBorder}
          items={[
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
          ]}
        />
        <ExperienceTagList
          label="TECHNOLOGIES & TOOLS"
          colorClass={experienceColorVariants.charcoal.tagClass}
          tags={[
            "Next.js",
            "Tailwind CSS",
            "shadcn/ui",
            "Strapi",
            "Supabase",
            "AI/ML",
          ]}
        />
        <ExperienceImpact
          background={experienceColorVariants.charcoal.impactBg}
          border={experienceColorVariants.charcoal.impactBorder}
          labelClass={experienceColorVariants.charcoal.impactLabel}
        >
          Helped vaporize marketing bottlenecks and accelerate AI product
          launches.
        </ExperienceImpact>
      </ExperienceEntry>
    ),
  },
  {
    title: (
      <span className={experienceColorVariants.blue.dateRange}>
        Feb 2022 — Jun 2025
      </span>
    ),
    markerBgClass: experienceColorVariants.blue.markerBg,
    markerBorderClass: experienceColorVariants.blue.markerBorder,
    content: (
      <ExperienceEntry
        title="Senior Frontend Developer — Peoples Group"
        subtitle="Led frontend development for fintech applications serving thousands of prepaid card users across Canada, delivering seamless cross-platform experiences for both web and mobile platforms."
      >
        <ExperienceHighlights
          title="Key Achievements & Responsibilities"
          accentClass={experienceColorVariants.blue.highlightBorder}
          items={[
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
          ]}
        />
        <ExperienceTagList
          label="TECHNOLOGIES & TOOLS"
          colorClass={experienceColorVariants.blue.tagClass}
          tags={[
            "React Native",
            "TypeScript",
            "Redux",
            "Tanstack Query",
            "React Hook Form",
          ]}
        />
        <ExperienceImpact
          background={experienceColorVariants.blue.impactBg}
          border={experienceColorVariants.blue.impactBorder}
          labelClass={experienceColorVariants.blue.impactLabel}
        >
          Contributed to processing over $50M in transactions annually with
          99.9% uptime.
        </ExperienceImpact>
      </ExperienceEntry>
    ),
  },
  {
    title: (
      <span className={experienceColorVariants.purple.dateRange}>
        Jun 2020 — Jan 2022
      </span>
    ),
    markerBgClass: experienceColorVariants.purple.markerBg,
    markerBorderClass: experienceColorVariants.purple.markerBorder,
    content: (
      <ExperienceEntry
        title="Frontend Team Lead — Morpho"
        subtitle="Managed and mentored a cross-functional frontend team while delivering enterprise solutions across CRM, logistics, fintech and real-time communication domains."
      >
        <ExperienceHighlights
          title="Key Achievements & Responsibilities"
          accentClass={experienceColorVariants.purple.highlightBorder}
          items={[
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
          ]}
        />
        <ExperienceTagList
          label="TECHNOLOGIES & TOOLS"
          colorClass={experienceColorVariants.purple.tagClass}
          tags={[
            "React",
            "React Native",
            "TypeScript",
            "Node.js",
            "WebSocket",
            "GraphQL",
            "CI/CD",
          ]}
        />
        <ExperienceImpact
          background={experienceColorVariants.purple.impactBg}
          border={experienceColorVariants.purple.impactBorder}
          labelClass={experienceColorVariants.purple.impactLabel}
        >
          Delivered 8+ production applications serving 100K+ users across
          multiple industries.
        </ExperienceImpact>
      </ExperienceEntry>
    ),
  },
  {
    title: (
      <span className={experienceColorVariants.green.dateRange}>
        Sep 2019 — Mar 2020
      </span>
    ),
    markerBgClass: experienceColorVariants.green.markerBg,
    markerBorderClass: experienceColorVariants.green.markerBorder,
    content: (
      <ExperienceEntry
        title="Frontend Developer — THE Lobby"
        subtitle="Core team member building an innovative social networking platform with integrated secure messaging capabilities."
      >
        <ExperienceHighlights
          title="Key Achievements & Responsibilities"
          accentClass={experienceColorVariants.green.highlightBorder}
          items={[
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
          ]}
        />
        <ExperienceTagList
          label="TECHNOLOGIES & TOOLS"
          colorClass={experienceColorVariants.green.tagClass}
          tags={[
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
          ]}
        />
        <ExperienceImpact
          background={experienceColorVariants.green.impactBg}
          border={experienceColorVariants.green.impactBorder}
          labelClass={experienceColorVariants.green.impactLabel}
        >
          Launched with an initial 10K+ user base and 4.5/5 rating.
        </ExperienceImpact>
      </ExperienceEntry>
    ),
  },
  {
    title: (
      <span className={experienceColorVariants.orange.dateRange}>
        Feb 2019 — Aug 2019
      </span>
    ),
    markerBgClass: experienceColorVariants.orange.markerBg,
    markerBorderClass: experienceColorVariants.orange.markerBorder,
    content: (
      <ExperienceEntry
        title="Frontend Developer — Staffy LLC"
        subtitle="Contributed to building a modern HR management platform with focus on scalable component architecture and user experience."
      >
        <ExperienceHighlights
          title="Key Achievements & Responsibilities"
          accentClass={experienceColorVariants.orange.highlightBorder}
          items={[
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
          ]}
        />
        <ExperienceTagList
          label="TECHNOLOGIES & TOOLS"
          colorClass={experienceColorVariants.orange.tagClass}
          tags={[
            "React Hooks",
            "TypeScript",
            "React-Tracked",
            "Material-UI",
            "Apollo Client",
            "i18next",
            "Formik",
            "Yup",
          ]}
        />
        <ExperienceImpact
          background={experienceColorVariants.orange.impactBg}
          border={experienceColorVariants.orange.impactBorder}
          labelClass={experienceColorVariants.orange.impactLabel}
        >
          Helped streamline HR operations for 50+ small-to-medium businesses.
        </ExperienceImpact>
      </ExperienceEntry>
    ),
  },
  {
    title: (
      <span className={experienceColorVariants.pink.dateRange}>
        Oct 2018 — Jan 2019
      </span>
    ),
    markerBgClass: experienceColorVariants.pink.markerBg,
    markerBorderClass: experienceColorVariants.pink.markerBorder,
    content: (
      <ExperienceEntry
        title="React Native Developer — Freelance"
        subtitle="Contracted to develop an innovative blockchain-powered mobile application combining secure messaging with e-commerce capabilities."
      >
        <ExperienceHighlights
          title="Key Achievements & Responsibilities"
          accentClass={experienceColorVariants.pink.highlightBorder}
          items={[
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
          ]}
        />
        <ExperienceTagList
          label="TECHNOLOGIES & TOOLS"
          colorClass={experienceColorVariants.pink.tagClass}
          tags={[
            "React Native",
            "Expo",
            ".NET Core",
            "Blockchain",
            "RESTful APIs",
            "WebSocket",
          ]}
        />
        <ExperienceImpact
          background={experienceColorVariants.pink.impactBg}
          border={experienceColorVariants.pink.impactBorder}
          labelClass={experienceColorVariants.pink.impactLabel}
        >
          Delivered MVP within four months, helping the client secure seed
          funding.
        </ExperienceImpact>
      </ExperienceEntry>
    ),
  },
  {
    title: (
      <span className={experienceColorVariants.indigo.dateRange}>
        Jan 2018 — Sep 2018
      </span>
    ),
    markerBgClass: experienceColorVariants.indigo.markerBg,
    markerBorderClass: experienceColorVariants.indigo.markerBorder,
    content: (
      <ExperienceEntry
        title="Junior Frontend Developer — Pronet LLC"
        subtitle="Started professional journey building and maintaining an internal enterprise portal, gaining foundational experience in shipping production-ready features."
      >
        <ExperienceHighlights
          title="Key Achievements & Responsibilities"
          accentClass={experienceColorVariants.indigo.highlightBorder}
          items={[
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
          ]}
        />
        <ExperienceTagList
          label="TECHNOLOGIES & TOOLS"
          colorClass={experienceColorVariants.indigo.tagClass}
          tags={["JavaScript", "HTML5", "CSS3", "jQuery", "Git"]}
        />
        <ExperienceImpact
          background={experienceColorVariants.indigo.impactBg}
          border={experienceColorVariants.indigo.impactBorder}
          labelClass={experienceColorVariants.indigo.impactLabel}
        >
          Improved internal tool efficiency by 25% and built the foundation for
          a career in scalable frontend engineering.
        </ExperienceImpact>
      </ExperienceEntry>
    ),
  },
];
