import { skills } from "@/data/skills";

export function Skills() {
  return (
    <section id="skills" className="py-16">
      <h2 className="text-2xl font-semibold">Skills</h2>
      <div className="mt-8 grid gap-8 sm:grid-cols-2">
        {skills.map(({ category, items }) => (
          <div key={category}>
            <h3 className="font-mono text-sm text-accent">{category}</h3>
            <ul className="mt-3 flex flex-wrap gap-2">
              {items.map((item) => (
                <li
                  key={item}
                  className="rounded-md border border-line bg-surface px-3 py-1 text-sm"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
