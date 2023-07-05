export type PostBodyText = {
  _type: "block";
  children: [
    {
      text: string;
    }
  ];
  listItem?: string;
};

export type PostBodyImage = {
  _type: "image";
  asset: {
    _ref: string;
    _type: string;
  };
  subpicDescr: string;
};

export type PostBody = (PostBodyText | PostBodyImage)[];

export type CoverImage = {
  asset: {
    _ref: string;
    _type: string;
  };
  caption: string;
};

export type Post = {
  _createdAt: string;
  _id: string;
  _rev: string;
  _type: string;
  _updatedAt: string;
  title: string;
  meta_title: string;
  description: string;
  publishedDate: string;
  slug: {
    current: string;
  };
  body: PostBody;
  cover: CoverImage;
};
