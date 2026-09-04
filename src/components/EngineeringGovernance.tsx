"use client";

import {
  ArrowRight,
  CheckCircle2,
  Cloud,
  Database,
  Kanban,
  Layout,
  Palette,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react";
import { useInquiryButton } from "@/hooks/useInquiryButton";

interface Discipline {
  id: string;
  category: string;
  role: string;
  headCount: string;
  teamSize: string;
  icon: LucideIcon;
  responsibilities: string;
  techStack: string[];
  commitment: string;
}

const disciplines: Discipline[] = [
  {
    id: "01",
    category: "Design system & UX",
    role: "Head of Design / Lead UI/UX Designer",
    headCount: "1 Lead",
    teamSize: "2–4 Designers",
    icon: Palette,
    responsibilities:
      "Directs end-to-end design systems, user behavior research, accessibility compliance (WCAG 2.1 AA), and interactive micro-animations.",
    techStack: [
      "Figma Enterprise",
      "Design Tokens",
      "Tailwind CSS",
      "Framer Motion",
      "Storybook",
    ],
    commitment:
      "Zero visual ambiguity — every screen is validated with usability data and design consistency.",
  },
  {
    id: "02",
    category: "Client architecture",
    role: "Lead Frontend Architect / Frontend Lead",
    headCount: "1 Lead",
    teamSize: "3–6 Engineers",
    icon: Layout,
    responsibilities:
      "Architects ultra low-latency web interfaces, server-side rendering (SSR), core web vitals optimization, and state workflows.",
    techStack: [
      "Next.js (App Router)",
      "TypeScript",
      "React Server Components",
      "Tailwind CSS",
      "Zustand",
    ],
    commitment:
      "Sub-second initial load times, component modularity, and pixel-perfect responsiveness across all viewports.",
  },
  {
    id: "03",
    category: "Enterprise backend",
    role: "Lead Backend Engineer / System Architect",
    headCount: "1 Lead",
    teamSize: "3–6 Engineers",
    icon: Database,
    responsibilities:
      "Builds robust microservices, optimizes relational database schemas, implements high-throughput distributed caching, and secures APIs.",
    techStack: [
      "Node.js",
      "Go",
      "PostgreSQL",
      "Redis",
      "GraphQL",
      "Prisma / Drizzle ORM",
    ],
    commitment:
      "High-concurrency data pipelines and fault-tolerant architectures engineered to handle millions of queries smoothly.",
  },
  {
    id: "04",
    category: "Cloud infrastructure & SRE",
    role: "DevOps Lead / Cloud Solutions Architect",
    headCount: "1 Lead",
    teamSize: "1–3 Engineers",
    icon: Cloud,
    responsibilities:
      "Automates zero-downtime CI/CD delivery pipelines, manages edge infrastructure, cloud cost containment, and real-time observability.",
    techStack: [
      "AWS",
      "Google Cloud",
      "Docker",
      "Kubernetes",
      "Vercel",
      "Terraform",
      "GitHub Actions",
    ],
    commitment:
      "99.99% system availability with automated rollbacks and isolated, secure production environments.",
  },
  {
    id: "05",
    category: "Quality & compliance",
    role: "QA Lead / Test Automation Manager",
    headCount: "1 Lead",
    teamSize: "2–4 Specialists",
    icon: ShieldCheck,
    responsibilities:
      "Maintains automated end-to-end regression suites, load testing thresholds, API contract validation, and vulnerability sweeps.",
    techStack: [
      "Playwright",
      "Cypress",
      "Jest",
      "Postman Newman",
      "K6 Load Testing",
    ],
    commitment:
      "Automated regression tests run on every pull request before any code reaches production.",
  },
  {
    id: "06",
    category: "Agile delivery",
    role: "Principal Product Manager / Agile Coach",
    headCount: "1 Lead",
    teamSize: "1–2 Coordinators",
    icon: Kanban,
    responsibilities:
      "Translates enterprise business goals into structured sprints, manages sprint velocity, transparent stakeholder reporting, and scope clarity.",
    techStack: [
      "Jira Enterprise",
      "Linear",
      "Confluence",
      "Miro",
      "SOC 2 Governance",
    ],
    commitment:
      "Transparent bi-weekly sprint deliverables, guaranteed release timelines, and zero scope drift.",
  },
];

export function EngineeringGovernance() {
  const openInquiry = useInquiryButton({
    id: "cortex-softsolutions",
    name: "Cortex SoftSolutions",
  });

  return (
    <section
      aria-labelledby="engineering-governance-heading"
      className="border-t border-slate-700 bg-slate-900 py-20 sm:py-24"
    >
      <div className="container-corporate">
        <div className="max-w-3xl">
          <p className="font-sans text-[11px] font-semibold uppercase tracking-[0.2em] text-indigo-400 sm:text-xs">
            Organizational architecture &amp; governance
          </p>
          <h2
            id="engineering-governance-heading"
            className="mt-4 font-serif text-3xl font-bold uppercase tracking-[0.12em] text-white sm:text-4xl lg:text-5xl"
          >
            Engineering disciplines &amp; leadership
          </h2>
          <div className="my-5 h-0.5 w-16 bg-indigo-400/70" />
          <p className="font-sans text-sm leading-relaxed text-slate-400 md:text-[15px]">
            Cortex SoftSolutions pairs dedicated technical domain heads with
            focused engineering squads. Every deployment follows strict
            code-quality governance, enterprise security standards, and
            resilient cloud architecture.
          </p>
        </div>

        <ul
          role="list"
          className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8"
        >
          {disciplines.map((discipline) => {
            const Icon = discipline.icon;

            return (
              <li
                key={discipline.id}
                className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-700 bg-slate-800 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-indigo-400/50 hover:shadow-xl hover:shadow-indigo-950/30"
              >
                <div className="flex flex-1 flex-col p-6 sm:p-7">
                  <div className="flex items-center justify-between gap-3 border-b border-slate-700 pb-4">
                    <span className="font-mono text-[10px] font-semibold tracking-[0.2em] text-slate-500">
                      {discipline.id} / SECTOR
                    </span>
                    <span className="rounded-full border border-indigo-400/25 bg-indigo-500/10 px-2.5 py-1 text-right font-sans text-[9px] font-semibold uppercase tracking-[0.12em] text-indigo-300">
                      {discipline.category}
                    </span>
                  </div>

                  <div className="mt-5 flex items-start gap-4">
                    <span className="flex h-11 w-11 flex-none items-center justify-center rounded-xl bg-indigo-500/15 text-indigo-300 transition group-hover:bg-indigo-500 group-hover:text-white">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <div>
                      <h3 className="font-serif text-lg font-bold leading-snug tracking-wide text-white">
                        {discipline.role}
                      </h3>
                      <p className="mt-1 font-sans text-xs font-medium text-slate-400">
                        {discipline.headCount}
                        <span className="mx-2 text-slate-600">|</span>
                        Squad: {discipline.teamSize}
                      </p>
                    </div>
                  </div>

                  <p className="mt-5 font-sans text-sm leading-relaxed text-slate-400">
                    {discipline.responsibilities}
                  </p>

                  <div className="mt-6">
                    <p className="mb-2 font-sans text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-500">
                      Core stack &amp; infrastructure
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {discipline.techStack.map((technology) => (
                        <span
                          key={technology}
                          className="rounded-md border border-slate-700 bg-slate-900 px-2.5 py-1 font-sans text-[10px] font-medium text-slate-300"
                        >
                          {technology}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="border-t border-slate-700 bg-slate-900/70 p-5 sm:p-6">
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2
                      className="mt-0.5 h-4 w-4 flex-none text-emerald-400"
                      aria-hidden="true"
                    />
                    <p className="font-sans text-[11px] italic leading-relaxed text-slate-400">
                      &ldquo;{discipline.commitment}&rdquo;
                    </p>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>

        <div className="mt-12 flex flex-col items-center justify-between gap-6 rounded-2xl border border-indigo-400/20 bg-indigo-500/10 p-6 shadow-xl shadow-indigo-950/20 md:flex-row md:p-8">
          <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 font-sans text-xs font-medium text-slate-300 md:justify-start md:text-sm">
            <li className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-emerald-400" aria-hidden="true" />
              ISO-aligned code hygiene
            </li>
            <li className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-sky-400" aria-hidden="true" />
              Dedicated 1-on-1 lead governance
            </li>
            <li className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-amber-400" aria-hidden="true" />
              SOC 2-ready security practices
            </li>
          </ul>

          <button
            type="button"
            onClick={openInquiry}
            className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-6 py-3 font-sans text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-900 shadow-sm transition hover:bg-indigo-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-offset-slate-900 focus-visible:outline-indigo-300 md:w-auto"
          >
            Engage our tech leads
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </button>
        </div>
      </div>
    </section>
  );
}
