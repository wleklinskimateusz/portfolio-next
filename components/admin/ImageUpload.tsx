import { OurFileRouter } from "@/app/api/uploadthing/core";
import { UploadButton } from "@uploadthing/react";
import Image from "next/image";
import React, { FC } from "react";

type ImageUploadProps = {
  onSuccess: (url: string | undefined) => void;
  image?: string;
};

export const ImageUpload: FC<ImageUploadProps> = ({ onSuccess, image }) => {
  return (
    <div className="form-control">
      {image && <Image src={image} width={250} height={250} alt="upload" />}
      <UploadButton<OurFileRouter>
        endpoint="imageUploader"
        onClientUploadComplete={(res) => onSuccess(res?.[0].fileUrl)}
        onUploadError={(error: Error) => {
          alert(`ERROR! ${error.message}`);
        }}
      />
    </div>
  );
};
