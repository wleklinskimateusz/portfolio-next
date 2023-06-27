import { blogs } from "@/data/blogs";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const Blogs = () => {
  return (
    <div className="prose m-auto h-full w-screen max-w-full p-10">
      <h1 className="text-center">My Blog Articles</h1>
      <ul className="flex flex-wrap items-center justify-center gap-10">
        {blogs.map(({ title, description, image, link }) => (
          <div
            key={title}
            className="prose-sm card flex max-w-sm bg-primary p-5 text-primary-content  shadow-lg"
          >
            {image && (
              <Image src={image} alt={title} width={1057} height={554} />
            )}
            <h1>{title}</h1>
            <p>{description}</p>
            <Link className="btn-secondary btn w-fit self-end" href={link}>
              Read me
            </Link>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default Blogs;
