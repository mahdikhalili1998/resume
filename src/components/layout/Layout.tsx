import React from "react";
import Header from "./Header";
import { ILayoutProps } from "@/types/props";

function Layout({ children, locale }: ILayoutProps) {
  return (
    <div>
      <Header locale={JSON.parse(JSON.stringify(locale))} />
      {children}
    </div>
  );
}

export default Layout;
