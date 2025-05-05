import React from "react";
import { InfiniteMovingCardsDemo } from "./MovingImages";

function Trusted() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full py-10  bg-white">
      <div className="font-noto font-semibold text-3xl p-2">
        Trusted over 2k+ company{" "}
      </div>
      <div className="flex items-center justify-center px-10  w-1/2">
        {/* <p>Infinite scroll add cheyali</p> */}
        <div className="relative overflow-hidden w-full py-10    bg-white">
          {/* Fade edges */}
          <div className="pointer-events-none absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-white to-transparent z-10"></div>
          <div className="pointer-events-none absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-white to-transparent z-10"></div>

          {/* Marquee container */}
          <div className="flex w-max animate-marquee-horizontal gap-6">
            {/* Repeat logos twice for seamless loop */}
            {[...Array(1)].map((_, i) => (
              <React.Fragment key={i}>
                <img
                  className="h-16"
                  src="https://cdn.prod.website-files.com/66e66be520fb9aea363b6423/66ea9caa6bb7795aef3034be_Logo%20(7).svg"
                  alt=""
                />
                <img
                  className="h-16"
                  src="https://cdn.prod.website-files.com/66e66be520fb9aea363b6423/66eaef4fdae1e31ac290aef0_Logo%20(9).svg"
                  alt=""
                />
                <img
                  className="h-16"
                  src="https://cdn.prod.website-files.com/66e66be520fb9aea363b6423/66ea9caa21f40e1b433fcdd2_Logo%20(8).svg"
                  alt=""
                />
                 <img
                  className="h-16"
                  src="https://cdn.prod.website-files.com/66e66be520fb9aea363b6423/66eaef4fdae1e31ac290aef0_Logo%20(9).svg"
                  alt=""
                />
                <img
                  className="h-16"
                  src="https://cdn.prod.website-files.com/66e66be520fb9aea363b6423/66ea9caa21f40e1b433fcdd2_Logo%20(8).svg"
                  alt=""
                />
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Trusted;

//https://cdn.prod.website-files.com/66e66be520fb9aea363b6423/66ea9caa6bb7795aef3034be_Logo%20(7).svg
//https://cdn.prod.website-files.com/66e66be520fb9aea363b6423/66eaef4fdae1e31ac290aef0_Logo%20(9).svg
//https://cdn.prod.website-files.com/66e66be520fb9aea363b6423/66ea9caa21f40e1b433fcdd2_Logo%20(8).svg
