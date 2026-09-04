import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { StatusBadge } from "@/components/StatusBadge";
import { Kpi } from "@/components/Kpi";
import { projects } from "@/data/projects";
import { site } from "@/data/site";

const project = projects.find((p) => p.slug === "kenya-property-analytics")!;

export const metadata: Metadata = {
  title: `Kenya Property & Rental Analytics, ${site.name}`,
  description: project.businessQuestion,
};

const locations = [
  "Nairobi",
  "Mombasa",
  "Kisumu",
  "Nakuru",
  "Eldoret",
  "Machakos",
  "Meru",
  "Nyeri",
  "Thika",
];

export default function KenyaPropertyAnalyticsPage() {
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
            Synthetic dataset
          </span>
        </div>

        <h1 className="font-display mt-4 text-3xl text-text sm:text-4xl">
          {project.title}
        </h1>

        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-text-secondary">
          {project.businessQuestion}
        </p>

        <div className="mt-10 grid gap-8 border-y border-border py-8 sm:grid-cols-3">
          {project.kpis.map((kpi) => (
            <Kpi key={kpi.label} value={kpi.value} label={kpi.label} />
          ))}
        </div>

        <p className="mt-6 rounded-md border border-highlight/30 bg-highlight/5 p-4 text-sm text-text-secondary">
          {project.dataNote}
        </p>

        <section className="mt-16">
          <h2 className="font-display text-2xl text-text">The dataset</h2>
          <p className="mt-3 max-w-2xl text-text-secondary">
            A synthetic property management dataset built to be relevant to
            the Kenyan market, covering apartment properties of 60 to 150
            units
            each across:
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            {locations.map((loc) => (
              <span
                key={loc}
                className="rounded border border-border bg-card px-3 py-1.5 text-sm text-text-secondary"
              >
                {loc}
              </span>
            ))}
          </div>
          <p className="mt-5 max-w-2xl text-sm leading-relaxed text-text-secondary">
            Units range from one to four bedrooms, with monthly rent varying
            by bedroom count. Tenant records include occupation type
            (Business Owner, Employed, Self Employed, Other), and payment
            records capture rent payment behaviour over time.
          </p>
        </section>

        <section className="mt-16">
          <h2 className="font-display text-2xl text-text">What&apos;s next</h2>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-text-secondary">
            This project will demonstrate SQL-based data modelling,
            Excel/Power BI dashboards, KPI analysis, property revenue
            analysis and payment-behaviour insights. Findings will be added
            here once the analysis is complete. Nothing below is
            speculative or placeholder data.
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
}
