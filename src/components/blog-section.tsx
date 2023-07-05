import React from "react";
import Section from "./ui/section";
import type { Post } from "@/types";
import { urlFor } from "@/lib/sanity-client";
import Image from "next/image";

const BlogSection = ({ posts }: { posts: Post[] }) => {
  console.log(posts);
  return (
    <Section title="Our Blog" href="/blog">
      {posts.map((post) => (
        <div key={post._id}>
          <h3>{post.title}</h3>
          <Image
            src={urlFor(post.cover).url()}
            alt={post.cover.caption}
            width={40}
            height={40}
          />
        </div>
      ))}
    </Section>
  );
};

export default BlogSection;
