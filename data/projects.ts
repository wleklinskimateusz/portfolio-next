import { z } from "zod";

type Project = {
  name: string;
  description: string;
  image?: string;
  repo?: string;
  live?: string;
};

export const projects = [
  {
    name: "Notes App",
    description:
      "A simple, yet powerful, tool to create and manage your notes.",
  },
  {
    name: "Notes App",
    description:
      "A simple, yet powerful, tool to create and manage your notes.",
  },
  {
    name: "Notes App",
    description:
      "A simple, yet powerful, tool to create and manage your notes.",
  },
  {
    name: "Notes App",
    description:
      "A simple, yet powerful, tool to create and manage your notes.",
  },
] as const satisfies readonly Project[];

export type FindIndex<T extends readonly any[]> = T extends readonly [
  infer _,
  ...infer Rest
]
  ? Rest["length"] | FindIndex<Rest>
  : 0;

export type ProjectIndex = FindIndex<typeof projects>;

export const projectIndexSchema = z.custom<ProjectIndex>((value) => {
  if (typeof value !== "number") {
    return "Expected a number";
  }

  if (value < 0 || value >= projects.length) {
    return `Expected a number between 0 and ${projects.length - 1}`;
  }

  return true;
});
