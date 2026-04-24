import { useState } from "react";

type Category = "Operations" | "Analytics" | "Bridge" | "Systems";
type Status = "Public" | "Private" | "Alpha" | "Planned";

export interface Project {
  title: string;
  description: string;
  result: string;
  category: Category;
  status: Status;
  stack: string[];
  href?: string;
}

interface Props {
  filters: string[];
  projects: Project[];
}

const categoryVars: Record<Category, { bg: string; text: string; border: string }> = {
  Operations: {
    bg: "var(--color-operations-bg)",
    text: "var(--color-operations-text)",
    border: "var(--color-operations-text)",
  },
  Analytics: {
    bg: "var(--color-analytics-bg)",
    text: "var(--color-analytics-text)",
    border: "var(--color-analytics-text)",
  },
  Bridge: {
    bg: "var(--color-bridge-bg)",
    text: "var(--color-bridge-text)",
    border: "var(--color-bridge-text)",
  },
  Systems: {
    bg: "var(--color-systems-bg)",
    text: "var(--color-systems-text)",
    border: "var(--color-systems-text)",
  },
};

function ProjectCard({ project }: { project: Project }) {
  const colors = categoryVars[project.category];
  return (
    <a
      href={project.href ?? "#"}
      onClick={project.href ? undefined : (e) => e.preventDefault()}
      className="group flex flex-col border border-[var(--color-border-tertiary)] rounded-lg bg-[var(--color-bg-primary)] hover:-translate-y-0.5 hover:border-[var(--color-border-secondary)] transition-all duration-150 overflow-hidden"
      style={{ cursor: project.href ? "pointer" : "default" }}
    >
      {/* Thumbnail */}
      <div
        className="h-[72px] w-full flex items-center justify-center"
        style={{ backgroundColor: colors.bg }}
      >
        <span className="font-mono text-[10px] uppercase tracking-[0.06em]" style={{ color: colors.text }}>
          {project.category}
        </span>
      </div>

      <div className="p-4 flex flex-col gap-2 flex-1">
        {/* Tags */}
        <div className="flex flex-wrap gap-1.5">
          <span
            className="rounded-full px-2 py-0.5 text-[10px] font-mono"
            style={{ backgroundColor: colors.bg, color: colors.text }}
          >
            {project.category}
          </span>
          <span className="rounded-full px-2 py-0.5 text-[10px] font-mono bg-[var(--color-bg-tertiary)] text-[var(--color-text-tertiary)]">
            {project.status}
          </span>
        </div>

        {/* Title */}
        <h3 className="font-serif text-[14px] font-[500] text-[var(--color-text-primary)] leading-snug">
          {project.title}
        </h3>

        {/* Result */}
        <p
          className="text-[12px] text-[var(--color-text-secondary)] leading-relaxed pl-3 flex-1"
          style={{ borderLeft: `2px solid ${colors.border}` }}
        >
          {project.result}
        </p>

        {/* Stack chips */}
        <div className="flex flex-wrap gap-1 pt-1">
          {project.stack.map((s) => (
            <span
              key={s}
              className="font-mono text-[10px] uppercase tracking-[0.04em] text-[var(--color-text-tertiary)] bg-[var(--color-bg-tertiary)] rounded px-1.5 py-0.5"
            >
              {s}
            </span>
          ))}
        </div>
      </div>
    </a>
  );
}

export default function FilteredGrid({ filters, projects }: Props) {
  const [active, setActive] = useState("All");

  const visible =
    active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <div>
      {/* Filter tabs */}
      <div className="flex gap-6 mb-6">
        {["All", ...filters].map((f) => (
          <button
            key={f}
            onClick={() => setActive(f)}
            className="text-[13px] pb-0.5 transition-colors"
            style={{
              color:
                active === f
                  ? "var(--color-text-primary)"
                  : "var(--color-text-secondary)",
              borderBottom:
                active === f ? "2px solid var(--color-sage)" : "2px solid transparent",
            }}
          >
            {f}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {visible.map((p) => (
          <ProjectCard key={p.title} project={p} />
        ))}
      </div>
    </div>
  );
}
