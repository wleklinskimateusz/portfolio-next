import { ReactNode } from "react";

export const BoldSkill = ({ children }: { children: ReactNode }) => (
  <span className="font-bold text-primary">{children}</span>
);
