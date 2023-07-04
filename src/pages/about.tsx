import React from "react";
import Layout from "@/components/layout";
import SectionTitle from "@/components/ui/section-title";
import { about } from "@/data";
import ImageTextBlock from "@/components/ui/image-text-block";

const About = () => {
  return (
    <Layout>
      <div className="container mx-auto pt-12 mb-24 border-t border-blue-400">
        <SectionTitle>About</SectionTitle>
        {about.map((item, index) => (
          <>
            <ImageTextBlock
              key={item.id}
              imageSrc={item.imageSrc}
              imageAlt={item.title}
              reverse={index % 2 === 0}
            >
              {item.content}
            </ImageTextBlock>
            {index !== about.length - 1 && (
              <div className="w-full h-[1px] my-8 bg-blue-400" />
            )}
          </>
        ))}
      </div>
    </Layout>
  );
};

export default About;
