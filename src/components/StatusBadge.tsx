import type { ProjectStatus } from "@/data/projects";

const styles: Record<ProjectStatus, string> = {
  Completed: "text-accent border-accent/40 bg-accent/10",
  "In Development": "text-highlight border-highlight/40 bg-highlight/10",
  Upcoming: "text-text-secondary border-border bg-white/5",
};

export function StatusBadge({ status }: { status: ProjectStatus }) {
  return (
    <span
      className={`inline-flex items-center rounded-full border px-2.5 py-1 text-xs font-mono ${styles[status]}`}
    >
      {status}
    </span>
  );
}
