"use client";
import Link from "next/link";
import React, { FC } from "react";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import SwitchTheme from "./SwitchTheme";

const routeMap = {
  Home: "/",
  Projects: "/projects",
  Contact: "/contact",
};
type NavProps = {
  items: (keyof typeof routeMap)[];
};

export const Nav: FC<NavProps> = ({ items }) => {
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
              "tab-active": pathname === path,
            })}
          >
            {item}
          </Link>
        );
      })}
    </nav>
  );
};
