import { fetchStrapi } from "@/services/fetchStrapi";
import { z } from "zod";
import Image from "next/image";
import { imageSchema } from "@/apiSchema/imageSchema";
import { getImageProps } from "@/services/getImageProps";
import { NextImage } from "@/components/NextImage";
import { Hero } from "@/components/Hero";

export default async function Contact() {
  return <div className="h-full w-screen">Contact</div>;
}
