import { Button } from "@/components/ui/button";
import { navigationConfig } from "@/config/navigationConfig";
import Link from "next/link";

export const LiveDemo = () => (
  <section className="hidden text-left md:block">
    <h2 className="lg:text-center">Something to play with</h2>
    <iframe
      className="my-8 h-[700px] w-full"
      src={navigationConfig.tetrisly.miniDemo}
    ></iframe>
    <div className="text-lg">
      For full demo visit:{" "}
      <Link href={navigationConfig.tetrisly.demo}>
        <Button size="lg" className="px-0" variant="link">
          {navigationConfig.tetrisly.demo}
        </Button>
      </Link>
    </div>
  </section>
);
