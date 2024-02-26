export const navigationConfig = {
  Home: "/",
  Resume: "/resume",
  Projects: "/projects",
  Blog: "/blogs",
  Contact: "/contact",
} as const satisfies Record<string, string>;
