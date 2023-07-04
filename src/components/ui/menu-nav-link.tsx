import React, { ReactNode } from "react";
import Link from "next/link";

type MenuNavLinkPropsType = {
  children: ReactNode;
  href: string;
};

const MenuNavLink = ({ children, href }: MenuNavLinkPropsType) => {
  return (
    <Link href={href} className="hover:text-blue-500 duration-150">
      {children}
    </Link>
  );
};

export default MenuNavLink;
