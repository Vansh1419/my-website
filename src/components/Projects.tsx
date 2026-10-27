import Image from "next/image";
import { projects } from "@/data/projects";

export function Projects() {
  return (
    <section id="projects" className="py-16">
      <h2 className="text-2xl font-semibold">Projects</h2>
      <ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => {
          const links = [
            { label: "Blog", url: project.notionUrl },
            { label: "GitHub", url: project.githubUrl },
            { label: "Live", url: project.liveUrl },
          ].filter((link) => link.url);

          return (
            <li
              key={project.title}
              className="flex flex-col overflow-hidden rounded-lg border border-line bg-surface"
            >
              {project.image && (
                <Image
                  src={project.image}
                  alt={`Screenshot of ${project.title}`}
                  width={640}
                  height={360}
                  className="aspect-video w-full object-cover"
                />
              )}
              <div className="flex flex-1 flex-col p-5">
                <h3 className="text-lg font-semibold">{project.title}</h3>
                <p className="mt-2 text-sm text-muted">{project.description}</p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <li key={tech} className="font-mono text-xs text-accent">
                      {tech}
                    </li>
                  ))}
                </ul>
                {links.length > 0 && (
                  <div className="mt-auto flex flex-wrap gap-2 pt-5">
                    {links.map(({ label, url }) => (
                      <a
                        key={label}
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${label}: ${project.title}`}
                        className="inline-flex min-h-11 items-center rounded-md border border-line px-4 text-sm hover:border-accent hover:text-accent"
                      >
                        {label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
