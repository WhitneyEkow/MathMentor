import React from "react";
import ThemeButton from "../ThemeButton";
import { Button } from "flowbite-react";
import Link from "next/link";

function LandingPage() {
  return (
    <div className='h-screen w-full relative bg-[url("/wallpaper.png")]'>
      <div className="absolute w-full h-screen bg-black/70 top-0">
        <div className="flex gap-6 justify-end px-8 mt-6">
          <button className="mt-2 text-xl cursor-not-allowed">Guide</button>
          <button className="mt-2 text-xl cursor-not-allowed">Facts</button>
        </div>
        <div className="mt-[15%]">
          <h1 className="text-8xl text-[#00A0FB] font-bold text-center">
            MathMentor{" "}
          </h1>
          <p className="text-center w-[60%] mx-auto mt-4 text-2xl font-thin">
            MathMentor is an online school system for upper primary level
            students in Ghana to help them with their studies in relation to
            mathematics.The system follows the syllabus of GES.
          </p>
          <div className="w-[20%] mx-auto flex justify-between mt-8">
            <Link
              href={"/login"}
              className="px-10 py-2 text-center text-lg bg-[#00A0FB] rounded-md"
            >
              Login
            </Link>
            <Link
              href={"/signup"}
              className="px-10 py-2 text-center text-lg bg-[#00A0FB] rounded-md"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
