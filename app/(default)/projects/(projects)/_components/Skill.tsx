import { cn } from "@/lib/utils";
import { ReactNode } from "react";

export const BoldSkill = ({ children }: { children: ReactNode }) => (
  <span className="font-bold text-primary">{children}</span>
);

export const Skill = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => (
  <li className={cn("max-w-sm border bg-white p-4 text-center", className)}>
    {children}
  </li>
);
