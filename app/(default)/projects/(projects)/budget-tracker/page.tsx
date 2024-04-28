import { Button } from "@/components/ui/button";
import { navigationConfig } from "@/config/navigationConfig";
import Image from "next/image";
import Link from "next/link";
import { UnderConstruction } from "../_components/UnderConstruction";
import { Hero } from "../_components/Hero";

export default function BudgetTracketPage() {
  return (
    <>
      <Hero
        className="bg-blue-100"
        title="Budget Tracker"
        logo={navigationConfig.budgetTracker.logo}
      />
      <UnderConstruction repo={navigationConfig.budgetTracker.repo} />
    </>
  );
}
