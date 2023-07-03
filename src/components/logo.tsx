import React from "react";
import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/">
      <Image src={`./logo.svg`} alt="logo" width={40} height={40} />
    </Link>
  );
};

export default Logo;
