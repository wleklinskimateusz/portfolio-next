import Link from "next/link";
import { Icon } from "@virtuslab/tetrisly-icons";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      aria-label="Hero Section"
      className="relative hero-planet h-screen shadow flex flex-col "
    >
      <div className="py-32 justify-end p-8 gap-8  flex flex-col  h-full">
        <div className="flex flex-col gap-2">
          <h1 className="2xl:text-7xl  text-white font-serif xl:text-6xl lg:text-5xl text-4xl">
            Coding the Future: <br className="hidden sm:block" /> Elegant
            Solutions for <span className="font-extrabold">Bold</span> Ideas
          </h1>
          <div className="2xl:text-2xl text-gray-300 xl:text-xl lg:text-lg  text-md">
            Transforming Vision into Reality with Precision and Creativity
          </div>
        </div>

        <Link
          className="absolute text-gray-300 transition-colors duration-300 hover:text-white flex flex-col justify-center items-center font-serif bottom-8 left-0 w-fit right-0 mx-auto"
          href={{ hash: "personal-features" }}
        >
          <span>Explore My World</span>
          <Icon name="20-arrow-down" />
        </Link>
      </div>
    </section>
  );
};
