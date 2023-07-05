import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = createClient({
  projectId: "tpbdh8z0",
  dataset: "production",
  useCdn: true,
  apiVersion: "2023-07-05",
  token: process.env.SANITY_SECRET_TOKEN,
});

const builder = imageUrlBuilder(client);

export const urlFor = (source: any) => builder.image(source);
