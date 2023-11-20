import { blogs } from "@/app/_data/blogs";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import urlMetadata from "url-metadata";
import { z } from "zod";

const getMetadata = async (link: string) => {
  const metadata = await urlMetadata(link);
  const {
    "og:title": title,
    description,
    "og:image": image,
    jsonld: { datePublished, publisher },
  } = metadataSchema.parse(metadata);
  return {
    title,
    description,
    image,
    datePublished,
    publisher,
  };
};

const Blogs = async () => {
  const metadatas = await Promise.all(blogs.map(getMetadata));
  return (
    <div className="m-auto h-full w-screen max-w-full p-10">
      <h1 className="text-center">My Blog Articles</h1>
      <ul className="flex flex-wrap items-center justify-center gap-10">
        {blogs.map((link, idx) => (
          <BlogCard metadata={metadatas[idx]} key={link} link={link} />
        ))}
      </ul>
    </div>
  );
};

const metadataSchema = z.object({
  "og:title": z.string(),
  description: z.string(),
  "og:image": z.string().url().optional(),
  jsonld: z.object({
    datePublished: z.string(),
    publisher: z
      .object({
        name: z.string(),
        url: z.string().url(),
        logo: z.object({
          width: z.number(),
          height: z.number(),
          url: z.string().url(),
        }),
      })
      .optional(),
  }),
});

const BlogCard = ({
  link,
  metadata: { title, description, image },
}: {
  link: string;
  metadata: Awaited<ReturnType<typeof getMetadata>>;
}) => {
  return (
    <div key={title} className="card glass flex max-w-sm shadow-lg">
      {image && (
        <figure>
          <Image src={image} alt={title} width={1057} height={554} />
        </figure>
      )}
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{description}</p>
        <div className="card-actions justify-end">
          <Link className="btn-primary btn w-fit" href={link}>
            Read me
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
