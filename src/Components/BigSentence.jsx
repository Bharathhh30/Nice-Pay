import React from "react";
import Phone from "./Phone";
import LogoButton from "./LogoButton";

function BigSentence() {
  const nicepayLargeBg =
    "https://cdn.prod.website-files.com/66e66be520fb9aea363b6423/66e856473884776b3f5dcb7e_box-gradient.svg";
  return (
    <div className="flex flex-col pt-10">
      <div className="flex flex-col items-center justify-center pt-10 mt-1 ">
        {" "}
        {/* Added background for clarity */}
        {/* Main Heading */}
        <LogoButton text={"Best finance management"} />
        <h1 className="text-5xl md:text-7xl font-medium pt-1 text-gray-800 mb-8  font-noto text-center">
          Enhance your financial control
        </h1>
        {/* Horizontal Section */}
        <div className="flex items-center justify-center flex-wrap">
          {" "}
          {/* Use flex-wrap for smaller screens */}
          {/* Small Nicepay Image 1 */}
          {/* Adjust h- and w- classes based on your image size and desired appearance */}
          <img
            src="https://cdn.prod.website-files.com/66e66be520fb9aea363b6423/66e857757015e791cc4fbc59_select-left.svg"
            alt="Nicepay"
            className="transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-105"
          />
          {/* "with" text */}
          <span className="text-7xl font-medium font-noto text-gray-800 mx-4 mb-2 md:mb-0">
            with
          </span>
          {/* Large Nicepay Button/Styled Element */}
          <div className="relative px-6 py-3 rounded-xl overflow-hidden">
            <img
              src={nicepayLargeBg || "/placeholder.svg"}
              alt="Nicepay background"
              width={240}
              height={100}
              className="absolute inset-0  w-full h-full object-cover "
            />
            <span className="relative text-3xl md:text-4xl font-semibold  text-white">
              Nicepay
            </span>
          </div>
          {/* Small Nicepay Image 2 */}
          {/* Adjust h- and w- classes based on your image size and desired appearance */}
          <div className="pl-10">
          <img src="https://cdn.prod.website-files.com/66e66be520fb9aea363b6423/66e857755f7b6b0d8760458f_select-right.svg" 
          className="transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-105"
          alt="Nicepay"
          />
          </div>
        </div>
        <div className="flex flex-col p-4">
            <p style={{color:"#909090"}}
                className="text-center font-medium font-noto"
            >Streamline your business's financial management with our intuitive, scalable SaaS platform.<br/> Designed for U.S. enterprises, our solutions simplify complex processes.</p>
        </div>
        {/* phone component */}
        <Phone />
      </div>
    </div>
  );
}

export default BigSentence;
