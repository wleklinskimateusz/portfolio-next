import Link from "next/link";
import { Icon } from "@virtuslab/tetrisly-icons";
import Image from "next/image";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      aria-label="Hero Section"
      className="relative flex h-dvh flex-col shadow-2xl hero-planet "
    >
      <div className="flex h-full flex-col justify-end  gap-8 p-8  py-32">
        <div className="flex flex-col gap-2">
          <h1 className="font-serif  text-4xl text-white lg:text-5xl xl:text-6xl 2xl:text-7xl">
            Coding the Future: <br className="hidden sm:block" /> Elegant
            Solutions for <span className="font-extrabold">Bold</span> Ideas
          </h1>
          <div className="text-md text-gray-300 lg:text-lg xl:text-xl  2xl:text-2xl">
            Transforming Vision into Reality with Precision and Creativity
          </div>
        </div>

        <Link
          className="absolute bottom-8 left-0 right-0 mx-auto flex w-fit flex-col items-center justify-center font-serif text-gray-300 transition-colors duration-300 hover:text-white"
          href={{ hash: "personal-features" }}
        >
          <span>Explore My World</span>
          <Icon name="20-arrow-down" />
        </Link>
      </div>
    </section>
  );
};
