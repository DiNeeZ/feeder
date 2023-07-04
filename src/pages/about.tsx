import React from "react";
import Layout from "@/components/layout";
import PageTitle from "@/components/ui/page-title";
import { about } from "@/data";
import ImageTextBlock from "@/components/ui/image-text-block";

const About = () => {
  return (
    <Layout>
      <div className="container mx-auto pt-12 mb-24 border-t border-blue-400">
        <PageTitle>About</PageTitle>
        {about.map((item, index) => (
          <div key={item.id} className='px-24'>
            <ImageTextBlock
              imageSrc={item.imageSrc}
              imageAlt={item.title}
              reverse={index % 2 === 0}
            >
              {item.content}
            </ImageTextBlock>
            {index !== about.length - 1 && (
              <div className="w-full h-[1px] my-8 bg-blue-400" />
            )}
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default About;
