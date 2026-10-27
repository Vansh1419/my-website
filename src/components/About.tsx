import { profile } from "@/data/profile";

export function About() {
  return (
    <section id="about" className="py-16">
      <h2 className="text-2xl font-semibold">About me</h2>
      <div className="mt-8 max-w-2xl space-y-4 text-muted">
        {profile.bio.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
    </section>
  );
}
