import React, { useState } from "react";
import Layout from "@/components/layout";
import PageTitle from "@/components/ui/page-title";
import Spinner from "@/components/ui/spinner";
import { GetServerSideProps } from "next";
import { loadPosts } from "./api/posts";
import { Post } from "@/types";
import PostCard from "@/components/ui/post-card";

interface PostProps {
  posts: Post[];
  total: number;
}

const LOAD_MORE_STEP = 4;

const Blog = ({ posts, total }: PostProps) => {
  const [blogPosts, setBlogPosts] = useState(posts);
  const [loading, setLoading] = useState(false);
  const [loadedAmount, setLoadedAmount] = useState(LOAD_MORE_STEP);

  const loadMorePosts = async () => {
    setLoading(true);

    const nextStepAmount = loadedAmount + LOAD_MORE_STEP;
    const query = `/api/posts?start=${loadedAmount}&end=${nextStepAmount}`;

    try {
      const res = await fetch(query);
      const posts = await res.json();

      if (res.status !== 200) {
        throw new Error(posts.message);
      }
      setBlogPosts([...blogPosts, ...posts]);
      setLoadedAmount(nextStepAmount);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const isAddMoreButton = total > loadedAmount;

  return (
    <Layout>
      <div
        className="container mx-auto pt-12 mb-24 border-t border-blue-400 
          flex flex-col gap-16 items-start"
      >
        <PageTitle>Blog</PageTitle>
        <div className="grid lg:grid-cols-2 gap-6 2xl:gap-12">
          {blogPosts.map((post) => (
            <PostCard key={post._id} post={post} />
          ))}
        </div>
        {isAddMoreButton && (
          <button
            disabled={loading}
            className="bg-blue-950 min-w-[153px] text-xl text-slate-50 px-8 py-3 
        rounded shadow self-center disabled:bg-blue-950/90 flex items-center justify-center"
            onClick={loadMorePosts}
          >
            {loading ? <Spinner size={28} /> : <span>Load More</span>}
          </button>
        )}
      </div>
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps<{
  posts: Post[];
}> = async () => {
  const { posts, total } = await loadPosts(0, LOAD_MORE_STEP);

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
