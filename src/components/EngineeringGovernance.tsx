"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { useInquiryButton } from "@/hooks/useInquiryButton";

interface Discipline {
  id: string;
  category: string;
  role: string;
  headCount: string;
  teamSize: string;
  image: string;
  responsibilities: string;
  techStack: string[];
  commitment: string;
}

const disciplines: Discipline[] = [
  {
    id: "01",
    category: "Design system & UX",
    role: "Lead UI/UX Designer",
    headCount: "1 Lead",
    teamSize: "2–4 Designers",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1200&q=80",
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
    role: "Lead Frontend Architect",
    headCount: "1 Lead",
    teamSize: "3–6 Engineers",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=1200&q=80",
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
    role: "Lead Systems Architect",
    headCount: "1 Lead",
    teamSize: "3–6 Engineers",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=1200&q=80",
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
    role: "DevOps Lead",
    headCount: "1 Lead",
    teamSize: "1–3 Engineers",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1200&q=80",
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
    role: "QA Automation Lead",
    headCount: "1 Lead",
    teamSize: "2–4 Specialists",
    image:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=1200&q=80",
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
    role: "Principal Product Manager",
    headCount: "1 Lead",
    teamSize: "1–2 Coordinators",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=1200&q=80",
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

const categoryShortLabel = (category: string) => {
  const map: Record<string, string> = {
    "Design system & UX": "UX",
    "Client architecture": "FE",
    "Enterprise backend": "BE",
    "Cloud infrastructure & SRE": "SRE",
    "Quality & compliance": "QA",
    "Agile delivery": "PM",
  };
  return map[category] || category.split(" ")[0];
};

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
            className="mt-4 font-display text-3xl font-bold uppercase tracking-[0.12em] text-white sm:text-4xl lg:text-5xl"
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
          className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4"
        >
          {disciplines.map((discipline, index) => {
            const isIvory = index % 2 === 0;
            const isOptionA = index % 2 === 0;

            const shortLabel = categoryShortLabel(discipline.category);
            const categoryLabel = discipline.category.toUpperCase();

            return (
              <li
                key={discipline.id}
                className={`
                  group min-h-[620px] rounded-none md:rounded-sm overflow-hidden flex flex-col justify-between
                  border transition duration-500 hover:-translate-y-1
                  ${isIvory
                    ? "bg-[#F7F5F0] text-neutral-900 border-neutral-200"
                    : "bg-[#121417] text-neutral-100 border-neutral-800"
                  }
                `}
              >
                {isOptionA ? (
                  <>
                    <div className="flex h-full flex-col justify-center p-6 sm:p-7 text-center">
                      <p className="text-[10px] tracking-[0.28em] uppercase text-neutral-400 font-mono">
                        {discipline.id} / {categoryLabel}
                      </p>
                      <h3 className="font-display text-xl tracking-[0.08em] uppercase font-bold text-center mt-2 mb-6">
                        {discipline.role}
                      </h3>
                      <p className="font-sans text-xs leading-relaxed text-neutral-600 max-w-xs mx-auto">
                        {discipline.responsibilities}
                      </p>
                    </div>

                    <div className="flex-1 relative w-full overflow-hidden">
                      <Image
                        alt={discipline.role}
                        className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                        src={discipline.image}
                      />
                    </div>
                  </>
                ) : (
                  <>
                    <div className="flex-1 relative w-full overflow-hidden">
                      <Image
                        alt={discipline.role}
                        className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                        src={discipline.image}
                      />
                    </div>

                    <div className="flex h-full flex-col justify-center p-6 sm:p-7 text-center">
                      <p className="text-[10px] tracking-[0.28em] uppercase text-neutral-400 font-mono">
                        {discipline.id} / {categoryLabel}
                      </p>
                      <h3 className="font-display text-xl tracking-[0.08em] uppercase font-bold text-center mt-2 mb-6">
                        {discipline.role}
                      </h3>
                      <div className="font-sans text-xs leading-relaxed text-neutral-400 max-w-xs mx-auto space-y-2">
                        <p>
                          <span className="font-semibold text-neutral-300">
                            Squad:
                          </span>{" "}
                          {discipline.headCount} · {discipline.teamSize}
                        </p>
                        <p>
                          <span className="font-semibold text-neutral-300">
                            Stack:
                          </span>{" "}
                          {discipline.techStack.slice(0, 3).join(", ")}
                        </p>
                        <p className="italic">{discipline.commitment}</p>
                      </div>
                    </div>
                  </>
                )}

                <div
                  className={`
                    border-t p-4 sm:p-5
                    ${isIvory ? "border-neutral-200" : "border-neutral-800"}
                  `}
                >
                  <div className="flex items-center justify-between">
                    <span
                      className={`
                        text-[11px] font-bold tracking-[0.25em] uppercase font-display
                        ${isIvory ? "text-neutral-900" : "text-neutral-100"}
                      `}
                    >
                      CORTEX
                    </span>
                    <span className="text-[10px] tracking-[0.2em] uppercase text-neutral-400 font-mono">
                      {discipline.id} / {shortLabel}
                    </span>
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
