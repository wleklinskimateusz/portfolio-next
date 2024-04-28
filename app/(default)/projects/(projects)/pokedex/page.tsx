import { Button } from "@/components/ui/button";
import { navigationConfig } from "@/config/navigationConfig";
import Link from "next/link";
import Image from "next/image";
import { UnderConstruction } from "../_components/UnderConstruction";
import { Hero } from "../_components/Hero";

export default function PokedexPage() {
  return (
    <>
      <Hero
        title="Pokedex"
        className="bg-amber-100"
        logo={navigationConfig.pokedex.logo}
      />
      <UnderConstruction repo={navigationConfig.pokedex.repo} />
    </>
  );
}
