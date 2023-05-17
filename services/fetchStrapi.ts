import { ZodAny, ZodObject, ZodRawShape, ZodSchema, number, z } from "zod";
import { serverEnv } from "./serverEnv";
import qs from "qs";

type FetchStrapi<T> = {
  path: string;
  schema: ZodSchema<T>;
  query?: Record<string, unknown>;
  tag?: string;
};

const urlBuilder = (path: string, query?: Record<string, unknown>) =>
  query
    ? `${serverEnv.STRAPI_URL}${path}?${qs.stringify(query)}`
    : `${serverEnv.STRAPI_URL}${path}`;

export async function fetchStrapi<T>({
  path,
  schema,
  query,
  tag,
}: FetchStrapi<T>) {
  if (!path.startsWith("/")) throw new Error("Path must start with /");
  const url = urlBuilder(path, query);
  const res = await fetch(url, {
    next: { tags: tag ? [tag, "strapi"] : ["strapi"] },
  });
  const data = await res.json();
  const result = z
    .object({
      data: z.object({
        id: z.number(),
        attributes: z.record(z.string(), z.unknown()),
      }),
    })
    .parse(data);
  const extractedData = { ...result.data.attributes, id: result.data.id };
  return schema.and(additionalAttributes).parse(extractedData);
}

export async function fetchManyStrapi<T>({
  path,
  schema,
  query,
  tag,
}: FetchStrapi<T>) {
  if (!path.startsWith("/")) throw new Error("Path must start with /");
  const url = urlBuilder(path, query);
  const res = await fetch(url, {
    next: { tags: tag ? [tag, "strapi"] : ["strapi"] },
  });
  const data = await res.json();
  const result = z
    .object({
      data: z.array(
        z.object({
          id: z.number(),
          attributes: z.record(z.unknown()),
        })
      ),
    })
    .parse(data);
  const extractedData = result.data.map(({ id, attributes }) => ({
    ...attributes,
    id,
  }));
  return z.array(schema.and(additionalAttributes)).parse(extractedData);
}

const localeSchema = z.union([z.literal("en"), z.literal("pl")]);
type Locale = z.infer<typeof localeSchema>;

const additionalAttributes = z.object({
  id: z.number(),
  locale: localeSchema.optional(),
  createdAt: z.string().datetime(),
  updatedAt: z.string().datetime(),
});
