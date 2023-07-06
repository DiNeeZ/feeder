import React, { ReactNode } from "react";

import Header from "./header";
import Footer from "./footer";

import { Mukta } from "next/font/google";

const mukta = Mukta({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className={`${mukta.className} flex flex-col min-h-screen`}>
      <Header />
      <main className="grow">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
