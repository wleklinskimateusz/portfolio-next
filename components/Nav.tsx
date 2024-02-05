"use client";
import Link from "next/link";
import React, { ComponentProps, FC, useState } from "react";
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
  const [open, setOpen] = useState(false);
  const disabledLinks = ["Resume", "Projects", "Blog"];
  useCloseOnResize(() => setOpen(false));
  return (
    <nav
      className={twMerge(
        "fixed left-5 top-5 z-20 flex h-16 w-16 items-center justify-center rounded-full bg-primary px-5 text-primary-foreground shadow-lg transition-none duration-300 md:left-0 md:right-0 md:mx-auto md:h-10 md:w-fit",
        open &&
          "left-0 top-0 h-screen w-screen rounded-none p-0 text-primary transition-[width]",
      )}
    >
      <Burger
        className="flex md:hidden"
        open={open}
        toggleOpen={() => setOpen((prev) => !prev)}
      />
      <div
        className={twMerge(
          "hidden text-primary-foreground md:block",
          open &&
            "flex h-full w-full flex-col items-center justify-center bg-primary",
        )}
      >
        {items.map((item) => {
          const path = routeMap[item];
          const active = isActive(pathname, path);
          const isDisabled = disabledLinks.includes(item);
          return (
            <Link
              aria-disabled={isDisabled}
              key={item}
              href={path}
              onClick={(e) =>
                isDisabled ? e.preventDefault() : setOpen(false)
              }
              className={twMerge(
                "m-2 rounded px-2 py-1",
                isDisabled && "cursor-not-allowed opacity-50",
                active && " underline underline-offset-4",
              )}
            >
              {item}
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

function useCloseOnResize(close: () => void) {
  React.useEffect(() => {
    window.addEventListener("resize", close);
    return () => window.removeEventListener("resize", close);
  }, [close]);
}

const isActive = (current: string, path: string) => {
  if (current === path && path === "/") return true;
  return current.startsWith(path) && path !== "/";
};

const Burger = ({
  open,
  toggleOpen,
  className,
}: {
  open: boolean;
  toggleOpen: () => void;
  className?: string;
}) => {
  return (
    <button
      onClick={toggleOpen}
      className={twMerge(
        "z-30 flex  h-8 w-8 flex-col justify-around border-none bg-transparent p-0 focus:outline-none",
        open && "absolute left-12 top-10",
        className,
      )}
    >
      <div
        className={twMerge(
          "relative h-1 w-8 origin-[1px] rotate-0 rounded-lg bg-white transition-transform",
          open && "rotate-45",
        )}
      />
      <div
        className={twMerge(
          "relative h-1 w-8 origin-[1px] translate-x-0 rounded-lg bg-white opacity-100 transition-transform",
          open && "translate-x-5  opacity-0",
        )}
      />
      <div
        className={twMerge(
          "relative h-1 w-8 origin-[1px] rotate-0 rounded-lg bg-white transition-transform",
          open && "-rotate-45 ",
        )}
      />
    </button>
  );
};
