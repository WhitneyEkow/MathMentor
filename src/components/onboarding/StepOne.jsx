import React from "react";
import OnboardingHeader from "../header/OnboardingHeader";
import { useGlobal } from "@/context";

function StepOne() {
  const { user, goToStepTwo } = useGlobal();
  return (
    <div className="h-screen relative">
      <OnboardingHeader />
      <div className="px-[10%] ">
        <h1 className="text-4xl font-bold mt-4">Welcome {user?.firstname}, </h1>
        <h1 className="absolute top-[40%] text-center text-6xl w-[60%] mx-[13%]">
          FOR EFFECTIVE LEARNING ANSWER THE FOLLOWING QUESTIONS
        </h1>
      </div>
      <div className="absolute w-full h-screen top-0 flex items-end justify-end px-[5%] pb-6">
        <button 
        onClick={goToStepTwo}
        className="py-2 z-10 px-4 bg-blue-500 text-white font-bold rounded-md cursor-pointer">
          Proceed
        </button>
      </div>
    </div>
  );
}

export default StepOne;
