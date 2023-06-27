import { Hero } from "@/components/Hero";
import { profile } from "@/data/profile";

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
