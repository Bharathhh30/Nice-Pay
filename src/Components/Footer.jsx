import React from "react";
import Part1 from "./Footer/Part1";
import Part2 from "./Footer/Part2";
import Part3 from "./Footer/Part3";
import Part4 from "./Footer/Part4";

function Footer() {
  return (
    <div className="flex rounded-2xl shadow-sm  p-11 bg-[#f5f6f9]">
      <div className="flex flex-row justify-between w-full space-x-20">
        {/* div1 */}
        <div>
          <Part1 />
        </div>
        {/* div2 */}
        <div>
          <Part2 />
        </div>
        {/* div3 */}
        <div>
          <Part3 />
        </div>
        {/* div4 */}
        <div>
          <Part4 />
        </div>
      </div>
    </div>
  );
}

export default Footer;
