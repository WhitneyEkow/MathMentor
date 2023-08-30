import React from "react";
import OnboardingHeader from "../header/OnboardingHeader";
import { useGlobal } from "@/context";

function StepTwo() {
  const { user, goToStepThree, goToStepOne } = useGlobal();
  return (
    <div className="h-screen relative">
      <OnboardingHeader />
      <div className="px-[10%] ">
        <h1 className="text-4xl font-bold mt-4">
          Let{"'s"}, begin {user?.firstname}
        </h1>
        <div className="mt-10 pl-4 z-20">
          <div>
            <label className="block text-xl mt-4 font-medium text-gray-700">
              1. What is your current class grade in mathematics?{" "}
            </label>
            <select
              className="mt-4 block w-[30%] py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              name="grade"
              id="grade"
            >
              <option value="A">A</option>
              <option value="B">B</option>
              <option value="C">C</option>
              <option value="D">D</option>
              <option value="E">E</option>
              <option value="F">F</option>
            </select>
          </div>
          <div>
            <label className="block text-xl mt-8 font-medium text-gray-700">
              2. What is your current grade in mathematics?{" "}
            </label>
            <select
              className="mt-4 block w-[30%] py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              name="grade"
              id="grade"
            >
              <option value="A">A</option>
              <option value="B">B</option>
              <option value="C">C</option>
              <option value="D">D</option>
              <option value="E">E</option>
              <option value="F">F</option>
            </select>
          </div>
          <div>
            <label className="block text-xl mt-8 font-medium text-gray-700">
              3. What is your current strength in mathematics?{" "}
            </label>
            <select
              className="mt-4 block w-[30%] py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              name="grade"
              id="grade"
            >
              <option value="Beginner">Beginner</option>
              <option value="Amateur">Amateur</option>
              <option value="Experinced">Experinced</option>
              <option value="Professional">Professional</option>
            </select>
          </div>
        </div>
      </div>
      <div className="absolute z-10 w-full  bottom-0 flex items-end justify-between px-[5%] pb-6">
        <button
          onClick={goToStepOne}
          className="py-2 z-10 px-4 bg-blue-500 text-white font-bold rounded-md cursor-pointer"
        >
          Back
        </button>
        <button
          onClick={goToStepThree}
          className="py-2 z-10 px-4 bg-blue-500 text-white font-bold rounded-md cursor-pointer"
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default StepTwo;
