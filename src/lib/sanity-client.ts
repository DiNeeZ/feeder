import { createClient, type ClientConfig } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const config: ClientConfig = {
  projectId: "tpbdh8z0",
  dataset: "production",
  useCdn: true,
  apiVersion: "2023-07-05",
  token: process.env.SANITY_SECRET_TOKEN,
};

export const client = createClient(config);

const builder = imageUrlBuilder(client);

export const urlFor = (source: any) => builder.image(source);
