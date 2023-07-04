import React from "react";
import Logo from "./logo";

const Footer = () => {
  return (
    <footer className="bg-blue-950 text-slate-50 py-8">
      <div className="container mx-auto flex justify-between items-center">
        <Logo size={40} />
        <p className="font-thin grow text-center">
          &copy; 2023. All Rights recieved. Feeder, inc.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
