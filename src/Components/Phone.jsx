import React from "react";

function Phone() {
  return (
    <div className="pt-10  flex flex-col justify-center items-center " >
      <div className="relative  w-full max-w-3xl mx-auto ">
        {/* Left card image */}
        <img
          src="https://cdn.prod.website-files.com/66e66be520fb9aea363b6423/66e859a33ba054e3bd148829_card2.avif"
          alt="History"
          className="absolute top-14 -left-70 z-20 w-88"
        />

        {/* Right card image */}
        <img
          src="https://cdn.prod.website-files.com/66e66be520fb9aea363b6423/66e859a34968f27ac96a7440_card1.avif"
          alt="Income"
          className="absolute top-5 -right-70 z-20 w-88"
        />

        {/* Phone image in center */}
        <div className="overflow-hidden">
        <img
          src="https://cdn.prod.website-files.com/66e66be520fb9aea363b6423/67060e8d8755a96f4cd348f5_Space-Blackcel-p-800.png"
          alt="Phone"

          className="relative  z-10 mx-auto w-full max-w-lg overflow-hidden"
        />
        </div>
        
      </div>
    </div>
  );
}

export default Phone;
