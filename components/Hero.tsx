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
            width={200}
            height={200}
            className="rounded-lg bg-base-300 shadow-md"
          />
          <div className="prose flex flex-col items-center justify-center px-2  lg:items-start lg:px-0">
            <h1 className="text-center lg:text-left">{name}</h1>
            <h2 className="mt-0 text-center  lg:text-left">{title}</h2>
            {bio.split("\n").map((paragraph, id) => (
              <p key={id} className="text-center lg:text-left">
                {paragraph}
              </p>
            ))}
            <button className="btn-primary btn w-44 ">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};
