import React from "react";
import OnboardingHeader from "../header/OnboardingHeader";
import { useGlobal } from "@/context";
import { useRouter } from "next/navigation";

function StepThree() {
  const { user, setIsAuthenticated } = useGlobal();
  const router = useRouter();

  return (
    <div className="h-screen relative">
      <OnboardingHeader />
      <div className="px-[10%] ">
        <h1 className="text-4xl font-bold mt-4">Well Done {user?.firstname}, </h1>
        <h1 className="absolute top-[30%] text-center text-6xl w-[60%] mx-[13%]">
          CONGRATULATIONS.YOU HAVE ANSWERED ALL QUESTIONS.YOUR MODE OF LEARNING
          WILL BE DETERMINED.CLICK PROCEED TO MOVE DIRECTLY TO YOUR HOMEPAGE.{" "}
        </h1>
      </div>
      <div className="absolute w-full bottom-0 flex items-end justify-end px-[5%] pb-6">
        <button
          onClick={() => {
            setIsAuthenticated(true);
            router.push("/dashboard");
          }}
          className="py-2 z-10 px-4 bg-blue-500 text-white font-bold rounded-md cursor-pointer"
        >
          Start Learning
        </button>
      </div>
    </div>
  );
}

export default StepThree;
