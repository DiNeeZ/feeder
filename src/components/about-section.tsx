import React from "react";

import Section from "./ui/section";
import ImageTextBlock from "./ui/image-text-block";

import { about } from "@/data";

const AboutSection = () => (
  <Section title="About Feeder" href="/about">
    <div className="flex flex-col gap-8">
      {about.slice(0, 3).map((item, index) => (
        <>
          <ImageTextBlock
            key={item.id}
            imageSrc={item.imageSrc}
            imageAlt={item.title}
            reverse={index % 2 === 0}
          >
            {item.content}
          </ImageTextBlock>
        </>
      ))}
    </div>
  </Section>
);

export default AboutSection;
