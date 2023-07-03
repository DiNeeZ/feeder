import React, { ReactNode } from "react";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className={`${inter.className}`}>
      <header>header</header>
      <main>{children}</main>
      <footer>footer</footer>
    </div>
  );
};

export default Layout;
