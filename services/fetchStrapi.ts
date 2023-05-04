import { ZodAny, ZodObject, ZodRawShape, ZodSchema, number, z } from "zod";
import { serverEnv } from "./serverEnv";
import qs from "qs";

type FetchStrapi<T> = {
  path: string;
  schema: ZodSchema<T>;
  query?: Record<string, unknown>;
};

const urlBuilder = (path: string, query?: Record<string, unknown>) =>
  query
    ? `${serverEnv.STRAPI_URL}${path}?${qs.stringify(query)}`
    : `${serverEnv.STRAPI_URL}${path}`;

export async function fetchStrapi<T>({ path, schema, query }: FetchStrapi<T>) {
  if (!path.startsWith("/")) throw new Error("Path must start with /");
  const url = urlBuilder(path, query);
  console.log("fetching", url);
  const res = await fetch(url);
  const data = await res.json();
  const result = z
    .object({
      data: z.object({
        id: z.number(),
        attributes: z.unknown(),
      }),
    })
    .parse(data);
  const extractedData = result.data.attributes;
  return schema.and(additionalAttributes).parse(extractedData);
}

const localeSchema = z.union([z.literal("en"), z.literal("pl")]);
type Locale = z.infer<typeof localeSchema>;

const additionalAttributes = z.object({
  locale: localeSchema.optional(),
  createdAt: z.string().datetime(),
  updatedAt: z.string().datetime(),
});
