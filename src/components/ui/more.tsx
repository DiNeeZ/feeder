import Link from "next/link";
import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";

const More = ({ href }: { href: string }) => {
  return (
    <Link
      className="group/more text-blue-600 hover:text-blue-500 flex items-center gap-2 duration-150"
      href={href}
    >
      <span>More</span>
      <HiArrowNarrowRight className="group-hover/more:translate-x-2 duration-150" />
    </Link>
  );
};

export default More;
