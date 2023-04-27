import { fetchStrapi } from "@/services/fetchStrapi";
import { z } from "zod";
import Image from "next/image";
import { imageSchema } from "@/apiSchema/imageSchema";

export default async function Home() {
  const { firstName, lastName, title, picture } = await fetchStrapi({
    path: "/api/profile",
    schema: z.object({
      firstName: z.string(),
      lastName: z.string(),
      title: z.string(),
      picture: imageSchema,
    }),
    query: {
      populate: "picture",
    },
  });
  return (
    <div className="w-screen">
      <div className="prose m-auto flex flex-col items-center justify-center text-center">
        <Image
          width={250}
          height={250}
          className="rounded-full"
          src={picture.data.attributes.url}
          alt={picture.data.attributes.alternativeText}
        />
        <p>
          {firstName} {lastName}
        </p>
        <p>{title}</p>
      </div>
    </div>
  );
}
