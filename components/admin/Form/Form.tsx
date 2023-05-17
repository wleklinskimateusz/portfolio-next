"use client";
import "@uploadthing/react/styles.css";

import { UploadButton } from "@uploadthing/react";
import { OurFileRouter } from "../../../app/api/uploadthing/core";
import {
  ComponentProps,
  FC,
  FormEventHandler,
  FormHTMLAttributes,
  useState,
} from "react";
import { ZodSchema } from "zod";

type FormProps = FormHTMLAttributes<HTMLFormElement>;

export const Form: FC<FormProps> = (props) => {
  return <form {...props} className="" />;
};
