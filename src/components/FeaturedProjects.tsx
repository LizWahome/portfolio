import Link from "next/link";
import { ArrowRight, Sparkle } from "lucide-react";
import { projects } from "@/data/projects";
import { StatusBadge } from "./StatusBadge";
import { Kpi } from "./Kpi";

export function FeaturedProjects() {
  const featured = projects.find((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-20">
      <h2 className="font-display text-3xl text-text">Featured projects</h2>
      <p className="mt-3 max-w-2xl text-text-secondary">
        Projects lead with the business question and what the data showed,
        and the tools come after.
      </p>

      <div className="mt-10 space-y-6">
        {featured && (
          <Link
            href={`/projects/${featured.slug}`}
            className="group grid gap-8 rounded-lg border-2 border-accent/50 bg-card p-8 transition-colors hover:border-accent md:grid-cols-[1.1fr_0.9fr] md:items-center"
          >
            <div>
              <div className="mb-4 flex items-center gap-1.5 text-xs font-mono text-accent">
                <Sparkle size={12} />
                Flagship project
              </div>

              <div className="flex items-start gap-3">
                <h3 className="font-display text-2xl leading-snug text-text sm:text-3xl">
                  {featured.title}
                </h3>
                <StatusBadge status={featured.status} />
              </div>

              <p className="mt-3 max-w-md text-base leading-relaxed text-text-secondary">
                {featured.businessQuestion}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {featured.tools.map((tool) => (
                  <span
                    key={tool}
                    className="rounded border border-border px-2 py-1 font-mono text-xs text-text-tertiary"
                  >
                    {tool}
                  </span>
                ))}
              </div>

              <span className="mt-6 inline-flex items-center gap-1.5 text-base font-medium text-accent">
                {featured.ctaLabel}
                <ArrowRight
                  size={16}
                  className="transition-transform group-hover:translate-x-0.5"
                />
              </span>
            </div>

            <div className="flex flex-col gap-6 border-t border-border pt-6 md:border-l md:border-t-0 md:pl-8 md:pt-0">
              {featured.kpis.map((kpi) => (
                <Kpi key={kpi.label} value={kpi.value} label={kpi.label} />
              ))}
            </div>
          </Link>
        )}

        <div className="grid gap-6 sm:grid-cols-2">
          {rest.map((project) => {
            const isLinkable = project.status !== "Upcoming";

            const cardBody = (
              <>
                <div className="flex items-start justify-between gap-3">
                  <h3 className="font-display text-xl leading-snug text-text">
                    {project.title}
                  </h3>
                  <StatusBadge status={project.status} />
                </div>

                <p className="mt-3 text-sm leading-relaxed text-text-secondary">
                  {project.businessQuestion}
                </p>

                {project.kpis.length > 0 && (
                  <div className="mt-5 flex flex-wrap gap-6">
                    {project.kpis.map((kpi) => (
                      <Kpi key={kpi.label} value={kpi.value} label={kpi.label} />
                    ))}
                  </div>
                )}

                <div className="mt-6 flex flex-wrap gap-2">
                  {project.tools.map((tool) => (
                    <span
                      key={tool}
                      className="rounded border border-border px-2 py-1 font-mono text-xs text-text-tertiary"
                    >
                      {tool}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex-1" />

                {isLinkable ? (
                  <span className="inline-flex items-center gap-1.5 text-sm text-accent">
                    {project.ctaLabel}
                    <ArrowRight
                      size={14}
                      className="transition-transform group-hover:translate-x-0.5"
                    />
                  </span>
                ) : (
                  <span className="text-sm text-text-tertiary">
                    {project.ctaLabel}
                  </span>
                )}
              </>
            );

            const cardClassName =
              "group flex flex-col rounded-lg border border-border bg-card p-6 transition-colors " +
              (isLinkable ? "hover:border-accent/60" : "");

            return isLinkable ? (
              <Link
                key={project.slug}
                href={`/projects/${project.slug}`}
                className={cardClassName}
              >
                {cardBody}
              </Link>
            ) : (
              <div key={project.slug} className={cardClassName}>
                {cardBody}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
