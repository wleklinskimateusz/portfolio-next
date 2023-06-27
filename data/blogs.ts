import { checkIndexValue } from "@/services/checkIndex";
import { FindIndex } from "@/types/FindIndex";
import { z } from "zod";

type Blog = {
  title: string;
  description: string;
  image?: string;
  link: string;
};

export const blogs = [] as const satisfies readonly Blog[];

export type BlogIndex = FindIndex<typeof blogs>;

export const blogIndexSchema = z.custom<BlogIndex>((value) =>
  checkIndexValue(value, blogs)
);
