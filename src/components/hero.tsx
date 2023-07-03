import React from "react";
import Logo from "./logo";

const Hero = () => {
  return (
    <section>
      <div className="container mx-auto min-h-screen flex pt-56 justify-start">
        <div className="h-full flex gap-24">
          <Logo />
          <div>
            <h1 className="font-bold text-9xl uppercase mb-16 text-cinnabar">
              Feeder
            </h1>
            <p className="ml-16 text-4xl text-caput-mortuum">
              Dive in a digital entrepreneurship
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
