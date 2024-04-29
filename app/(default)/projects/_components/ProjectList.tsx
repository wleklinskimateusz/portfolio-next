import { navigationConfig } from "@/config/navigationConfig";
import { ProjectCard } from "./ProjectCard";

export const ProjectList = () => (
  <ul className="mx-auto my-8 grid w-fit grid-cols-1 content-center justify-items-center gap-8 py-4 lg:grid-cols-2  2xl:grid-cols-3">
    <ProjectCard
      name="Tetrisly"
      tags={["Design System", "Comercial", "VirtusLab"]}
      url="tetrisly"
      image={navigationConfig.tetrisly.logo}
      finished={new Date(2024, 4, 1)}
    >
      A tool for{" "}
      <span className="font-medium text-primary">design systems</span> and
      bridging the gap between design and development.
    </ProjectCard>
    <ProjectCard
      name="Budget Tracker"
      tags={["Finance", "Fullstack", "Auth"]}
      url="budget-tracker"
      image={navigationConfig.budgetTracker.logo}
      finished={null}
      underConstruction
    >
      A budget tracker app that allows user to track their expenses and incomes.
    </ProjectCard>
    <ProjectCard
      name="Pokedex"
      tags={["Beginner", "Rest API", "Redux"]}
      url="pokedex"
      image={navigationConfig.pokedex.logo}
      finished={new Date(2022, 3, 1)}
      underConstruction
    >
      An app that fetches data from external api, stores with state managment
      library and allows user, to search, filter and display pokemons.
    </ProjectCard>
  </ul>
);
