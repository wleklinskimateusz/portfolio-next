import { Button } from "@/components/ui/button";
import { navigationConfig } from "@/config/navigationConfig";
import Link from "next/link";
import Image from "next/image";
import { UnderConstruction } from "../_components/UnderConstruction";

export default function PokedexPage() {
  return (
    <>
      <h1 className="text-center">Pokedex</h1>
      <UnderConstruction repo={navigationConfig.pokedex.repo} />
    </>
  );
}
