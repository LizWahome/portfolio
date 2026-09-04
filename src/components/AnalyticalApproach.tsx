import { pipeline } from "@/data/capabilities";

export function AnalyticalApproach() {
  return (
    <section className="border-y border-border bg-surface">
      <div className="mx-auto max-w-3xl px-6 py-20">
        <h2 className="font-display text-3xl text-text">
          How I approach a problem
        </h2>
        <p className="mt-3 text-text-secondary">
          I don&apos;t start with a dashboard. I start with a question.
        </p>

        <ol className="mt-10 space-y-0">
          {pipeline.map((step, i) => (
            <li key={step.label} className="relative flex gap-5 pb-8 last:pb-0">
              <div className="flex flex-col items-center">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-accent/40 font-mono text-xs text-accent">
                  {i + 1}
                </span>
                {i < pipeline.length - 1 && (
                  <span className="mt-1 w-px flex-1 bg-border" />
                )}
              </div>
              <div className="pt-1">
                <h3 className="text-text">{step.label}</h3>
                <p className="mt-1 text-sm text-text-secondary">
                  {step.question}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
