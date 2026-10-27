import { profile } from "@/data/profile";

export function Hero() {
  const buttonClass =
    "inline-flex min-h-11 items-center rounded-md px-5 text-sm font-medium";
  return (
    <section id="top" className="flex min-h-[80vh] items-center py-16">
      <div>
        <p className="font-mono text-sm text-accent">Hi, my name is</p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-6xl">
          {profile.name}
        </h1>
        <p className="mt-3 text-xl text-muted sm:text-2xl">{profile.role}</p>
        <p className="mt-6 max-w-xl text-muted">{profile.tagline}</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="#projects"
            className={`${buttonClass} bg-accent text-on-accent hover:opacity-90`}
          >
            View projects
          </a>
          <a
            href="#contact"
            className={`${buttonClass} border border-line hover:border-accent`}
          >
            Contact me
          </a>
        </div>
      </div>
    </section>
  );
}
