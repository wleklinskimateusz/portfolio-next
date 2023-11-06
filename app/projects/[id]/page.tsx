import { projectIndexSchema, projects } from "@/app/_data/projects";
import Link from "next/link";
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
    <div className="m-auto flex h-full justify-center gap-16 pt-16">
      {image && (
        <figure className="m-0">
          <Image
            src={image}
            width={175}
            height={175 * 3}
            className="rounded-lg shadow-xl"
            alt=""
          />
        </figure>
      )}
      <div className="flex flex-col justify-center gap-16">
        <div>
          <h1>{name}</h1>
          <p>{description}</p>
        </div>
        {(repo || live) && (
          <div className="flex gap-3">
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
    </div>
  );
}
