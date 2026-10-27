"use client";

import { useLayoutEffect } from "react";

export function ThemeToggle() {
  // React resets <html> attributes on the dev remount; re-apply the saved theme.
  useLayoutEffect(() => {
    try {
      const theme = localStorage.getItem("theme");
      if (theme === "light" || theme === "dark") {
        document.documentElement.setAttribute("data-theme", theme);
      }
    } catch {}
  }, []);

  function toggle() {
    const root = document.documentElement;
    const next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
    root.setAttribute("data-theme", next);
    try {
      localStorage.setItem("theme", next);
    } catch {}
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Toggle dark and light theme"
      className="flex h-11 w-11 items-center justify-center rounded-md text-muted hover:text-foreground"
    >
      {/* Sun shows in dark mode (click for light); moon shows in light mode. */}
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        className="hidden h-5 w-5 dark:block"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      >
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
      </svg>
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        className="block h-5 w-5 dark:hidden"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />
      </svg>
    </button>
  );
}
