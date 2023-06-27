import { checkIndexValue } from "@/services/checkIndex";
import { FindIndex } from "@/types/FindIndex";
import { z } from "zod";

type Blog = {
  title: string;
  description: string;
  image?: string;
  link: string;
};

export const blogs = [
  {
    title:
      "Style Wars: Tailwind vs. CSS-in-JS in Design Systems Implementation",
    description:
      "Tailwind or CSS-in-JS? Find out which CSS library works better with the Design System in Figma and what is Tetrisly Design System.",
    image:
      "https://miro.medium.com/v2/resize:fit:4800/format:webp/1*2oFASxL64B9duP9pOllJeA.png",
    link: "https://medium.com/tetrisly/style-wars-tailwind-vs-css-in-js-in-design-systems-implementation-de6015ee2695",
  },
] as const satisfies readonly Blog[];

export type BlogIndex = FindIndex<typeof blogs>;

export const blogIndexSchema = z.custom<BlogIndex>((value) =>
  checkIndexValue(value, blogs)
);
