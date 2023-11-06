"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export const Breadcrumbs = () => {
  const pathname = usePathname();
  const paths = pathname.split("/").filter((path) => path !== "");

  const links = paths.map((path, index) => {
    return {
      name: path,
      path: paths.slice(0, index + 1).join("/"),
    };
  });
  if (paths.length < 2) return null;
  return (
    <div className="ml-10 overflow-x-visible text-sm">
      <ul>
        {links.slice(0, -1).map(({ name, path }) => (
          <li key={path}>
            <Link href={path}>{name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
