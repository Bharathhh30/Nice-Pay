import React from "react";
import Navbar from "../Components/Navbar";
import BigSentence from "../Components/BigSentence";
import Trusted from "../Components/Trusted";

function LandingPage() {
  return (
    // Root div with flex column layout
    <div className="flex flex-col justify-center items-center relative">
      {/* Gradient section */}
      <div className="w-full bg-white [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#63e_100%)]">
        {/* Content under gradient */}
        <div className="flex items-center justify-start flex-col space-y-6 py-1">
          {/* Navbar */}
          <div className="pt-10">
            <Navbar />
          </div>
          {/* Best finance management button, big sentence, and phone */}
          <div>
            <BigSentence />
          </div>
        </div>
      </div>

      {/* Content after gradient */}
      <div className="mt-10"> 
        <Trusted />
      </div>
    </div>
  );
}

export default LandingPage;
