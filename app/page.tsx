import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Technologies } from "../components/Technologies";
import { HeroSection } from "@/components/home/HeroSection";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image, { ImageProps } from "next/image";
import { PersonalFeatures } from "@/components/home/PersonalFeatures";

export const metadata = {
  title: "Mateusz Wlekliński",
  description: "Mateusz Wlekliński's personal website",
  keywords: "Mateusz Wlekliński, Wlekliński, Mateusz, portfolio, projects",
};

export default async function Home() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <PersonalFeatures />
      <Technologies />
    </div>
  );
}
