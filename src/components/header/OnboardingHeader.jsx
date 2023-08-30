import React from "react";

function OnboardingHeader() {
  return (
    <div className="w-full flex justify-between items-center  px-10 pt-4  ">
      <div>
        <h1 className="text-4xl text-[#00A0FB] font-bold text-center mb-4">
          MathMentor{" "}
        </h1>
      </div>
      <div className="flex items-center gap-4">
        <button className=" text-xl cursor-not-allowed ">
          Guide
        </button>
        <button className=" text-xl cursor-not-allowed">
          Facts
        </button>
      </div>
    </div>
  );
}

export default OnboardingHeader;
