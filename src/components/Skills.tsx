import { skillGroups } from "@/data/skills";

export function Skills() {
  return (
    <section id="skills" className="border-y border-border bg-surface">
      <div className="mx-auto max-w-5xl px-6 py-20">
        <h2 className="font-display text-3xl text-text">Skills</h2>

        <div className="mt-10 grid gap-10 sm:grid-cols-3">
          {skillGroups.map((group) => (
            <div key={group.title}>
              <h3 className="font-mono text-sm text-accent-2">
                {group.title}
              </h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <li
                    key={skill}
                    className="rounded border border-border bg-card px-2.5 py-1 text-sm text-text-secondary"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
