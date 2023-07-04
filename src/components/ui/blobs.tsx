import React from "react";
import Image from "next/image";
import BlueBlob from "@/../public/images/blob-1.svg";
import WhiteBlob from "@/../public/images/blob-2.svg";

const Blobs = () => {
  return (
    <div className="relative h-full flex items-center justify-center">
      <BlueBlob className="absolute w-full h-full  translate-x-12 translate-y-6" />
      <WhiteBlob className="absolute w-full h-full" />
      <Image
        width={406}
        height={350}
        src="/images/person.png"
        alt="person with computer"
        className="relative z-10 w-1/2 2xl:w-1/3"
      />
    </div>
  );
};

export default Blobs;
