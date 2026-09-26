import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { GithubMark } from "@/components/BrandIcons";
import { StatusBadge } from "@/components/StatusBadge";
import { Kpi } from "@/components/Kpi";
import { YearBars } from "@/components/YearBars";
import { ImageGallery } from "@/components/ImageGallery";
import { projects, globalLayoffsCaseStudy } from "@/data/projects";
import { site } from "@/data/site";

const project = projects.find((p) => p.slug === "global-layoffs")!;
const study = globalLayoffsCaseStudy;

export const metadata: Metadata = {
  title: `Global Layoffs SQL Analysis, ${site.name}`,
  description: project.businessQuestion,
};

export default function GlobalLayoffsPage() {
  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-4xl px-6 pt-32 pb-24">
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 text-sm text-text-secondary hover:text-text"
        >
          <ArrowLeft size={14} />
          Back to projects
        </Link>

        <div className="mt-6 flex flex-wrap items-center gap-3">
          <StatusBadge status={project.status} />
          <span className="font-mono text-xs text-text-tertiary">
            {project.datasetSummary}
          </span>
        </div>

        <h1 className="font-display mt-4 text-3xl text-text sm:text-4xl">
          {project.title}
        </h1>

        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-text-secondary">
          {project.businessQuestion}
        </p>

        {/* KPIs */}
        <div className="mt-10 grid gap-8 border-y border-border py-8 sm:grid-cols-3">
          {project.kpis.map((kpi) => (
            <Kpi key={kpi.label} value={kpi.value} label={kpi.label} />
          ))}
        </div>

        {project.dataNote && (
          <p className="mt-6 rounded-md border border-highlight/30 bg-highlight/5 p-4 text-sm text-text-secondary">
            {project.dataNote}
          </p>
        )}

        {/* Data & cleaning */}
        <section className="mt-16">
          <h2 className="font-display text-2xl text-text">
            Data cleaning &amp; quality checks
          </h2>
          <p className="mt-3 text-text-secondary">
            Before analysis, the raw dataset was copied into a staging table
            in MySQL and cleaned:
          </p>
          <ol className="mt-5 space-y-2.5">
            {study.cleaningSteps.map((step, i) => (
              <li key={step} className="flex gap-3 text-sm text-text-secondary">
                <span className="font-mono text-text-tertiary">
                  {String(i + 1).padStart(2, "0")}
                </span>
                {step}
              </li>
            ))}
          </ol>
        </section>

        {/* Analytical approach */}
        <section className="mt-16">
          <h2 className="font-display text-2xl text-text">
            Analytical approach
          </h2>
          <p className="mt-3 max-w-2xl text-text-secondary">
            Exploratory analysis covered total and percentage layoffs,
            layoffs by company, industry and country, layoffs over time,
            rolling monthly totals, and a ranking of companies by layoffs
            within each year.
          </p>
        </section>

        {/* Layoffs by year */}
        <section className="mt-16">
          <h2 className="font-display text-2xl text-text">Layoffs by year</h2>
          <div className="mt-8 rounded-lg border border-border bg-card p-6 sm:p-8">
            <YearBars data={study.yearTotals} />
            <p className="mt-6 text-xs text-text-tertiary">
              * 2023 reflects January to March only, not a full year.
            </p>
          </div>
        </section>

        {/* Dashboard */}
        <section className="mt-16">
          <h2 className="font-display text-2xl text-text">Dashboard</h2>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-text-secondary">
            Findings were also brought together in an interactive Excel
            dashboard with slicers for location, funding stage and date.
          </p>
          <div className="mt-8">
            <ImageGallery images={study.dashboardScreenshots} />
          </div>
        </section>

        {/* Key findings */}
        <section className="mt-16">
          <h2 className="font-display text-2xl text-text">Key findings</h2>
          <div className="mt-8 grid gap-x-8 gap-y-6 sm:grid-cols-3">
            {study.findings.map((f) => (
              <Kpi key={f.label} value={f.value} label={f.label} />
            ))}
          </div>
        </section>

        {/* Insights */}
        <section className="mt-16">
          <h2 className="font-display text-2xl text-text">Insights</h2>
          <ul className="mt-5 space-y-3">
            {study.insights.map((insight) => (
              <li
                key={insight}
                className="border-l-2 border-accent/40 pl-4 text-sm leading-relaxed text-text-secondary"
              >
                {insight}
              </li>
            ))}
          </ul>
        </section>

        {/* Data integrity note */}
        <section className="mt-16 rounded-lg border border-highlight/30 bg-highlight/5 p-6">
          <h2 className="text-sm font-medium text-highlight">
            Data integrity note
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-text-secondary">
            {study.dataIntegrityNote}
          </p>
        </section>

        {/* Tools */}
        <section className="mt-16">
          <h2 className="font-display text-2xl text-text">
            Tools &amp; technologies
          </h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {project.tools.map((tool) => (
              <span
                key={tool}
                className="rounded border border-border bg-card px-3 py-1.5 font-mono text-sm text-text-secondary"
              >
                {tool}
              </span>
            ))}
          </div>
        </section>

        <div className="mt-16">
          <a
            href={project.githubUrl ?? site.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-md border border-border px-5 py-3 text-sm text-text transition-colors hover:border-accent hover:text-accent"
          >
            <GithubMark size={16} />
            View on GitHub
          </a>
        </div>
      </main>
      <Footer />
    </>
  );
}
