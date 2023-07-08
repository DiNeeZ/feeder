import { SchemaTypeDefinition } from "sanity";

const post: SchemaTypeDefinition = {
  name: "post",
  type: "document",
  title: "Post",
  groups: [
    {
      name: "meta",
      title: "Meta",
    },
    {
      name: "content",
      title: "Content",
    },
  ],
  fields: [
    {
      name: "meta_title",
      type: "string",
      title: "Meta Title",
      group: "meta",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "title",
      type: "string",
      title: "Title",
      group: "content",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "publishedDate",
      type: "date",
      title: "Published Date",
      group: "content",
      options: {
        dateFormat: "DD-MM-YYYY",
        calendarTodayLabel: "Today",
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "slug",
      type: "slug",
      title: "Slug",
      group: "content",
      validation: (Rule) => Rule.required(),
      options: {
        source: "title",
        maxLength: 200,
        slugify: (input: string) =>
          input.toLowerCase().replace(/\s+/g, "-").slice(0, 200),
      },
    },
    {
      title: "Cover",
      name: "cover",
      type: "image",
      group: "content",
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: "caption",
          type: "string",
          title: "Caption",
          validation: (Rule) => Rule.required(),
        },
      ],
      validation: (Rule) => Rule.required(),
    },
    {
      name: "description",
      type: "text",
      title: "Description",
      group: "content",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "body",
      type: "array",
      title: "Body content",
      group: "content",
      validation: (Rule) => Rule.required(),
      of: [
        { type: "block" },
        {
          type: "image",
          options: {
            hotspot: true,
          },
          fields: [
            {
              type: "string",
              name: "subpicDescr",
              title: "Picture alt",
              validation: (Rule) => Rule.required(),
            },
          ],
        },
      ],
    },
  ],
};

export default post;
