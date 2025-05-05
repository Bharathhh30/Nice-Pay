import React from "react";
import Navbar from "../Components/Navbar";
import BigSentence from "../Components/BigSentence";
import Trusted from "../Components/Trusted";
import Workflow from "../Components/Workflow";
import KeyFeatures from "../Components/KeyFeatures";
import Pricing from "../Components/Pricing";
import Testimonial from "../Components/Testimonial";
import Footer from "../Components/Footer";

function LandingPage() {
  return (
    // Root div with flex column layout
    <div className="flex flex-col justify-center items-center relative ">
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
      <div className="my-10"> 
        <Trusted />
      </div>
      {/* our workflow with 4 cards */}
      <div className=" w-full mx-3">
        <Workflow />
      </div>
      <div>
        <KeyFeatures />
      </div>
      <div className="m-5 ">
        <Pricing />
      </div>
      {/* testimonials */}
      <div className="my-10 ">
        <Testimonial />
      </div>
      {/* blogs */}
      {/* footer */}
      <div className="my-5 mx-12">
        <Footer />
      </div>
    </div>
  );
}

export default LandingPage;
