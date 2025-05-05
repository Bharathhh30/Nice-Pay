import React from "react";

function SmallCard({icon,text,sentence}) {
  return (
    <div className="flex flex-col">
      <div className="flex w-[35vw] h-[25vh]   overflow-hidden rounded-5xl">
        <div className="pl-2">
          <div className="bg-[#8267EC] flex justify-center items-center w-10 rounded-full p-2">
            <img
              src={
                icon ||
                "https://cdn.prod.website-files.com/66e66be520fb9aea363b6423/66eadd029496687fc2f44386_arrow-2.svg"
              }
              alt=""
            />
          </div>

          <div className=" pr-1 py-2 mt-3">
            <p className="text-2xl">{text || "Flexible Data Transfer"}</p>
          </div>
          <div>
            <p style={{color:"#909090"}}>{sentence || "Easily import and export financial data to and from our platform."}</p>
          </div>
        </div>

        <div className="pl-2">
          <div className="bg-[#8267EC] flex justify-center items-center w-10 rounded-full p-2">
            <img
              src={
                icon ||
                "https://cdn.prod.website-files.com/66e66be520fb9aea363b6423/66eade6d870d2723d80f52a7_mobile.svg"
              }
              alt=""
            />
          </div>

          <div className=" pr-1 py-2 mt-3">
            <p className="text-2xl">{text || "Personalized Reports"}</p>
          </div>
          <div>
            <p style={{color:"#909090"}}>{sentence || "Create and customize reports tailored to your specific needs."}</p>
          </div>
        
        </div>
        </div>
            <div className="flex w-[35vw] h-[25vh]   overflow-hidden rounded-5xl">
        <div className="pl-2">
          <div className="bg-[#8267EC] flex justify-center items-center w-10 rounded-full p-2">
            <img
              src={
                icon ||
                "https://cdn.prod.website-files.com/66e66be520fb9aea363b6423/66eade4166bc55924285d2bd_headphone.svg"
              }
              alt=""
            />
          </div>

          <div className=" pr-1 py-2 mt-3">
            <p className="text-2xl">{text || "Dedicated Support"}</p>
          </div>
          <div>
            <p style={{color:"#909090"}}>{sentence || "Our expert support team is available 24/7 to assist."}</p>
          </div>
        </div>

        <div className="pl-15 ">
          <div className="bg-[#8267EC] flex justify-center items-center w-10 rounded-full p-2">
            <img
              src={
                icon ||
                "https://cdn.prod.website-files.com/66e66be520fb9aea363b6423/66eade1d870d2723d80f1ced_message-edit.svg"
              }
              alt=""
            />
          </div>

          <div className=" pr-1 py-2 mt-3">
            <p className="text-2xl">{text || "Custom Reporting Tools"}</p>
          </div>
          <div>
            <p style={{color:"#909090"}}>{sentence || "Create and customize reports tailored to your specific needs."}</p>
          </div>
        </div> 
      </div>
    </div>
  );
}

export default SmallCard;
