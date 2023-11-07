import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://www.mateuszwleklinski.me/",
      lastModified: new Date(),
      priority: 1,
    },
    {
      url: "https://www.mateuszwleklinski.me/contact",
      lastModified: new Date(),
      priority: 0.8,
    },
  ];
}
