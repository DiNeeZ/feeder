import { GetServerSideProps } from "next";
import Layout from "@/components/layout";
import Hero from "@/components/hero";
import AboutSection from "@/components/about-section";
import BlogSection from "@/components/blog-section";
import ContactsSection from "@/components/contacts-section";
import { loadPosts } from "@/pages/api/posts";
import type { Post } from "@/types";

// Define a type for our props
interface PostProps {
  posts: Post[];
  total: number;
}

const Home = ({ posts }: PostProps) => {
  return (
    <Layout>
      <Hero />
      <AboutSection />
      <BlogSection posts={posts} />
      <ContactsSection />
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps<{
  posts: Post[];
}> = async () => {
  const { posts } = await loadPosts(0, 4);

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
    },
  };
};

export default Home;
