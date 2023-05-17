import React, { FC, PropsWithChildren } from "react";
import { UserButton } from "@clerk/nextjs";

const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div>
      <UserButton />
      {children}
    </div>
  );
};

export default Layout;
