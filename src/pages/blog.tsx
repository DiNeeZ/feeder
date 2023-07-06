import React, { useState } from "react";
import Layout from "@/components/layout";
import PageTitle from "@/components/ui/page-title";
import { GetServerSideProps } from "next";
import { loadPosts } from "./api/posts";
import { Post } from "@/types";
import PostCard from "@/components/ui/post-card";

interface PostProps {
  posts: Post[];
  total: number;
}

const Blog = ({ posts, total }: PostProps) => {
  const [blogPosts, setBlogPosts] = useState(posts);

  return (
    <Layout>
      <div className="container mx-auto pt-12 mb-24 border-t border-blue-400">
        <PageTitle>Blog</PageTitle>
        <div className="mt-12 grid lg:grid-cols-2 gap-6 2xl:gap-12">
          {blogPosts.map((post) => (
            <PostCard key={post._id} post={post} />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps<{
  posts: Post[];
}> = async () => {
  const { posts, total } = await loadPosts(0, 4);

  // If the posts is not found, return notFound - 404 page
  if (posts === null) {
    return {
      notFound: true,
    };
  }

  // Return the product as props
  return {
    props: {
      posts,
      total,
    },
  };
};

export default Blog;
