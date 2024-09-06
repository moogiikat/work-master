"use client";

import { motion } from "framer-motion";
import React from "react";
import { AuroraBackground } from "@/components/ui";

export function Banner() {
  return (
    <AuroraBackground>
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative flex flex-col gap-4 items-center justify-center px-4"
      >
        <div className="text-4xl md:text-7xl font-bold dark:text-white text-center">
          Workmaster LLC
        </div>
        <div className="font-extralight text-base md:text-4xl dark:text-neutral-200 py-4 text-center">
          Барилга угсралт, Интерьер зураг төсөл гүйцэтгэл, тавилга үйлдвэрлэл.
        </div>
        <button className="bg-black dark:bg-white rounded-full w-fit text-white dark:text-black px-4 py-2 animate-bounce">
          contact us
        </button>
      </motion.div>
    </AuroraBackground>
  );
}
