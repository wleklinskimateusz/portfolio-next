import { projectIndexSchema, projects } from "@/data/projects";
import Link from "next/link";
import { z } from "zod";
import Image from "next/image";

type Params = {
  params: {
    id: string;
  };
};

export function generateMetadata({ params: { id: rawId } }: Params) {
  const result = projectIndexSchema.safeParse(Number.parseInt(rawId));
  if (!result.success) {
    return {};
  }
  const { name } = projects[result.data];

  return {
    title: `Project ${name} - Mateusz Wlekliński`,
  };
}

export default function Project({ params: { id: rawId } }: Params) {
  const result = projectIndexSchema.safeParse(Number.parseInt(rawId));
  if (!result.success) {
    return <h1>404</h1>;
  }
  const { name, image, description, repo, live } = projects[result.data];

  return (
    <div className="prose m-auto h-full w-screen py-10">
      <h1>{name}</h1>
      <Image src={image} width={3000} className="rounded-lg shadow-xl" alt="" />
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
