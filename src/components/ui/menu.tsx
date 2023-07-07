import React from "react";
import MenuNavLink from "./menu-nav-link";

const Menu = () => {
  return (
    <ul className="hidden items-center gap-4 md:flex">
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
  );
};

export default Menu;
