import React from "react";
import More from "./ui/more";
import SectionTitle from "./ui/section-title";

const BlogSection = () => {
  return (
    <section className="mb-24">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <SectionTitle>Our Blog</SectionTitle>
          <More href="/blog" />
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
