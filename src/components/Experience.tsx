import { experience } from "@/data/experience";

export function Experience() {
  return (
    <section id="experience" className="py-16">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <h2 className="text-2xl font-semibold">Experience</h2>
        <a
          href="/resume.pdf"
          download
          className="inline-flex min-h-11 items-center rounded-md bg-accent px-5 text-sm font-medium text-on-accent hover:opacity-90"
        >
          Download resume
        </a>
      </div>
      <ol className="mt-8 space-y-8 border-l border-line pl-6">
        {experience.map(({ role, org, start, end, points }) => (
          <li key={`${org}-${start}`} className="relative">
            <span
              aria-hidden="true"
              className="absolute -left-[1.9rem] top-2 h-2.5 w-2.5 rounded-full bg-accent"
            />
            <h3 className="font-semibold">
              {role} <span className="text-muted">· {org}</span>
            </h3>
            <p className="mt-1 font-mono text-xs text-accent">
              {start} – {end}
            </p>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-muted">
              {points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </section>
  );
}
