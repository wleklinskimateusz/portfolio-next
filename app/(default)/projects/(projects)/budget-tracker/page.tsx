import { Button } from "@/components/ui/button";
import { navigationConfig } from "@/config/navigationConfig";
import Image from "next/image";
import Link from "next/link";
import { UnderConstruction } from "../_components/UnderConstruction";

export default function BudgetTracketPage() {
  return (
    <>
      <h1 className="text-center">Budget Tracket</h1>
      <UnderConstruction repo={navigationConfig.budgetTracker.repo} />
    </>
  );
}
