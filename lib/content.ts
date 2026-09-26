import { experiences, projects, type Project } from "@/data";

export const pad = (n: number) => String(n).padStart(2, "0");

export const getProject = (slug: string) =>
  projects.find((project) => project.slug === slug);

/** Two-digit position of a project in the portfolio, e.g. "03". */
export const projectNumber = (project: Project) =>
  pad(projects.indexOf(project) + 1);

export const hostOf = (url: string) => new URL(url).host.replace(/^www\./, "");

/** "Jul 2025" → "2025" */
export const yearOf = (date: string) => date.slice(-4);

export const careerStartYear = yearOf(
  experiences[experiences.length - 1].start
);

export const currentRole = experiences.find((item) => item.end === "Present");

export type StackNode = { name: string; projects: number[] };

/**
 * Every technology used across the given projects, with the indices of the
 * projects that use it. Ordered by the mean index of those projects so the
 * project ↔ technology connections stay close to crossing-free.
 */
export function buildStackIndex(list: Project[]): StackNode[] {
  const users = new Map<string, number[]>();
  list.forEach((project, index) => {
    for (const tech of project.technologies) {
      users.set(tech, [...(users.get(tech) ?? []), index]);
    }
  });

  const mean = (values: number[]) =>
    values.reduce((sum, value) => sum + value, 0) / values.length;

  return [...users]
    .map(([name, projects]) => ({ name, projects }))
    .sort(
      (a, b) =>
        mean(a.projects) - mean(b.projects) ||
        b.projects.length - a.projects.length
    );
}
