import { Technologies } from "./_components/Technologies";
import { HeroSection } from "./_components/HeroSection";

import { PersonalFeatures } from "./_components/PersonalFeatures";

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
