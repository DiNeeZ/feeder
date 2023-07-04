import React from "react";
import ImageTextBlock from "./ui/image-text-block";
import SectionTitle from "./ui/section-title";
import More from "./ui/more";

const AboutSection = () => {
  return (
    <section className="my-6">
      <div className="container mx-auto pt-8 px-40">
        <div className="flex items-center justify-between">
          <SectionTitle>About Feeder</SectionTitle>
          <More href="/about" />
        </div>

        <div className="flex flex-col gap-8 pt-12">
          <ImageTextBlock imageSrc="/images/ideas.svg" imageAlt="ideas" reverse>
            Welcome to Feeder! At Feeder, we are passionate about
            entrepreneurship and helping aspiring entrepreneurs navigate the
            exciting world of startups and business ventures. Whether
            you&apos;re a seasoned entrepreneur looking for inspiration or a
            beginner seeking guidance, this blog is designed to provide you with
            valuable insights, tips, and resources to fuel your entrepreneurial
            journey.
          </ImageTextBlock>

          <ImageTextBlock
            imageSrc="/images/expirience.svg"
            imageAlt="expirience"
          >
            Our team of experienced entrepreneurs, industry experts, and
            business enthusiasts is dedicated to sharing their knowledge and
            expertise with our readers. We believe that entrepreneurship is a
            mindset and a lifestyle, and we&apos;re here to support you every
            step of the way.
          </ImageTextBlock>

          <ImageTextBlock
            imageSrc="/images/usefull-content.svg"
            imageAlt="usefull content"
            reverse
          >
            Through our carefully curated content, you can expect to find
            practical advice on various aspects of entrepreneurship, including
            business planning, marketing strategies, leadership development,
            financial management, and much more. We also strive to highlight
            inspiring success stories and showcase innovative ideas and trends
            shaping the entrepreneurial landscape.
          </ImageTextBlock>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
