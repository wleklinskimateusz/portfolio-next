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
    name: "Pokedex",
    description: "A pokedex app that allows to search and filter pokemons.",
    image: "/images/projects/pokemons.png",
    repo: "https://github.com/wleklinskimateusz/pokedex",
    live: "https://wleklinskimateusz.github.io/pokedex/",
  },
  {
    name: "Portfolio",
    description:
      "Portfolio website built with Next.js, Tailwind CSS and TypeScript.",
    image: "/images/projects/portfolio.png",
    repo: "https://github.com/wleklinskimateusz/portfolio-next",
    live: "/",
  },
  {
    name: "Game of Life",
    description: "Conway's Game of Life built with Rust",
    image: "/images/projects/game-of-life.png",
    repo: "https://github.com/wleklinskimateusz/game_of_life",
    live: null,
  },
] as const satisfies readonly Project[];

export type ProjectIndex = FindIndex<typeof projects>;

export const projectIndexSchema = z.custom<ProjectIndex>((value) =>
  checkIndexValue(value, projects)
);
