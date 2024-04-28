import Link from "next/link";
import { Icon } from "@virtuslab/tetrisly-icons";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      aria-label="Hero Section"
      className="relative flex h-dvh flex-col shadow-2xl hero-planet "
    >
      <div className="flex h-full flex-col justify-end  gap-8 p-8  py-32">
        <div className="flex flex-col gap-2">
          <h1 className="text-white">
            Coding the Future: <br className="hidden sm:block" /> Elegant
            Solutions for <span className="font-extrabold">Bold</span> Ideas
          </h1>
          <div className="text-md text-gray-300 lg:text-lg xl:text-xl 2xl:text-2xl">
            Building and maintaining software solutions that help you achieve
            your goals.
          </div>
          <Link
            className="absolute bottom-0 left-0 right-0 mx-auto flex w-fit flex-col items-center justify-center gap-4 font-serif text-gray-300 transition-colors duration-300 hover:text-white"
            href={{ hash: "about-me" }}
          >
            <span>Explore My World</span>
            <div className="rounded-t-full bg-primary p-4 pb-1 hover:opacity-80">
              <Icon name="20-arrow-down" />
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};
