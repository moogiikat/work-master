import { cn } from "@/lib/utils";
import React, { use } from "react";
import { getPosts } from "@/services/facebook/getPosts";

export const generateStaticParams = async () => {
  const posts = await getPosts();
  const totalPage = posts.meta.totalPage;
  return Array.from({ length: totalPage }, (_, index) => ({
    page: (index + 1).toString(),
  }));
};

export function Posts() {
  const posts = use(getPosts());
  console.log(posts);
  return <div>skill</div>;
}
