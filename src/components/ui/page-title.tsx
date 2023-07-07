import React, { ReactNode } from "react";
import { Teko } from "next/font/google";

const teko = Teko({
  subsets: ["latin"],
  weight: ["700"],
});

const PageTitle = ({ children }: { children: ReactNode }) => {
  return (
    <div className={`${teko.className} relative inline-block`}>
      <h1 className="text-6xl drop-shadow-md text-blue-950 font-bold tracking-wide">
        {children}
      </h1>
      <div className="absolute bg-blue-400 w-[80%] md:w-full bottom-0 h-1/2 opacity-25 -z-10 lg:ml-12 -skew-x-12" />
    </div>
  );
};

export default PageTitle;
