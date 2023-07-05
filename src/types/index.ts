import { ImageAsset } from "@sanity/types";

export type Post = {
  _id: string;
  cover: {
    asset: ImageAsset;
    caption: string;
  };
  title: string;
  slug: string;
};
