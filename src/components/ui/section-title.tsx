import React, { ReactNode } from "react";
import { Teko } from "next/font/google";

const teko = Teko({
  subsets: ["latin"],
  weight: ["700"],
});

const SectionTitle = ({ children }: { children: ReactNode }) => {
  return (
    <div className={`${teko.className} relative max-w-[50%]`}>
      <h2 className="text-4xl drop-shadow-md text-blue-950 font-bold tracking-wide">
        {children}
      </h2>
      <div className="absolute bg-blue-400 w-full bottom-0 h-1/2 opacity-25 -z-10 ml-8 -skew-x-12" />
    </div>
  );
};

export default SectionTitle;
