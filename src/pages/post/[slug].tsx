import React, { useEffect, useState } from "react";
import { GetServerSideProps } from "next";

import Layout from "@/components/layout";
import PageTitle from "@/components/ui/page-title";
import { Post, PostBodyImage } from "@/types";
import { loadPostBySlug } from "../api/posts";
import { PortableText, PortableTextComponents } from "@portabletext/react";
import Image from "next/image";
import { urlForImage } from '../../../sanity/lib/image';


// Barebones lazy-loaded image component
const SampleImageComponent = ({ value, index }: { value: PostBodyImage, index: number }) => {
  const imagePosition = index % 2 === 0 ? 'start' : 'end'

  return (
    <div className={`flex justify-${imagePosition} mb-8`}>
      <Image
        className="w-full md:w-2/3 max-h-96 object-cover rounded-2xl"
        src={urlForImage(value).url()}
        alt={value.subpicDescr}
        width={900}
        height={384}
      />
    </div>
  );
};

const components: PortableTextComponents = {
  types: { image: SampleImageComponent },
  block: {
    h3: ({ children }) => (
      <h3 className="text-2xl text-blue-950 font-semibold mb-8">{children}</h3>
    ),
    normal: ({ children }) => <p className="mb-8">{children}</p>,
  },
};

const Post = ({ post }: { post: Post }) => {
  return (
    <Layout>
      <div className="container mx-auto pt-12 mb-24 border-t border-blue-400">
        <div className="mb-12">
          <div className="mb-12">
            <PageTitle>{post.title}</PageTitle>
          </div>
          <Image
            src={urlForImage(post.cover).width(1000).height(400).url()}
            width={1000}
            height={400}
            alt={post.title}
            className="w-full rounded shadow"
          />
        </div>
        <PortableText value={post.body} components={components} />
      </div>
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps<{
  post: Post;
}> = async (context) => {
  // get post slug from the url
  const slug = context.params?.slug as string;

  // Fetch data
  const [post] = await loadPostBySlug(slug);

  // If the product is not found, return notFound - 404 page
  if (post === null) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      post,
    },
  };
};

export default Post;
