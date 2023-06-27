"use client";
import Link from "next/link";
import React, { FC } from "react";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import SwitchTheme from "./SwitchTheme";

const routeMap = {
  Home: "/",
  Projects: "/projects",
  Blog: "/blogs",
  Contact: "/contact",
};

const items = Object.keys(routeMap) as (keyof typeof routeMap)[];

export const Nav: FC = () => {
  const pathname = usePathname();
  return (
    <nav className="tabs flex justify-center">
      <SwitchTheme />
      {items.map((item) => {
        const path = routeMap[item];
        return (
          <Link
            key={item}
            href={path}
            className={clsx("tab-bordered tab", {
              "tab-active": isActive(pathname, path),
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
