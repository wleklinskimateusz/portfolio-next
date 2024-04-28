export const navigationConfig = {
  home: "/#hero",
  aboutMe: "/#about-me",
  projects: "/#projects",
  contact: "/#contact",
  project: {
    tetrisly: "/projects/tetrisly",
    budgetTracker: "/projects/budget-tracker",
    pokedex: "/projects/pokedex",
  },
  mailTo: "mailto:wleklinskimateusz05@gmail.com",

  tetrisly: {
    logo: "/images/projects/tetrisly.svg",
    website: {
      home: "https://tetrisly.com",
      figma: "https://tetrisly.com/products/figma",
      react: "https://tetrisly.com/products/react",
    },
    docs: {
      home: "https://docs.tetrisly.com",
      tokens: "https://docs.tetrisly.com/foundations/overview/design-tokens",
      gettingStarted: "https://docs.tetrisly.com/getting-started/about",
    },
    react: {
      github: "https://github.com/VirtusLab/tetrisly-react",
      npm: "https://www.npmjs.com/package/@virtuslab/tetrisly-react",
      storybook: "https://storybook.tetrisly.com",
    },
    demo: "https://demo.tetrisly.com",
    plugin:
      "https://www.figma.com/community/plugin/1301902178949170574/tetrisly-plugin",
    icons: {
      npm: "https://www.npmjs.com/package/@virtuslab/tetrisly-icons",
    },
    miniDemo: "https://wleklinskimateusz.github.io/mini-demo-tet/",
    article:
      "https://medium.com/tetrisly/style-wars-tailwind-vs-css-in-js-in-design-systems-implementation-de6015ee2695?source=friends_link&sk=12af2d489aa24c5879d2f0750b1c808c",
  },
  budgetTracker: {
    logo: "https://budget-livid.vercel.app/logo.svg",
    repo: "", //TODO: add repo link
  },
  pokedex: {
    logo: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
    repo: "", // TODO: add repo link
  },
} as const;
