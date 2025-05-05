import React from "react";
import LogoButton from "./LogoButton";
import SmallCard from "./SmallCard";

function KeyFeatures() {
  return (
    <div className="mt-30  flex flex-row w-full mb-10">
      <div className="flex flex-col  items-start p-8">
        {/* div 1 */}
        <div>
          <LogoButton text={"Key Features"} />
        </div>
        <div className="flex flex-col">
          <div className="text-clip text-base leading-loose font-noto pt-3">
            <p className="text-6xl ">
              Boost your finances <br /> with{" "}
              <span style={{ color: "#8267ec" }}>Nicepay</span>
            </p>
          </div>
        </div>
        <div className="mt-20">
          <SmallCard />
        </div>
        {/* button + sentence + 4 (icon+text+sentence) */}
        {/* div2 */}
        {/* image of iphone with gradient overlay at bottom of phone */}
      </div>
      <div className="relative flex pt-20">
        <img
          src="https://cdn.prod.website-files.com/66e66be520fb9aea363b6423/66eae1d8b6664881feb4988d_1-p-500.avif"
          alt=""
          className="w-full h-auto"
        />
        <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-white to-transparent"></div>
      </div>
    </div>
  );
}

export default KeyFeatures;
