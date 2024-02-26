"use client";

import Image, { type ImageProps } from "next/image";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "../../../../components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselPrevious,
  CarouselNext,
  CarouselItem,
} from "../../../../components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

export const PersonalFeatures = () => {
  return (
    <section
      id="personal-features"
      aria-label="Personal Features"
      className="flex flex-col items-center gap-20 py-40"
    >
      <h2 className="font-serif text-3xl lg:text-4xl xl:text-5xl">
        A Glimpse Into My Tech Universe
      </h2>

      <Carousel
        opts={{ loop: true }}
        plugins={[
          Autoplay({
            delay: 4000,
          }),
        ]}
        className="w-full max-w-[70%]"
      >
        <CarouselContent>
          <TraitBox
            image={{
              src: "/images/innovative-thinker.png",
              alt: "futuristic view with a large green tree in the middle and the city in the background",
            }}
            title="Innovative Thinker"
            description="Constantly redefining boundaries and finding inventive solutions to complex challenges."
          />
          <TraitBox
            image={{
              src: "/images/web-development-enthusiast.png",
              alt: "man siting behind a desk in a glowing light",
            }}
            title="Web Development Enthusiast"
            description="Passionate about crafting seamless digital experiences and staying at the forefront of web technologies."
          />
          <TraitBox
            image={{
              src: "/images/creative-problem-solver.png",
              alt: "man sitting behind a desk in a colorful room",
            }}
            title="Creative Problem Solver"
            description="Approaching problems with a creative mindset, transforming obstacles into opportunities through innovative solutions."
          />
          <TraitBox
            image={{
              src: "/images/harmony-in-code.png",
              alt: "An image portaining piano keys as well as guitar, headphones and code in the background",
            }}
            title="Harmony in Code"
            description="Believing in clean, harmonic code, I blend programming precision with musical artistry, ensuring each line complements the codebase perfectly."
          />
          <TraitBox
            image={{
              src: "/images/collaborative-tech-architect.png",
              alt: "Dynamic office scene depicting a tech architect leading diverse teams in collaboration, surrounded by digital and physical project elements, highlighting teamwork and innovation.",
            }}
            title="Collaborative Tech Architect"
            description="I thrive in teamwork, valuing diverse opinions and ideas to build innovative web solutions that reflect collective genius."
          />
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  );
};

type TraitBoxProps = {
  image: Pick<ImageProps, "src" | "alt">;
  title: string;
  description: string;
};

const TraitBox = ({
  image: { alt, src },
  title,
  description,
}: TraitBoxProps) => (
  <CarouselItem className="basis-[calc(100%-16px)] lg:basis-[calc(50%-16px)] xl:basis-[calc(33%-16px)]">
    <Card className="overflow-hidden">
      <CardHeader className="h-40">
        <CardTitle className="font-serif text-lg">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="relative aspect-[4/3]">
        <Image fill src={src} alt={alt} />
      </CardContent>
    </Card>
  </CarouselItem>
);
