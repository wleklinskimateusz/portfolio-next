import { Hero } from "@/components/Hero";
import { prisma } from "@/services/prisma";

export default async function Home() {
  const profile = await prisma.profile.findFirst();
  if (!profile) throw new Error("No profile found");
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
