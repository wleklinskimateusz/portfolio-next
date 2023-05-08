import { imageSchema } from "@/apiSchema/imageSchema";
import { NextImage } from "@/components/NextImage";
import { fetchManyStrapi, fetchStrapi } from "@/services/fetchStrapi";
import Link from "next/link";
import { z } from "zod";

type Params = {
  params: {
    id: string;
  };
};

export async function generateMetadata({ params }: Params) {
  const { name } = await fetchStrapi({
    path: `/api/projects/${params.id}`,
    schema: z.object({
      name: z.string(),
    }),
  });
  return {
    title: `Project ${name} - Mateusz Wlekliński`,
  };
}

export default async function Project({ params: { id } }: Params) {
  const { name, description, repo, live, image } = await fetchStrapi({
    path: `/api/projects/${id}`,
    schema: z.object({
      name: z.string(),
      description: z.string(),
      image: imageSchema,
      repo: z.string().nullable(),
      live: z.string().nullable(),
    }),
    query: {
      populate: ["image"],
    },
  });
  return (
    <div className="prose m-auto h-full w-screen py-10">
      <h1>{name}</h1>
      <NextImage image={image} width={3000} className="rounded-lg shadow-xl" />
      <p>{description}</p>
      {repo && live && (
        <div className="flex justify-around">
          {repo && (
            <Link href={repo} className="btn-primary btn">
              Check out the Code
            </Link>
          )}
          {live && (
            <Link href={live} className="btn-secondary btn">
              Live Demo
            </Link>
          )}
        </div>
      )}
    </div>
  );
}
