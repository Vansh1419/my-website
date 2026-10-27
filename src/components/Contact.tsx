"use client";

import { useState } from "react";
import { links } from "@/data/links";

type Errors = { name?: string; email?: string; message?: string };
type Status = "idle" | "sending" | "success" | "error";

const formspreeId = process.env.NEXT_PUBLIC_FORMSPREE_ID;

export function Contact() {
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<Status>("idle");

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name")).trim();
    const email = String(data.get("email")).trim();
    const message = String(data.get("message")).trim();

    const found: Errors = {};
    if (!name) found.name = "Please enter your name.";
    if (!/^\S+@\S+\.\S+$/.test(email)) found.email = "Please enter a valid email.";
    if (!message) found.message = "Please enter a message.";
    setErrors(found);
    if (Object.keys(found).length > 0) return;

    setStatus("sending");
    try {
      if (!formspreeId) throw new Error("NEXT_PUBLIC_FORMSPREE_ID is not set");
      const response = await fetch(`https://formspree.io/f/${formspreeId}`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ name, email, message, _gotcha: data.get("_gotcha") }),
      });
      if (!response.ok) throw new Error(`Formspree returned ${response.status}`);
      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  const fieldClass = (hasError: boolean) =>
    `mt-1 block min-h-11 w-full rounded-md border bg-surface px-3 py-2 ${
      hasError ? "border-red-500" : "border-line"
    }`;
  const errorClass = "mt-1 text-sm text-red-500";
  const linkClass = "flex min-h-11 items-center hover:text-accent";

  return (
    <section id="contact" className="py-16">
      <h2 className="text-2xl font-semibold">Contact</h2>
      <p className="mt-4 max-w-xl text-muted">
        Open to Software Engineer and Forward Deployed Engineer roles. Send me a message and I will
        reply soon.
      </p>

      <div className="mt-8 grid gap-10 md:grid-cols-[2fr_1fr]">
        <form onSubmit={onSubmit} noValidate className="space-y-5">
          <div>
            <label htmlFor="name">Name</label>
            <input
              id="name"
              name="name"
              type="text"
              autoComplete="name"
              aria-invalid={!!errors.name}
              aria-describedby={errors.name ? "name-error" : undefined}
              className={fieldClass(!!errors.name)}
            />
            {errors.name && (
              <p id="name-error" className={errorClass}>
                {errors.name}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              aria-invalid={!!errors.email}
              aria-describedby={errors.email ? "email-error" : undefined}
              className={fieldClass(!!errors.email)}
            />
            {errors.email && (
              <p id="email-error" className={errorClass}>
                {errors.email}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows={5}
              aria-invalid={!!errors.message}
              aria-describedby={errors.message ? "message-error" : undefined}
              className={fieldClass(!!errors.message)}
            />
            {errors.message && (
              <p id="message-error" className={errorClass}>
                {errors.message}
              </p>
            )}
          </div>

          {/* Honeypot: hidden from people, bots fill it in. */}
          <div aria-hidden="true" className="absolute -left-[9999px]">
            <label htmlFor="_gotcha">Leave this empty</label>
            <input id="_gotcha" name="_gotcha" type="text" tabIndex={-1} autoComplete="off" />
          </div>

          <button
            type="submit"
            disabled={status === "sending"}
            className="inline-flex min-h-11 items-center rounded-md bg-accent px-5 text-sm font-medium text-on-accent hover:opacity-90 disabled:opacity-60"
          >
            {status === "sending" ? "Sending..." : "Send message"}
          </button>

          <p role="status" aria-live="polite" className="text-sm">
            {status === "success" && (
              <span className="text-accent">Thanks! Your message was sent.</span>
            )}
            {status === "error" && (
              <span className="text-red-500">
                Sorry, the message could not be sent. Please email me directly.
              </span>
            )}
          </p>
        </form>

        <ul className="space-y-1 text-muted">
          <li>
            <a href={`mailto:${links.email}`} className={linkClass}>
              Email: {links.email}
            </a>
          </li>
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
        </ul>
      </div>
    </section>
  );
}
