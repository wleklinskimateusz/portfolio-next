import { ProjectCard } from "./_components/ProjectCard";
import { projects } from "@/data/projects";

export const metadata = {
  title: "Projects - Mateusz Wlekliński",
};

export default async function Projects() {
  return (
    <div className="m-auto h-full  w-screen p-10">
      <h1 className=" text-center">My Projects</h1>
      <ul
        id="carousel"
        className="carousel-center carousel rounded-box space-x-4  p-4"
      >
        {projects.map(({ name, image, description }, id) => (
          <ProjectCard
            key={id}
            title={name}
            id={id}
            image={image}
            description={description}
            prevId={id !== 0 ? id - 1 : undefined}
            nextId={id !== projects.length - 1 ? id + 1 : undefined}
          />
        ))}
      </ul>
    </div>
  );
}
