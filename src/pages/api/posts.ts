// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

import { client } from "../../lib/sanity-client";

type Data = {
  name: string;
};

export default function posts(req: NextApiRequest, res: NextApiResponse<Data>) {
  res.status(200).json({ name: "John Doe" });
}

export async function loadPosts(start: number, end: number) {
  const query = `{
    "posts": *[_type == 'post'],
    "total": count(*[_type == 'post'])
  }`;
  const { posts, total } = await client.fetch(query);

  return { posts, total };
}
