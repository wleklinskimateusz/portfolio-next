import { StrapiImage } from "@/apiSchema/imageSchema";
import React, { FC } from "react";
import Image from "next/image";

type HeroProps = {
  image: string;
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
    <div className="hero h-full">
      <div className="flex flex-col items-center justify-around gap-5">
        <div className="hero-content min-w-full flex-col bg-base-200 lg:flex-row lg:gap-20">
          <Image
            src={image}
            alt="profile"
            className="rounded-lg bg-base-300 shadow-md"
          />
          <div className="prose flex flex-col items-center justify-center px-2  lg:items-start lg:px-0">
            <h1 className="text-center text-5xl font-bold lg:text-left">
              {name}
            </h1>
            <h2 className="text-center text-3xl lg:text-left">{title}</h2>
            <p className="py-6 text-center lg:text-left">{bio}</p>
            <button className="btn-primary btn w-44 ">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};
