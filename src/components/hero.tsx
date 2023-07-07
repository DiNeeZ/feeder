import React from "react";
import Logo from "./logo";
import Blobs from "./ui/blobs";
import { Teko } from "next/font/google";

const teko = Teko({
  subsets: ["latin"],
  weight: ["500"],
});

const Hero = () => {
  return (
    <section className="bg-blue-950 text-slate-50">
      <div className="relative container mx-auto flex gap-2 items-stretch justify-between">
        <div className="py-48 w-full md:w-auto">
          <div className="flex text-center md:text-left flex-col gap-12">
            <div className="flex items-center justify-center gap-8">
              <Logo size={128} />
              <h1
                className={`${teko.className} font-bold text-5xl sm:text-8xl lg:text-9xl uppercase`}
              >
                Feeder
              </h1>
            </div>
            <p className="md:ml-16 text-3xl">
              Dive in a digital entrepreneurship
            </p>
          </div>
        </div>
        <div className="md:basis-1/2">
          <Blobs />
        </div>
      </div>
    </section>
  );
};

export default Hero;
