"use client";

import { useEffect, useState } from "react";
import { ThemeToggle } from "@/components/ThemeToggle";
import { profile } from "@/data/profile";

const items = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
];

export function Nav() {
  const [active, setActive] = useState("");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      { rootMargin: "-40% 0px -55% 0px" },
    );
    for (const { id } of items) {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    }
    return () => observer.disconnect();
  }, []);

  const linkClass = (id: string) =>
    `flex min-h-11 items-center px-3 text-sm hover:text-foreground ${
      active === id ? "text-accent" : "text-muted"
    }`;

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-background/90 backdrop-blur">
      <nav
        aria-label="Main"
        className="mx-auto flex max-w-5xl items-center justify-between px-4"
      >
        <a href="#top" className="flex min-h-11 items-center font-mono text-sm font-semibold text-foreground">
          {profile.name}
        </a>

        <div className="flex items-center">
          <ul className="hidden md:flex">
            {items.map(({ id, label }) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  className={linkClass(id)}
                  aria-current={active === id ? "true" : undefined}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label="Menu"
            className="flex h-11 w-11 items-center justify-center rounded-md text-muted hover:text-foreground md:hidden"
          >
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            >
              {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
            </svg>
          </button>
        </div>
      </nav>

      {open && (
        <ul id="mobile-menu" className="border-t border-line px-4 pb-2 md:hidden">
          {items.map(({ id, label }) => (
            <li key={id}>
              <a
                href={`#${id}`}
                onClick={() => setOpen(false)}
                className={linkClass(id)}
                aria-current={active === id ? "true" : undefined}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
