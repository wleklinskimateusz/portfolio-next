import { z } from "zod";

const envSchema = z.object({
  STRAPI_URL: z.string(),
});

export const serverEnv = envSchema.parse(process.env);
