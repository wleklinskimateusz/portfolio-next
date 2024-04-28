import { navigationConfig } from "@/config/navigationConfig";
import { RoleElement } from "../../_components/RoleElement";

export const MyRole = () => (
  <section className="text-center sm:text-left">
    <h2 className="lg:text-center">What was my role?</h2>
    <ul className="mx-auto grid max-w-sm grid-cols-1 grid-rows-2 gap-8 py-4 sm:mx-0 md:max-w-full md:grid-cols-2 2xl:grid-cols-4 2xl:grid-rows-1">
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
);
