import { Hero } from "@/components/Hero";
import { profile } from "@/data/profile";
import { Metadata } from "next";

export const metadata = {
  title: "Mateusz Wlekliński",
  description: "Mateusz Wlekliński's personal website",
  keywords: "Mateusz Wlekliński, Wlekliński, Mateusz, portfolio, projects",
};

export default async function Home() {
  const { firstName, lastName, bio, picture, title } = profile;
  return (
    <div className="h-full w-screen py-10">
      <Hero
        image={picture}
        details={{
          title,
          name: `${firstName} ${lastName}`,
          bio,
        }}
      />
    </div>
  );
}
