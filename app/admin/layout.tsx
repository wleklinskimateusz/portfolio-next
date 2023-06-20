import React, { FC, PropsWithChildren } from "react";
import { UserButton } from "@clerk/nextjs";

const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="flex h-screen items-center justify-center">
      <div className=" absolute right-5 top-5">
        <UserButton />
      </div>
      {children}
    </div>
  );
};

export default Layout;
