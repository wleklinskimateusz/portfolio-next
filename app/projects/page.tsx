import { imageSchema } from "@/apiSchema/imageSchema";
import { ProjectCard } from "@/components/ProjectCard";
import { fetchManyStrapi } from "@/services/fetchStrapi";
import { z } from "zod";

export default async function Projects() {
  const projects = await fetchManyStrapi({
    path: "/api/projects",
    schema: z.object({
      name: z.string(),
      image: imageSchema,
      description: z.string(),
    }),
    query: {
      populate: ["image"],
    },
  });
  return (
    <div className=" prose m-auto h-full w-screen max-w-full p-10">
      <h1 className="text-center">Projects</h1>
      <ul className="flex flex-wrap justify-center gap-10">
        {projects.map(({ name, id, image, description }) => (
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
