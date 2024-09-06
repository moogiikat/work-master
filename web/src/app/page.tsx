import React from "react";

import { Team } from "./team";
import { Works } from "./works";
import { Posts } from "./posts";

import { Banner } from "./banner";
import { getPosts } from "@/services/facebook/getPosts";

export default function Home() {
  return (
    <div>
      <Banner />
      <div className="flex flex-col gap-y-10 max-w-[1000px] mx-auto">
        <h1 className="text-4xl text-center mt-10">Works</h1>
        <Works />
        <h1 className="text-4xl text-center mt-10">Our Team</h1>
        <Team />
        <h1 className="text-4xl text-center mt-10">Posts</h1>
        <Posts />
      </div>
    </div>
  );
}
