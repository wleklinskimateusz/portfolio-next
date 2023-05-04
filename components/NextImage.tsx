import { StrapiImage } from "@/apiSchema/imageSchema";
import Image from "next/image";

type NextImageProps = {
  image: StrapiImage;
  width?: number;
  height?: number;
  className?: string;
};

export const NextImage = ({
  image: {
    data: {
      attributes: {
        width: orgWidth,
        height: orgHeight,
        alternativeText: alt,
        url: src,
      },
    },
  },
  width,
  height,
  className,
}: NextImageProps) => {
  const ratio = orgWidth / orgHeight;
  const finalWidth = width || orgWidth;
  const finalHeight = height || finalWidth / ratio;
  return (
    <Image
      className={className}
      src={src}
      alt={alt}
      width={finalWidth}
      height={finalHeight}
    />
  );
};
