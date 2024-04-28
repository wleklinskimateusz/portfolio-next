import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { Feature } from "../_components/Feature";

export default function TetrislyPage() {
  return (
    <div className="mx-auto flex w-full max-w-md flex-col gap-16 sm:max-w-lg md:max-w-2xl lg:max-w-4xl">
      <section className="flex flex-col items-center gap-8 rounded bg-slate-300 p-4">
        <Image
          src="/images/projects/tetrisly.svg"
          alt="Tetrisly Logo"
          width={100}
          height={100}
        />
        <h1 className="text-center">Tetrisly Design System</h1>
      </section>

      <section className="grid grid-cols-3 gap-x-16 gap-y-4 text-center sm:text-left">
        <h2 className="col-span-3  lg:text-center">
          Tetrisly is a{" "}
          <span className="font-bold text-primary">
            customizable design system.
          </span>
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
                  href: "https://docs.tetrisly.com/foundations/overview/design-tokens",
                },
              ]}
            >
              A way of connecting colors, typography, spacing into variables to
              use in Figma and React
            </Feature>
            <Feature
              title="Figma File"
              actions={[
                {
                  label: "Tetrisly for Figma",
                  href: "https://tetrisly.com/products/figma",
                },
              ]}
            >
              A file containing all the components for designers to customize
              and use in their designs
            </Feature>
            <Feature
              title="React Library"
              actions={[
                {
                  label: "Tetrisly for React",
                  href: "https://tetrisly.com/products/react",
                },
                {
                  label: "Github Repo",
                  href: "https://github.com/VirtusLab/tetrisly-react",
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
                  href: "https://www.figma.com/community/plugin/1301902178949170574/tetrisly-plugin",
                },
              ]}
            >
              A plugin enabling designers to customize the tokens to their needs
              and to keep the integration with the React library
            </Feature>
          </ul>
        </div>
        <Card className="col-span-3 mx-auto h-fit max-w-96 lg:col-span-1">
          <CardHeader>
            <CardTitle>What is a design system?</CardTitle>
          </CardHeader>
          <CardContent>
            If you don&apos;t know what a design system is, check out following
            resources
          </CardContent>
          <CardFooter className="flex-col items-start px-2">
            <Link href="https://www.figma.com/blog/design-systems-101-what-is-a-design-system/">
              <Button variant="link">Design Systems 101: Figma</Button>
            </Link>
            <Link href="https://docs.tetrisly.com/getting-started/about">
              <Button variant="link">Tetrisly Documentation</Button>
            </Link>
          </CardFooter>
        </Card>
      </section>
      <section className="text-center sm:text-left">
        <h2 className="lg:text-center">Look what Tetrisly for React can do!</h2>
        <iframe
          className="my-8 hidden h-[700px] w-full rounded md:block"
          src="https://wleklinskimateusz.github.io/mini-demo-tet/"
        ></iframe>
        <div className="text-lg">
          For full demo visit:{" "}
          <Link href="https://demo.tetrisly.com">
            <Button size="lg" className="px-0" variant="link">
              demo.tetrisly.com
            </Button>
          </Link>
        </div>
      </section>
      <section className="text-center sm:text-left">
        <h2 className="lg:text-center">What was my role?</h2>
        <p>
          During my time in a team I contributed in several ways. Among them:
        </p>
        <ul>
          <li>Creating and maintaining `tetrisly-icons` package</li>
        </ul>
      </section>
    </div>
  );
}
