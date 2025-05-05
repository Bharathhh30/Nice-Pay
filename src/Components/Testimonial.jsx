import React from "react";
import LogoButton from "./LogoButton";
import { InfiniteMovingCardsDemo } from "./Testimonials/Demo";


function Testimonial() {
  return (
    <div className="mt-10  flex flex-row w-[75vw] mb-10">
      <div className="flex flex-col  items-start p-8">
        {/* div1 - some sodhi */}
        <div>
          <LogoButton text={"Testimonials"} />
        </div>
        <div className="flex flex-col">
          <div className="text-clip text-base leading-loose font-noto pt-3">
            <p className="text-6xl ">What our clients are<br /><span style={{color : "#8267ec"}}>saying</span></p>
          </div>
        </div>
        <div className="w-[32vw] py-10">
            <p className="text-md font-medium" style={{color:"#909090"}}>
            Our financial management platform is transforming the way people manage their money. Here’s what some of our users have to say about their experience
            </p>
        </div>
        <div className="flex flex-col space-x-5  pt-55">
            <p className="text-6xl">2k+</p>
            <p style={{color:"#909090"}}>Trusted by users</p>
        </div>
        
      </div>
        {/* div2 - scroll - vertical */}
      <div className="relative flex pt-20 ">
            {/* <InfiniteMovingCardsDemo /> */}
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

export default Testimonial;
