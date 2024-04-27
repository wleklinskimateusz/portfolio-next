import { Button } from "@/components/ui/button";
import { ProjectCard } from "./_components/ProjectCard";
import { projects } from "@/data/projects";

export const metadata = {
  title: "Projects - Mateusz Wlekliński",
};

export default async function Projects() {
  return (
    <div className="m-auto h-full">
      <h1 className="text-center">Projects I have worked on</h1>
      <ul className="mx-auto my-8 grid w-fit grid-cols-1 content-center justify-items-center gap-8 p-4 lg:grid-cols-2  2xl:grid-cols-3">
        <ProjectCard
          name="Tetrisly Design System"
          tags={["Comercial Project", "VirtusLab"]}
          url="tetrisly"
          image="/images/projects/tetrisly.svg"
          finished={new Date(2024, 4, 1)}
        >
          A tool for{" "}
          <span className="font-medium text-primary">design systems</span> and
          bridging the gap between design and development.
        </ProjectCard>
        <ProjectCard
          name="Budget Tracker"
          tags={["Finance", "Personal", "DB", "Auth"]}
          url="budget-tracker"
          image="https://budget-livid.vercel.app/logo.svg"
          finished={null}
        >
          A budget tracker app that allows user to track their expenses and
          incomes.
        </ProjectCard>
        <ProjectCard
          name="Pokedex"
          tags={["Beginner", "Personal", "Rest API", "Redux"]}
          url="pokedex"
          image="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
          finished={new Date(2022, 3, 1)}
        >
          An app that fetches data from external api, stores with state
          managment library and allows user, to search, filter and display
          pokemons.
        </ProjectCard>
      </ul>
    </div>
  );
}
