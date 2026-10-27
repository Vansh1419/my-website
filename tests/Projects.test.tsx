import { render, screen, within } from "@testing-library/react";
import { expect, test, vi } from "vitest";
import { Projects } from "@/components/Projects";

vi.mock("@/data/projects", () => ({
  projects: [
    {
      title: "Full",
      description: "Has every link",
      tech: ["TypeScript"],
      notionUrl: "https://notion.so/post",
      githubUrl: "https://github.com/me/full",
      liveUrl: "https://full.example.com",
    },
    {
      title: "GitHubOnly",
      description: "Has only a repo",
      tech: ["Python"],
      githubUrl: "https://github.com/me/only",
    },
    { title: "NoLinks", description: "Has no links", tech: ["Docker"] },
  ],
}));

function card(title: string) {
  return within(screen.getByRole("heading", { name: title }).closest("li")!);
}

test("shows Blog, GitHub and Live when all three URLs are set", () => {
  render(<Projects />);
  const links = card("Full").getAllByRole("link");
  expect(links.map((link) => link.textContent)).toEqual(["Blog", "GitHub", "Live"]);
  expect(links.map((link) => link.getAttribute("href"))).toEqual([
    "https://notion.so/post",
    "https://github.com/me/full",
    "https://full.example.com",
  ]);
});

test("opens links in a new tab safely", () => {
  render(<Projects />);
  for (const link of card("Full").getAllByRole("link")) {
    expect(link.getAttribute("target")).toBe("_blank");
    expect(link.getAttribute("rel")).toBe("noopener noreferrer");
  }
});

test("shows only the links that exist", () => {
  render(<Projects />);
  const github = card("GitHubOnly");
  expect(github.getAllByRole("link").map((link) => link.textContent)).toEqual(["GitHub"]);
  expect(github.queryByText("Blog")).toBeNull();
  expect(github.queryByText("Live")).toBeNull();
});

test("shows no link buttons when a project has no URLs", () => {
  render(<Projects />);
  const none = card("NoLinks");
  expect(none.queryAllByRole("link")).toHaveLength(0);
  for (const label of ["Blog", "GitHub", "Live"]) {
    expect(none.queryByText(label)).toBeNull();
  }
  expect(screen.getByText("Has no links")).not.toBeNull();
});
