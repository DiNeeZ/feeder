// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

import { client, postsQuery, postBySlugQuery } from "../../lib/sanity-client";

type Data = {
  name: string;
};

export default function posts(req: NextApiRequest, res: NextApiResponse<Data>) {
  res.status(200).json({ name: "John Doe" });
}

export async function loadPosts(start: number, end: number) {
  const { posts, total } = await client.fetch(postsQuery);

  return { posts, total };
}

export async function loadPostBySlug(slug: string) {
  const post = await client.fetch(postBySlugQuery(slug));

  return post;
}
