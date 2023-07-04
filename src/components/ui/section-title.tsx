import React, { ReactNode } from "react";
import { Teko } from "next/font/google";

const teko = Teko({
  subsets: ["latin"],
  weight: ["700"],
});

const SectionTitle = ({ children }: { children: ReactNode }) => {
  return (
    <div className={`${teko.className} relative`}>
      <h2 className="text-5xl drop-shadow-md text-blue-950 font-bold tracking-wide">
        {children}
      </h2>
      <div className="absolute bg-blue-400 w-full bottom-0 left-6 h-1/2 opacity-25 -z-10" />
    </div>
  );
};

export default SectionTitle;