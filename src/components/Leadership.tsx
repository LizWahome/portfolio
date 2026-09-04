import { leadership } from "@/data/leadership";

export function Leadership() {
  return (
    <section className="mx-auto max-w-4xl px-6 py-20">
      <h2 className="font-display text-3xl text-text">Leadership</h2>

      <div className="mt-10 grid gap-6 sm:grid-cols-2">
        {leadership.map((item) => (
          <div
            key={item.org}
            className="rounded-lg border border-border bg-card p-6"
          >
            <p className="text-sm text-text-secondary">{item.role}</p>
            <h3 className="mt-1 text-lg text-text">{item.org}</h3>
            <p className="mt-2 font-mono text-sm text-accent">
              {item.metric}
            </p>
            <p className="mt-3 text-sm leading-relaxed text-text-secondary">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
