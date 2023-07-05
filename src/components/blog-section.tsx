import React from "react";
import Section from "./ui/section";
import type { Post } from "@/types";
import { urlFor } from "@/lib/sanity-client";
import Image from "next/image";
import PostContent from './ui/post-content';

const BlogSection = ({ posts }: { posts: Post[] }) => {

  return (
    <Section title="Our Blog" href="/blog">
      {posts.map((post) => (
        <div key={post._id}>
          <h3>{post.title}</h3>
          <Image
            src={urlFor(post.cover).width(500).height(300).url()}
            alt={post.cover.caption}
            width={500}
            height={300}
          />
          <PostContent content={post.body} />
        </div>
      ))}
    </Section>
  );
};

export default BlogSection;
