import React, { ReactNode } from "react";
import { useRouter } from 'next/router';
import Link from "next/link";

type MenuNavLinkPropsType = {
  children: ReactNode;
  href: string;
};

const MenuNavLink = ({ children, href }: MenuNavLinkPropsType) => {
  const { pathname } = useRouter()

  if (pathname === href) console.log(href)

  return (
    <Link
      href={href}
      className={`hover:text-blue-500 duration-150 ralative 
      ${pathname === href && `relative hover:text-neutral-400 
      text-neutral-400 after:w-full after:h-[1px] after:bg-neutral-400
      after:absolute after:bottom-0 after:left-0`
        }`}>
      {children}
    </Link>
  );
};

export default MenuNavLink;
