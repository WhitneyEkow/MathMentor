"use client";

import StepOne from "@/components/onboarding/StepOne";
import StepThree from "@/components/onboarding/StepThree";
import StepTwo from "@/components/onboarding/StepTwo";
import { useGlobal } from "@/context";
import React from "react";

function Onboarding() {
  const { stepOne, stepTwo, stepThree } = useGlobal();
  return (
    <div className="h-full overflow-hidden bg-white text-black bg-[url('/backGround.png')] ">
      {stepOne && <StepOne />}
      {stepTwo && <StepTwo />}
      {stepThree && <StepThree />}
    </div>
  );
}

export default Onboarding;
