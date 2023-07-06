import React from "react";
import Section from "./ui/section";
import type { Post } from "@/types";

import PostCard from "./ui/post-card";

const BlogSection = ({ posts }: { posts: Post[] }) => {
  return (
    <Section title="Our Blog" href="/blog">
      <div className=" grid lg:grid-cols-2 gap-6 2xl:gap-12">
        {posts.map((post) => (
          <PostCard key={post._id} post={post} />
        ))}
      </div>
    </Section>
  );
};

export default BlogSection;
