import { checkIndexValue } from "@/services/checkIndex";
import { FindIndex } from "@/types/FindIndex";
import { z } from "zod";

type Project = {
  name: string;
  description: string;
  image: string | null;
  repo: string | null;
  live: string | null;
};

export const projects = [
  {
    name: "Notes App",
    description:
      "A simple, yet powerful, tool to create and manage your notes.",
    image: "/favicon.ico",
    repo: null,
    live: null,
  },
  {
    name: "Notes App",
    description:
      "A simple, yet powerful, tool to create and manage your notes.",
    image: null,
    repo: null,
    live: null,
  },
  {
    name: "Notes App",
    description:
      "A simple, yet powerful, tool to create and manage your notes.",
    image: null,
    repo: null,
    live: null,
  },
  {
    name: "Notes App",
    description:
      "A simple, yet powerful, tool to create and manage your notes.",
    image: null,
    repo: null,
    live: null,
  },
] as const satisfies readonly Project[];

export type ProjectIndex = FindIndex<typeof projects>;

export const projectIndexSchema = z.custom<ProjectIndex>((value) =>
  checkIndexValue(value, projects)
);
