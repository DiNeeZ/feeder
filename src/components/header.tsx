import React from "react";
import Logo from "./logo";
import MenuNavLink from "./ui/menu-nav-link";

import { Teko } from "next/font/google";
import Link from "next/link";

const teko = Teko({
  subsets: ["latin"],
  weight: ["400"],
});

const Header = () => {
  return (
    <header>
      <div className="container mx-auto py-6">
        <nav className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Logo size={40} />
            <Link href="/" className={`${teko.className} text-4xl`}>
              Feeder
            </Link>
          </div>

          <ul className="flex items-center gap-4">
            <li>
              <MenuNavLink href="/">Home</MenuNavLink>
            </li>
            <li>
              <MenuNavLink href="/blog">Blog</MenuNavLink>
            </li>
            <li>
              <MenuNavLink href="/about">About</MenuNavLink>
            </li>
            <li>
              <MenuNavLink href="/contacts">Contacts</MenuNavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
