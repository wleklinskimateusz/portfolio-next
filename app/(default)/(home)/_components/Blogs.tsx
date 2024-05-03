import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

export const Blogs = () => {
  return (
    <section id="blog" className="flex flex-col gap-8 md:py-20">
      <h2 className="text-center">My Articles</h2>
      <ul className="grid grid-cols-1 gap-16 md:grid-cols-2">
        <BlogCard
          title="What TotalTypescript Pro Workshop taught me - Type Transformations"
          date={new Date(2024, 4, 2)}
          href="https://blog.wleklinski.eu/what-totaltypescript-pro-workshop-taught-me-part-1-type-transformation-d99049a6f586"
          tags={["TypeScript", "Type Transformations"]}
          img={{
            alt: "person sitting behind a desk coding",
            src: "https://miro.medium.com/v2/resize:fit:1400/format:webp/1*wUb8DyQ29Em2pi6hN_O0Mg.png",
          }}
        />
        <BlogCard
          title="Style Wars: Tailwind vs. CSS-in-JS in Design Systems Implementation"
          date={new Date(2023, 5, 5)}
          href="https://medium.com/p/de6015ee2695"
          tags={["CSS Library", "Design System"]}
          img={{
            src: "https://miro.medium.com/v2/resize:fit:1400/format:webp/1*2oFASxL64B9duP9pOllJeA.png",
            alt: "Style Wars Tetrisly.com",
          }}
        />
      </ul>
      <Link href="https://blog.wleklinski.eu">
        <Button variant="link">Check out my Medium.com profile</Button>
      </Link>
    </section>
  );
};

const BlogCard = ({
  title,
  date,
  tags,
  href,
  img,
}: {
  title: string;
  date: Date;
  tags: string[];
  href: string;
  img: {
    src: string;
    alt: string;
  };
}) => (
  <li>
    <Link href={href}>
      <Card className="flex h-full flex-col">
        <CardHeader>
          <CardTitle className="text-md lg:text-lg">{title}</CardTitle>
          <div className="flex gap-2">
            {tags.map((tag) => (
              <Badge variant="secondary" key={tag}>
                {tag}
              </Badge>
            ))}
          </div>
          <CardDescription className="pl-1 text-xs">
            {date.toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </CardDescription>
        </CardHeader>
        <CardContent className="flex items-center justify-center">
          <Image alt={img.alt} width={700} height={400} src={img.src} />
        </CardContent>
        <CardFooter className="grow items-end">
          <Button className="flex w-full gap-2">Read article</Button>
        </CardFooter>
      </Card>
    </Link>
  </li>
);
