import { fetchStrapi } from "@/services/fetchStrapi";
import { z } from "zod";
import Image from "next/image";
import { imageSchema } from "@/apiSchema/imageSchema";
import { getImageProps } from "@/services/getImageProps";
import { NextImage } from "@/components/NextImage";
import { Hero } from "@/components/Hero";

export default async function Projects() {
  return <div className="h-full w-screen">Projects</div>;
}
