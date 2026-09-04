import { Mail, MapPin } from "lucide-react";
import { site } from "@/data/site";
import { GithubMark, LinkedinMark } from "./BrandIcons";

export function Contact() {
  return (
    <section id="contact" className="border-t border-border bg-surface">
      <div className="mx-auto max-w-3xl px-6 py-24 text-center">
        <h2 className="font-display text-3xl text-text sm:text-4xl">
          Open to Data Analyst, BI and Product Analytics opportunities.
        </h2>

        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center sm:gap-8">
          <a
            href={site.emailHref}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 px-2 py-2 text-text-secondary transition-colors hover:text-accent"
          >
            <Mail size={16} />
            {site.email}
          </a>
          <a
            href={site.linkedin}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 px-2 py-2 text-text-secondary transition-colors hover:text-accent"
          >
            <LinkedinMark size={16} />
            LinkedIn
          </a>
          <a
            href={site.github}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 px-2 py-2 text-text-secondary transition-colors hover:text-accent"
          >
            <GithubMark size={16} />
            GitHub
          </a>
        </div>

        <p className="mt-8 flex items-center justify-center gap-2 text-sm text-text-tertiary">
          <MapPin size={14} />
          {site.location}
        </p>
      </div>
    </section>
  );
}
