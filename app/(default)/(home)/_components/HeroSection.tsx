import Link from "next/link";
import { Icon } from "@virtuslab/tetrisly-icons";
import { Button } from "@/components/ui/button";

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
          <div className="text-md text-gray-300 lg:text-lg xl:text-xl 2xl:text-2xl">
            Building and maintaining software solutions that help you achieve
            your goals.
          </div>
          <Link href={{ hash: "personal-features" }}>
            <Button size="lg">
              <span>Explore My World</span>
              <Icon name="20-arrow-down" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};
