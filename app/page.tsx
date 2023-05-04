import { fetchStrapi } from "@/services/fetchStrapi";
import { z } from "zod";
import Image from "next/image";
import { imageSchema } from "@/apiSchema/imageSchema";
import { getImageProps } from "@/services/getImageProps";
import { NextImage } from "@/components/NextImage";
import { Hero } from "@/components/Hero";

export default async function Home() {
  const { firstName, lastName, title, picture, bio } = await fetchStrapi({
    path: "/api/profile",
    schema: z.object({
      firstName: z.string(),
      lastName: z.string(),
      title: z.string(),
      picture: imageSchema,
      bio: z.string(),
    }),
    query: {
      populate: ["picture", "bio"],
    },
  });
  return (
    <div className="h-full w-screen">
      <Hero
        image={picture}
        details={{
          title,
          name: `${firstName} ${lastName}`,
          bio,
        }}
      />
    </div>
  );
}
