import React from "react";
import Header from "./Header";
import { ILayoutProps } from "@/types/props";

function Layout({ children }: ILayoutProps) {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
}

export default Layout;
