import React, { FC, ReactNode } from "react";
import Image from "next/image";

import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

type ProjectCardProps = {
  name: string;
  tags?: string[];
  children: ReactNode;
  url: string;
  className?: string;
  image?: string;
  finished: Date | null;
  underConstruction?: boolean;
};

export const ProjectCard: FC<ProjectCardProps> = ({
  name,
  children,
  image,
  url,
  className,
  tags,
  finished,
  underConstruction,
}) => {
  return (
    <li className={cn("h-full max-w-md", className)}>
      <Link href={`/projects/${url}`}>
        <Card className="relative flex h-full flex-col hover:shadow-lg">
          <UnderConstructionBadge underConstruction={underConstruction} />
          <CardHeader className="space-y-0">
            <div className="flex flex-row items-center justify-between">
              <CardTitle>{name}</CardTitle>
              <div className="flex gap-1 ">
                {tags?.map((tag) => (
                  <Badge key={tag} variant="secondary">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
            <div>
              <Badge className="hover:bg-primary">
                {finished
                  ? finished.toLocaleDateString("en", {
                      year: "numeric",
                      month: "short",
                      day: undefined,
                    })
                  : "In Progress"}
              </Badge>
            </div>
          </CardHeader>
          <CardContent className="flex grow flex-col justify-between gap-4">
            <div className="flex gap-4">
              <div className="my-auto w-2/3 text-sm">{children}</div>
              <ProjectThumbnail image={image ?? null} title={name} />
            </div>
            <Button variant="secondary" className="w-fit">
              Learn More
            </Button>
          </CardContent>
        </Card>
      </Link>
    </li>
  );
};

const UnderConstructionBadge = ({
  underConstruction,
}: Pick<ProjectCardProps, "underConstruction">) => {
  if (!underConstruction) return null;
  return (
    <Badge className="absolute bottom-2 right-2" variant="destructive">
      details page under construction
    </Badge>
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
