import { navigationConfig } from "@/config/navigationConfig";
import { Feature } from "../../_components/Feature";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const WhatIsTetrisly = () => (
  <section className="grid grid-cols-3 gap-x-16 gap-y-4 text-center sm:text-left">
    <h2 className="col-span-3 lg:text-center">
      A <span className="font-bold text-primary">customizable</span> design
      system
    </h2>
    <div className="col-span-3 flex flex-col gap-8 lg:col-span-2">
      <p>
        Tetrisly is a product I have worked on as a TypeScript developer at
        VirtusLab. It&apos;s a tool that simplifies the process of creating
        design systems for web applications. It consist of a set of key
        elements:
      </p>
      <ul className="grid grid-cols-2 gap-8">
        <Feature
          title="Token System"
          actions={[
            {
              label: "Tetrisly Tokens",
              href: navigationConfig.tetrisly.docs.tokens,
            },
          ]}
        >
          A way of connecting colors, typography, spacing into variables to use
          in Figma and React
        </Feature>
        <Feature
          title="Figma File"
          actions={[
            {
              label: "Tetrisly for Figma",
              href: navigationConfig.tetrisly.website.figma,
            },
          ]}
        >
          A file containing all the components for designers to customize and
          use in their designs
        </Feature>
        <Feature
          title="React Library"
          actions={[
            {
              label: "Tetrisly for React",
              href: navigationConfig.tetrisly.website.react,
            },
            {
              label: "Github Repo",
              href: navigationConfig.tetrisly.react.github,
            },
          ]}
        >
          A library of components integrated with their figma counterparts.
        </Feature>
        <Feature
          title="Figma Plugin"
          actions={[
            {
              label: "Figma Community: Plugin",
              href: navigationConfig.tetrisly.plugin,
            },
          ]}
        >
          A plugin enabling designers to customize the tokens to their needs and
          to keep the integration with the React library
        </Feature>
      </ul>
    </div>
    <WhatIsDesignSystem className="col-span-3 mx-auto h-fit lg:col-span-1" />
  </section>
);

const WhatIsDesignSystem = ({ className }: { className?: string }) => (
  <Card className={cn("max-w-96", className)}>
    <CardHeader>
      <CardTitle>What is a design system?</CardTitle>
    </CardHeader>
    <CardContent>
      If you don&apos;t know what a design system is, check out following
      resources
    </CardContent>
    <CardFooter className="flex-col items-center px-2 md:items-start">
      <Link href="https://www.figma.com/blog/design-systems-101-what-is-a-design-system/">
        <Button variant="link">Design Systems 101: Figma</Button>
      </Link>
      <Link href={navigationConfig.tetrisly.docs.gettingStarted}>
        <Button variant="link">Tetrisly Documentation</Button>
      </Link>
    </CardFooter>
  </Card>
);
