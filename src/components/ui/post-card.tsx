import { urlForImage } from '../../../sanity/lib/image';
import React from "react";
import type { Post } from "@/types";
import Image from "next/image";
import ReadMore from "./read-more";

const PostCard = ({ post }: { post: Post }) => {
  return (
    <article className="border flex flex-col rounded-lg overflow-hidden shadow-lg">
      <Image
        src={urlForImage(post.cover).width(500).height(300).url()}
        alt={post.cover.caption}
        width={500}
        height={300}
        className="w-full"
      />
      <div className="p-8 grow flex flex-col gap-4 justify-between items-start">
        <div>
          <h3 className="text-xl font-bold mb-4">{post.title}</h3>
          <p className="line-clamp-3">{post.description}</p>
        </div>
        <ReadMore href={`/post/${post.slug.current}`} />
      </div>
    </article>
  );
};

export default PostCard;
