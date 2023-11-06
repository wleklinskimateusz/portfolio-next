"use client";
import React, { FC } from "react";
import Image from "next/image";

import clsx from "clsx";

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
    <li id={`project-${id}`} className="carousel-item relative w-full">
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
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{description}</p>
        <div className="card-actions justify-end">
          <Link className="btn-primary btn" href={`/projects/${id}`}>
            See more
          </Link>
        </div>
      </div>
      <div className="absolute left-48 right-48 top-full flex -translate-y-1/2 transform cursor-default justify-between">
        {prevId && (
          <Link href={`#project-${prevId}`} className="btn-circle btn">
            ❮
          </Link>
        )}
        {nextId && (
          <Link href={`#project-${nextId}`} className="btn-circle btn ">
            ❯
          </Link>
        )}
      </div>
    </li>
  );
};
