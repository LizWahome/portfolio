import { experience } from "@/data/experience";

export function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-4xl px-6 py-20">
      <h2 className="font-display text-3xl text-text">
        Professional experience
      </h2>

      <div className="mt-10 space-y-10">
        {experience.map((job) => (
          <div
            key={`${job.company}-${job.role}`}
            className="border-l-2 border-border pl-6"
          >
            <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
              <h3 className="text-lg text-text">
                {job.role}<span className="text-text-secondary">, {job.company}</span>
              </h3>
              {job.dates && (
                <span className="font-mono text-xs text-text-tertiary">
                  {job.dates}
                </span>
              )}
            </div>
            <ul className="mt-3 space-y-1.5">
              {job.points.map((point) => (
                <li
                  key={point}
                  className="text-sm leading-relaxed text-text-secondary"
                >
                  {point}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
