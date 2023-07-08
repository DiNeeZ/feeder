// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

import { client } from "../../../sanity/lib/client";

export type ResponseError = {
  message: string;
};

type Data = {
  name: string;
};

export default async function posts(
  req: NextApiRequest,
  res: NextApiResponse<Data | ResponseError>
) {
  const { start, end } = req.query;

  if (!start || !end) {
    return res.status(400).json({ message: "Realy bad" });
  }

  if (isNaN(+start) || isNaN(+end)) {
    return res.status(400).json({ message: "Params must be numbers" });
  }

  const { posts } = await loadPosts(+start, +end);

  res.status(200).json(posts);
}

export async function loadPosts(start: number, end: number) {
  const { posts, total } = await client.fetch(`{
    "posts": *[_type == 'post'] [${start}...${end}],
    "total": count(*[_type == 'post'])
  }`);

  return { posts, total };
}

export async function loadPostBySlug(slug: string) {
  const post = await client.fetch(
    `*[_type=="post" && slug.current == '${slug}']`
  );

  return post;
}
