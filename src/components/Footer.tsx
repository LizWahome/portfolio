import { site } from "@/data/site";

export function Footer() {
  return (
    <footer className="bg-bg">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-3 px-6 py-10 text-sm text-text-tertiary sm:flex-row sm:justify-between">
        <div>
          <span className="text-text-secondary">{site.name}</span>
          <span className="mx-2">/</span>
          {site.role}
        </div>
        <div className="flex items-center gap-3">
          <a href={site.github} target="_blank" rel="noreferrer" className="px-2 py-3 hover:text-text-secondary">
            GitHub
          </a>
          <a href={site.linkedin} target="_blank" rel="noreferrer" className="px-2 py-3 hover:text-text-secondary">
            LinkedIn
          </a>
          <a href={site.emailHref} target="_blank" rel="noreferrer" className="px-2 py-3 hover:text-text-secondary">
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
