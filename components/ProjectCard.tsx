import React, { FC } from "react";
import Image from "next/image";

import Link from "next/link";

type ProjectCardProps = {
  title: string;
  description: string;
  image: string | null;
  id: number;
};

export const ProjectCard: FC<ProjectCardProps> = ({
  title,
  id,
  description,
  image,
}) => {
  return (
    <div className="card glass card-side shadow-xl">
      {image && (
        <figure className="m-0">
          <Image
            className="h-full"
            src={image}
            width={120}
            height={360}
            alt={title}
          />
        </figure>
      )}
      <div className="prose-sm card-body w-72">
        <h2 className="card-title">{title}</h2>
        <p>
          {description.length > 100
            ? description.slice(0, 100) + "..."
            : description}
        </p>
        <div className="card-actions justify-end">
          <Link className="btn-primary btn" href={`/projects/${id}`}>
            See more
          </Link>
        </div>
      </div>
    </div>
  );
};
