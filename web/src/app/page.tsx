import React from "react";

import { Works } from "./works";
import { Posts } from "./posts";

import { Banner } from "./banner";
import { getPosts } from "@/services/facebook/getPosts";
import { PageLayout } from "@/components/page_layout";

export default function Home() {
  return (
    <div>
      <Banner />
      <PageLayout className="pb-20">
        <div className="flex flex-col gap-y-10">
          <h1 className="text-4xl text-center mt-10">Шинэ мэдээлэл</h1>
          <Posts />
        </div>
      </PageLayout>
    </div>
  );
}
