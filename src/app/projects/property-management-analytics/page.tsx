import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { GithubMark } from "@/components/BrandIcons";
import { StatusBadge } from "@/components/StatusBadge";
import { Kpi } from "@/components/Kpi";
import { ImageGallery } from "@/components/ImageGallery";
import { projects, propertyManagementCaseStudy } from "@/data/projects";
import { site } from "@/data/site";

const project = projects.find((p) => p.slug === "property-management-analytics")!;
const study = propertyManagementCaseStudy;

export const metadata: Metadata = {
  title: `Property Management Analytics, ${site.name}`,
  description: project.businessQuestion,
};

export default function PropertyManagementAnalyticsPage() {
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

        {/* Top-line KPIs */}
        <div className="mt-10 grid gap-8 border-y border-border py-8 sm:grid-cols-3">
          {project.kpis.map((kpi) => (
            <Kpi key={kpi.label} value={kpi.value} label={kpi.label} />
          ))}
        </div>

        {/* 1. Project Overview */}
        <section className="mt-16">
          <h2 className="font-display text-2xl text-text">
            Project overview
          </h2>
          <p className="mt-3 max-w-2xl leading-relaxed text-text-secondary">
            {study.overview}
          </p>
        </section>

        {/* 2. Business Problem */}
        <section className="mt-16">
          <h2 className="font-display text-2xl text-text">
            Business problem
          </h2>
          <p className="mt-3 max-w-2xl leading-relaxed text-text-secondary">
            {study.businessProblem}
          </p>
        </section>

        {/* 3. Objective */}
        <section className="mt-16">
          <h2 className="font-display text-2xl text-text">Objective</h2>
          <p className="mt-3 max-w-2xl leading-relaxed text-text-secondary">
            {study.objective}
          </p>
        </section>

        {/* 4. Dataset */}
        <section className="mt-16">
          <h2 className="font-display text-2xl text-text">Dataset</h2>
          <p className="mt-3 max-w-2xl text-text-secondary">
            A synthetic dataset representing a Kenyan residential property
            management scenario, spanning properties, units, tenants,
            invoices, payments, expenses and maintenance records.
          </p>
          <div className="mt-8 grid gap-x-8 gap-y-6 sm:grid-cols-3">
            {study.datasetCounts.map((d) => (
              <Kpi key={d.label} value={d.value} label={d.label} />
            ))}
          </div>
        </section>

        {/* 5. Data Cleaning & Quality Checks */}
        <section className="mt-16">
          <h2 className="font-display text-2xl text-text">
            Data cleaning &amp; quality checks
          </h2>
          <ol className="mt-5 space-y-2.5">
            {study.dataCleaningSteps.map((step, i) => (
              <li key={step} className="flex gap-3 text-sm text-text-secondary">
                <span className="font-mono text-text-tertiary">
                  {String(i + 1).padStart(2, "0")}
                </span>
                {step}
              </li>
            ))}
          </ol>
        </section>

        {/* 6. SQL Analysis */}
        <section className="mt-16">
          <h2 className="font-display text-2xl text-text">SQL analysis</h2>
          <p className="mt-3 max-w-2xl text-text-secondary">
            SQL analysis covered the following areas:
          </p>
          <ul className="mt-5 grid gap-x-8 gap-y-3 sm:grid-cols-2">
            {study.sqlAnalysisAreas.map((area) => (
              <li
                key={area}
                className="border-l-2 border-accent/40 pl-4 text-sm leading-relaxed text-text-secondary"
              >
                {area}
              </li>
            ))}
          </ul>
        </section>

        {/* 7. Power BI Dashboard */}
        <section className="mt-16">
          <h2 className="font-display text-2xl text-text">
            Power BI dashboard
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-text-secondary">
            Findings were brought together in an interactive four-page
            dashboard.
          </p>
          <ol className="mt-5 space-y-2.5">
            {study.dashboardPages.map((page, i) => (
              <li key={page} className="flex gap-3 text-sm text-text-secondary">
                <span className="font-mono text-text-tertiary">
                  {String(i + 1).padStart(2, "0")}
                </span>
                {page}
              </li>
            ))}
          </ol>

          <div className="mt-8">
            <ImageGallery images={study.dashboardScreenshots} />
          </div>
        </section>

        {/* 8. Key Findings */}
        <section className="mt-16">
          <h2 className="font-display text-2xl text-text">Key findings</h2>
          <div className="mt-8 grid gap-x-8 gap-y-6 sm:grid-cols-3">
            {study.keyMetrics.map((m) => (
              <Kpi key={m.label} value={m.value} label={m.label} />
            ))}
          </div>
        </section>

        {/* Limitations */}
        <section className="mt-16 rounded-lg border border-highlight/30 bg-highlight/5 p-6">
          <h2 className="text-sm font-medium text-highlight">Limitations</h2>
          <ul className="mt-3 space-y-2">
            {study.limitations.map((point) => (
              <li
                key={point}
                className="text-sm leading-relaxed text-text-secondary"
              >
                {point}
              </li>
            ))}
          </ul>
        </section>

        {/* 9. Business Recommendations */}
        <section className="mt-16">
          <h2 className="font-display text-2xl text-text">
            Business recommendations
          </h2>
          <ul className="mt-5 space-y-3">
            {study.recommendations.map((rec) => (
              <li
                key={rec}
                className="border-l-2 border-accent/40 pl-4 text-sm leading-relaxed text-text-secondary"
              >
                {rec}
              </li>
            ))}
          </ul>
        </section>

        {/* 10. Tools & Technologies */}
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

        {/* 11. Project Links */}
        <section className="mt-16">
          <h2 className="font-display text-2xl text-text">Project links</h2>
          <div className="mt-4">
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
        </section>
      </main>
      <Footer />
    </>
  );
}
