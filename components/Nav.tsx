"use client";
import Link from "next/link";
import React, { FC } from "react";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";

const routeMap = {
  Home: "/",
  Resume: "/resume",
  Projects: "/projects",
  Blog: "/blogs",
  Contact: "/contact",
};

const items = Object.keys(routeMap) as (keyof typeof routeMap)[];

export const Nav: FC = () => {
  const pathname = usePathname();
  const disabledLinks = ["Resume", "Projects", "Blog"];
  return (
    <nav className="fixed shadow-lg text-primary-foreground px-5 z-20 top-5 bg-primary rounded-full mx-auto w-fit left-0 right-0 flex justify-center">
      {items.map((item) => {
        const path = routeMap[item];
        const active = isActive(pathname, path);
        const isDisabled = disabledLinks.includes(item);
        return (
          <Link
            aria-disabled={isDisabled}
            key={item}
            href={path}
            onClick={(e) => isDisabled && e.preventDefault()}
            className={twMerge(
              "px-2 py-1 m-2 rounded",
              isDisabled && "opacity-50 cursor-not-allowed",
              active && "underline underline-offset-4"
            )}
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
