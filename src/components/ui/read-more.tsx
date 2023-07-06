import Link from "next/link";
import React from "react";

const ReadMore = ({ href }: { href: string }) => {
  return (
    <Link
      className="bg-blue-400/50 rounded-md text-blue-950 px-4 py-2 font-semibold hover:bg-blue-400/40 duration-150"
      href={href}
    >
      Read More »
    </Link>
  );
};

export default ReadMore;
