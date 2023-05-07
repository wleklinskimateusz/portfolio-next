import React, { FC } from "react";
import { NextImage } from "./NextImage";
import { z } from "zod";
import { imageSchema } from "@/apiSchema/imageSchema";
import Link from "next/link";

type ProjectCardProps = {
  title: string;
  description: string;
  image: z.infer<typeof imageSchema>;
  id: number;
};

export const ProjectCard: FC<ProjectCardProps> = ({
  title,
  id,
  description,
  image,
}) => {
  return (
    <div className="prose-sm card w-96 flex-shrink-0 basis-80 bg-base-100 shadow-xl">
      {image && (
        <figure>
          <NextImage image={image} width={800} />
        </figure>
      )}
      <div className="card-body">
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
