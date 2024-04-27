import React, { FC } from "react";
import Image from "next/image";

import Link from "next/link";

type ProjectCardProps = {
  title: string;
  description: string;
  image: string | null;
  id: number;
  prevId?: number;
  nextId?: number;
};

export const ProjectCard: FC<ProjectCardProps> = ({
  title,
  id,
  description,
  image,
  prevId,
  nextId,
}) => {
  return (
    <li id={`project-${id}`} className="relative w-full">
      <ProjectThumbnail image={image} title={title} />
      <div>
        <h2>{title}</h2>
        <p>{description}</p>
        <div className="justify-end">
          <Link href={`/projects/${id}`}>See more</Link>
        </div>
      </div>
      <div className="absolute left-48 right-48 top-full flex -translate-y-1/2 transform cursor-default justify-between">
        <PrevNextLink id={prevId} option="prev" />
        <PrevNextLink id={nextId} option="next" />
      </div>
    </li>
  );
};

const ProjectThumbnail = ({
  image,
  title,
}: {
  image: string | null;
  title: string;
}) => {
  if (!image) return null;
  return (
    <figure className="m-0">
      <Image
        className="h-full"
        src={image}
        width={120}
        height={360}
        alt={title}
      />
    </figure>
  );
};

const PrevNextLink = ({
  id,
  option,
}: {
  id: number | undefined;
  option: "prev" | "next";
}) => {
  if (!id) return null;
  return <Link href={`#project-${id}`}>{option === "prev" ? "❮" : "❯"}</Link>;
};
