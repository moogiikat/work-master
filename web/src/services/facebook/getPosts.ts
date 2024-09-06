import { array, number, object, optional, safeParse, string } from "valibot";

import { facebook } from "@/configs/default";
import { FacebookPostSchema } from "@/schemas/facebook_post";

const FbPostSchema = object({
  data: array(FacebookPostSchema),
  paging: object({
    // cursors: object({
    //   after: string(),
    //   before: string(),
    // }),
    previous: optional(string()),
    next: optional(string()),
  }),
});

const PaginateSchema = object({
  data: array(FacebookPostSchema),
  meta: object({
    currentPage: number(),
    totalPage: number(),
  }),
});

export const getPosts = async (currentPage?: string) => {
  const url = new URL("https://graph.facebook.com");
  url.pathname = `/v18.0/${facebook.pageId}/posts`;
  url.searchParams.set("access_token", facebook.accessToken || "");
  url.searchParams.set(
    "fields",
    ["created_time", "message", "permalink_url"].join(",")
  );

  const posts = await fetch(url, {
    next: { revalidate: 3600 },
  }).then((response) => response.json());

  const parsedData = safeParse(FbPostSchema, posts);
  if (!parsedData.success) {
    throw Error("INVALID_FACEBOOK_DATA");
  }
  const data = parsedData.output.data.filter((item) => item.message);

  const page = currentPage ? parseInt(currentPage) : 1;
  const perPage = 5;
  const startIndex = (page - 1) * perPage;
  const endIndex = startIndex + perPage;
  const totalItems = data.length;
  const totalPage = Math.ceil(totalItems / perPage);

  const paginateData = safeParse(PaginateSchema, {
    data: data.slice(startIndex, endIndex),
    meta: {
      currentPage: page,
      totalPage: totalPage,
    },
  });

  if (!paginateData.success) {
    throw Error("INVALID_FACEBOOK_DATA");
  }
  return paginateData.output;
};
