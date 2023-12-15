import { checkIndexValue } from "@/services/checkIndex";
import { FindIndex } from "@/types/FindIndex";
import { z } from "zod";

export const blogs = [
  "https://medium.com/tetrisly/style-wars-tailwind-vs-css-in-js-in-design-systems-implementation-de6015ee2695",
] as const satisfies readonly string[];

export type BlogIndex = FindIndex<typeof blogs>;

export const blogIndexSchema = z.custom<BlogIndex>((value) =>
  checkIndexValue(value, blogs)
);
