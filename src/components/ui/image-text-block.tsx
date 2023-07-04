import Image from "next/image";
import React, { ReactNode } from "react";

type ImageTextBlockPropsType = {
  children: ReactNode;
  imageSrc: string;
  imageAlt: string;
  reverse?: boolean;
};

const ImageTextBlock = ({
  children,
  imageSrc,
  imageAlt,
  reverse = false,
}: ImageTextBlockPropsType) => {
  return (
    <div
      className={`${
        reverse ? "flex-row-reverse" : "flex-row"
      } flex items-center  gap-8`}
    >
      <div className="flex basis-1/2 justify-center items-center">
        <Image width={350} height={350} src={imageSrc} alt={imageAlt} />
      </div>
      <p className="basis-1/2 text-xl tracking-wide">{children}</p>
    </div>
  );
};

export default ImageTextBlock;
