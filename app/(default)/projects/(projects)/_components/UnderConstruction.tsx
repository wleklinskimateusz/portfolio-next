import Image from "next/image";
import Link from "next/link";
import { navigationConfig } from "@/config/navigationConfig";
import { Button } from "@/components/ui/button";

export const UnderConstruction = ({ repo }: { repo: string }) => {
  return (
    <section className="flex flex-col items-center gap-8">
      <h2>The website is under construction</h2>
      <Image
        src="/images/under-construction.png"
        alt="the construction worker plans a building"
        width={256}
        height={256}
      />
      <p>
        In the meantime feel free to check out the repo on Github or my Tetrisly
        Page
      </p>
      <div className="flex gap-8">
        <Link href={repo}>
          <Button>Github Repo</Button>
        </Link>
        <Link href={navigationConfig.project.tetrisly}>
          <Button variant="secondary">Tetrisly</Button>
        </Link>
      </div>
    </section>
  );
};
