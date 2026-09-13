import { ArrowRight, MapPin } from "lucide-react";
import { site } from "@/data/site";
import { GithubMark, LinkedinMark } from "./BrandIcons";

const sqlLines = [
  "-- Illustrative snippet only.",
  "-- Replace with the actual query from your project.",
  "WITH ranked AS (",
  "  SELECT *,",
  "    ROW_NUMBER() OVER (",
  "      PARTITION BY company, location,",
  "        industry, total_laid_off, date",
  "      ORDER BY company",
  "    ) AS row_num",
  "  FROM layoffs_staging",
  ")",
  "SELECT * FROM ranked WHERE row_num = 1;",
];

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28">
      <div className="data-grid-bg pointer-events-none absolute inset-0" />
      <div className="relative mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div>
          <p className="font-mono text-sm text-accent">{site.name}</p>

          <p className="mt-2 flex items-center gap-2 text-sm text-text-secondary">
            <MapPin size={14} className="text-accent" />
            {site.location}
          </p>

          <h1 className="font-display mt-5 text-4xl leading-[1.1] text-text sm:text-5xl lg:text-6xl">
            {site.headline}
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-text-secondary">
            {site.subheadline}
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-md bg-accent px-5 py-3 text-sm font-medium text-bg transition-opacity hover:opacity-90"
            >
              View my work
              <ArrowRight size={16} />
            </a>
            <a
              href={site.cvPath}
              download
              className="inline-flex items-center gap-2 rounded-md border border-border px-5 py-3 text-sm text-text transition-colors hover:border-accent hover:text-accent"
            >
              Download CV
            </a>
          </div>

          <div className="mt-8 flex items-center gap-5">
            <a
              href={site.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="text-text-secondary transition-colors hover:text-text"
            >
              <GithubMark size={20} />
            </a>
            <a
              href={site.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="text-text-secondary transition-colors hover:text-text"
            >
              <LinkedinMark size={20} />
            </a>
          </div>
        </div>

        <div className="rounded-lg border border-border bg-surface shadow-2xl shadow-black/40">
          <div className="flex items-center gap-2 border-b border-border px-4 py-3">
            <span className="h-2.5 w-2.5 rounded-full bg-[#F87171]" />
            <span className="h-2.5 w-2.5 rounded-full bg-highlight" />
            <span className="h-2.5 w-2.5 rounded-full bg-accent" />
            <span className="ml-2 font-mono text-xs text-text-tertiary">
              global_layoffs_cleaning.sql
            </span>
          </div>
          <pre className="overflow-x-auto p-5 font-mono text-[13px] leading-relaxed text-text-secondary">
            {sqlLines.map((line, i) => (
              <div key={i} className="flex gap-4">
                <span
                  aria-hidden="true"
                  className="select-none text-text-tertiary"
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span
                  className={
                    line.startsWith("--")
                      ? "text-text-tertiary italic"
                      : line.trim().startsWith("SELECT") ||
                          line.trim().startsWith("FROM") ||
                          line.trim().startsWith("WITH") ||
                          line.trim().startsWith("PARTITION") ||
                          line.trim().startsWith("ORDER") ||
                          line.trim().startsWith("WHERE")
                        ? "text-accent-2"
                        : "text-text-secondary"
                  }
                >
                  {line}
                </span>
              </div>
            ))}
          </pre>
        </div>
      </div>
    </section>
  );
}
