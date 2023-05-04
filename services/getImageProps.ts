import { imageSchema } from "@/apiSchema/imageSchema";
import { z } from "zod";

export const getImageProps = ({
  data: {
    attributes: { url: src, alternativeText: alt },
  },
}: z.infer<typeof imageSchema>) => ({ src, alt } as const);
