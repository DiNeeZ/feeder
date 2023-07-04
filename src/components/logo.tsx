import React from "react";
import Link from "next/link";
import LogoIcon from "@/../public/images/logo.svg";

const Logo = ({ size }: { size?: number }) => {
  return (
    <Link className="group/logo" href="/">
      <LogoIcon
        width={size ?? 96}
        height={size ?? 96}
        className="fill-blue-400 group-hover/logo:fill-blue-500 duration-150"
      />
    </Link>
  );
};

export default Logo;
