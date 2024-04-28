import { cn } from "@/lib/utils";
import Image, { ImageProps } from "next/image";

type HeroProps = {
  className?: string;
  logo: ImageProps["src"];
  title: string;
};
export const Hero = ({ title, logo, className }: HeroProps) => {
  return (
    <section
      className={cn(
        "flex flex-col items-center gap-8 rounded  px-4 py-8",
        className,
      )}
    >
      <Image src={logo} alt={`${title} Logo`} width={100} height={100} />
      <h1 className="text-center">{title}</h1>
    </section>
  );
};
