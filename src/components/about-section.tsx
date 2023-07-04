import React from "react";
import ImageTextBlock from "./ui/image-text-block";
import SectionTitle from "./ui/section-title";
import More from "./ui/more";
import { about } from "@/data";

const AboutSection = () => {
  return (
    <section className="mt-6 mb-24">
      <div className="container mx-auto pt-8 px-40">
        <div className="flex items-center justify-between">
          <SectionTitle>About Feeder</SectionTitle>
          <More href="/about" />
        </div>

        <div className="flex flex-col gap-8 pt-12">
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
      </div>
    </section>
  );
};

export default AboutSection;
