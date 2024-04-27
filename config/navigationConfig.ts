export const navigationConfig = {
  Home: "/",
  Projects: "/projects",
  Blog: "/blog",
  Contact: "/contact",
} as const satisfies Record<string, string>;
