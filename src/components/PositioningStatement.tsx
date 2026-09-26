import { site } from "@/data/site";

export function PositioningStatement() {
  return (
    <section id="about" className="border-y border-border bg-surface">
      <div className="mx-auto max-w-3xl px-6 py-20 text-center">
        <p className="font-display text-2xl leading-snug text-text sm:text-3xl">
          {site.positioningStatement}
        </p>
      </div>
    </section>
  );
}
