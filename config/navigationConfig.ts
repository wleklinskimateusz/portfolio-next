import { LinkProps } from "next/link";

export const navigationConfig = {
  Home: "/#hero",
  Projects: "/#projects",
  Contact: "/contact",
} as const satisfies Record<string, LinkProps["href"]>;
