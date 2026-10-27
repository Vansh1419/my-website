import { links } from "@/data/links";
import { profile } from "@/data/profile";

// Cached so the year is computed at build time, not on every request.
export async function Footer() {
  "use cache";
  const linkClass = "flex min-h-11 min-w-11 items-center justify-center hover:text-foreground";
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-2 px-4 py-4 text-sm text-muted sm:flex-row">
        <p>
          © {new Date().getFullYear()} {profile.name}
        </p>
        <ul className="flex gap-4">
          <li>
            <a href={links.github} target="_blank" rel="noopener noreferrer" className={linkClass}>
              GitHub
            </a>
          </li>
          <li>
            <a href={links.linkedin} target="_blank" rel="noopener noreferrer" className={linkClass}>
              LinkedIn
            </a>
          </li>
          <li>
            <a href={`mailto:${links.email}`} className={linkClass}>
              Email
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
