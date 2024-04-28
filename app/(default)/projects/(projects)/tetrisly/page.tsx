import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import { Feature } from "../_components/Feature";
import { ScreenWrapper } from "@/app/(default)/_components/ScreenWrapper";
import { Hero } from "../_components/Hero";
import { navigationConfig } from "@/config/navigationConfig";
import { RoleElement } from "../_components/RoleElement";

export default function TetrislyPage() {
  return (
    <>
      <Hero
        title="Tetrisly Design System"
        logo="/images/projects/tetrisly.svg"
        className=" bg-[rgba(104,84,227,0.1)]"
      />

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
              A way of connecting colors, typography, spacing into variables to
              use in Figma and React
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
              A file containing all the components for designers to customize
              and use in their designs
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
            <Link href={navigationConfig.tetrisly.docs.gettingStarted}>
              <Button variant="link">Tetrisly Documentation</Button>
            </Link>
          </CardFooter>
        </Card>
      </section>
      <section className="text-center sm:text-left">
        <h2 className="lg:text-center">Something to play with</h2>
        <iframe
          className="my-8 hidden h-[700px] w-full md:block"
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
      <section className="text-center sm:text-left">
        <h2 className="lg:text-center">What was my role?</h2>
        <ul className="mx-auto grid max-w-sm grid-cols-1 grid-rows-2 gap-8 py-4 sm:mx-0 md:max-w-full md:grid-cols-2 2xl:grid-cols-4">
          <RoleElement
            title="React Library"
            responsibilities={[
              "implementing Figma components",
              "integrating with Figma",
              "maintaining the library",
              "writing tests",
              "creating documentation",
            ]}
            links={[
              {
                label: "Github Repo",
                href: navigationConfig.tetrisly.react.github,
              },
              {
                label: "Storybook",
                href: navigationConfig.tetrisly.react.storybook,
              },
              {
                label: "NPM Package",
                href: navigationConfig.tetrisly.react.npm,
              },
            ]}
          />

          <RoleElement
            title="Icon Library"
            responsibilities={[
              "creating a library of icons",
              "dynamically fetching icons from Figma",
              "maintaining the library",
              "writing tests",
              "publishing to npm",
            ]}
            links={[
              {
                label: "NPM Package",
                href: navigationConfig.tetrisly.icons.npm,
              },
            ]}
          />
          <RoleElement
            title="Marketing Page"
            responsibilities={[
              "creating and maintaing a landing page for the product",
              "SEO optimization",
              "CI/CD setup",
              "writing a technical blog post",
            ]}
            links={[
              {
                href: navigationConfig.tetrisly.website.home,
                label: "Home Page",
              },
              {
                href: navigationConfig.tetrisly.article,
                label: "My article on styling libraries",
              },
            ]}
          />
          <RoleElement
            title="Demo Application"
            responsibilities={[
              "creating a demo application",
              "deploying to github pages",
              "CI/CD setup",
            ]}
            links={[
              {
                href: navigationConfig.tetrisly.demo,
                label: "Live Demo",
              },
            ]}
          />
        </ul>
      </section>
      <section className="text-center sm:text-left">
        <h2 className="lg:text-center">
          What have I learned from working on Tetrisly?
        </h2>
      </section>
    </>
  );
}
