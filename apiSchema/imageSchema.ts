import { z } from "zod";

const format = z.object({
  ext: z.string(),
  url: z.string().url(),
  hash: z.string(),
  mime: z.string(),
  name: z.string(),
  size: z.number(),
  width: z.number(),
  height: z.number(),
  provider_metadata: z.unknown(),
});

export const imageSchema = z.object({
  data: z.object({
    id: z.number(),
    attributes: z.object({
      ...format.shape,
      alternativeText: z.string(),
      formats: z.record(
        z.union([
          z.literal("thumbnail"),
          z.literal("small"),
          z.literal("medium"),
          z.literal("large"),
        ]),
        format
      ),
      previewUrl: z.string().url().nullable(),
      provider: z.string(),
      createdAt: z.string().datetime(),
      updatedAt: z.string().datetime(),
    }),
  }),
});
