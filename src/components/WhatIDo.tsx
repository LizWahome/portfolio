import { capabilities } from "@/data/capabilities";

export function WhatIDo() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <h2 className="font-display text-3xl text-text">What I do</h2>
      <div className="mt-10 grid gap-6 sm:grid-cols-3">
        {capabilities.map((cap) => (
          <div
            key={cap.title}
            className="rounded-lg border border-border bg-card p-6"
          >
            <h3 className="text-lg text-text">{cap.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-text-secondary">
              {cap.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
