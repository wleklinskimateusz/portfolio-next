"use client";
import Link from "next/link";
import React, { FC } from "react";
import { usePathname } from "next/navigation";
import clsx from "clsx";

const routeMap = {
  Home: "/",
  // Projects: "/projects",
  // Blog: "/blogs",
  Contact: "/contact",
};

const items = Object.keys(routeMap) as (keyof typeof routeMap)[];

export const Nav: FC = () => {
  const pathname = usePathname();
  return (
    <nav className="fixed top-0 backdrop-blur left-0 right-0 flex justify-center">
      {items.map((item) => {
        const path = routeMap[item];
        const active = isActive(pathname, path);
        return (
          <Link
            key={item}
            href={path}
            className={clsx("px-2 py-1 m-2 rounded", {
              "underline underline-offset-4": active,
            })}
          >
            {item}
          </Link>
        );
      })}
    </nav>
  );
};

const isActive = (current: string, path: string) => {
  if (current === path && path === "/") return true;
  return current.startsWith(path) && path !== "/";
};
