"use client";
import React from "react";

import { Team } from "./team";
import { Works } from "./works";

import { Banner } from "./banner";

export default function Home() {
  return (
    <div>
      <Banner />
      <div className="flex flex-col gap-y-10 max-w-[1000px] mx-auto">
        <h1 className="text-4xl text-center mt-10">Works</h1>
        <Works />
        <h1 className="text-4xl text-center mt-10">Our Team</h1>
        <Team />
      </div>
    </div>
  );
}
