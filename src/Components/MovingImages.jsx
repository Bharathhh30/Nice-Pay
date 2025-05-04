"use client";

import React from "react";
import { InfiniteMovingCards } from "../../src/Components/ui/infinite-moving-images"; // make sure this renders images

export function InfiniteMovingCardsDemo() {
  return (
    <div className="h-[40rem] rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={images}
        direction="left"
        speed="slow"
      />
    </div>
  );
}

const images = [
  {
    image: "https://cdn.prod.website-files.com/66e66be520fb9aea363b6423/66ea9caa6bb7795aef3034be_Logo%20(7).svg",
    name: "Nature 1"
  },
  {
    image: "https://cdn.prod.website-files.com/66e66be520fb9aea363b6423/66eaef4fdae1e31ac290aef0_Logo%20(9).svg",
    name: "Nature 2"
  },
  {
    image: "https://cdn.prod.website-files.com/66e66be520fb9aea363b6423/66ea9caa21f40e1b433fcdd2_Logo%20(8).svg",
    name: "Nature 3"
  },
 
];
