import { ProjectCard } from "@/components/ProjectCard";
import { projects } from "@/data/projects";

export const metadata = {
  title: "Projects - Mateusz Wlekliński",
};

export default async function Projects() {
  return (
    <div className="prose m-auto h-full w-screen max-w-full p-10">
      <h1 className="text-center">Projects</h1>
      <ul className="flex flex-wrap items-center justify-center gap-10">
        {projects.map(({ name, image, description }, id) => (
          <ProjectCard
            key={id}
            title={name}
            id={id}
            image={image}
            description={description}
          />
        ))}
      </ul>
    </div>
  );
}
