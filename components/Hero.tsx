import { StrapiImage } from "@/apiSchema/imageSchema";
import React, { FC, Suspense } from "react";
import { NextImage } from "./NextImage";
import { FaFacebook } from "react-icons/fa";
import Link from "next/link";
import { Socials } from "./Socials";

type HeroProps = {
  image: StrapiImage;
  details: {
    title: string;
    name: string;
    bio: string;
  };
};

export const Hero: FC<HeroProps> = ({
  image,
  details: { title, name, bio },
}) => {
  return (
    <div className="hero h-full ">
      <div className="flex flex-col items-center justify-around gap-5">
        <div className="hero-content flex-col lg:flex-row lg:gap-20">
          <NextImage image={image} className="max-w-sm rounded-lg shadow-md" />
          <div className="prose">
            <h1 className="text-5xl font-bold">{name}</h1>
            <h2 className="text-3xl">{title}</h2>
            <p className="py-6">{bio}</p>
            <button className="btn-primary btn">Get Started</button>
          </div>
        </div>
        <Suspense fallback={"...loading"}>
          <Socials />
        </Suspense>
      </div>
    </div>
  );
};
