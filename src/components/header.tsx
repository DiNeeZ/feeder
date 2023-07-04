import React from "react";
import Logo from "./logo";

import Link from "next/link";
import NavMenu from './ui/menu';

import { Teko } from "next/font/google";

const teko = Teko({
  subsets: ["latin"],
  weight: ["400"],
});

const Header = () => {
  return (
    <header className='px-12'>
      <div className="container mx-auto py-6">
        <nav className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Logo size={40} />
            <Link href="/" className={`${teko.className} text-4xl`}>
              Feeder
            </Link>
          </div>
          <NavMenu />
        </nav>
      </div>
    </header>
  );
};

export default Header;
