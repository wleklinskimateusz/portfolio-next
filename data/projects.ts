export type Project = {
  name: string;
  description: string;
  image: string | null;
  repo: string | null;
  live: string | null;
  finishDate: Date | null;
  url: string;
};

export const projects = [
  {
    url: "tetrisly",
    name: "Tetrisly Design System",
    description:
      "A comercial product I worked on as a typescript developer. It's a tool for creating design system and bridging the gap between design and development.",
    image: "/images/projects/tetrisly.svg",
    repo: "https://github.com/VirtusLab/tetrisly-react",
    live: "https://tetrisly.com/",
    finishDate: new Date(2024, 4, 25),
  },
  {
    name: "Pokedex",
    description:
      "One of my first projects. An app that fetches data from external api, stores with state managment library and allows user, to search, filter and display pokemons.",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
    repo: "https://github.com/wleklinskimateusz/pokedex",
    live: "https://wleklinskimateusz.github.io/pokedex/",
    finishDate: new Date(2022, 3, 15),
    url: "pokedex",
  },
  {
    name: "Custom CMS",
    description:
      "A custom CMS for managing content on my portfolio. Currently in development.",
    image: null,
    repo: null,
    live: null,
    finishDate: null,
    url: "custom-cms",
  },
] as const satisfies readonly Project[];
