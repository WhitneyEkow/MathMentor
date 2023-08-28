"use client";
import React from "react";

function CoursesHeroPage() {
    
  return (
    <div className="">
      <h3 className="text-2xl font-bold sm:text-3xl md:text-4xl">
        Welcome User,
      </h3>
      <div className="flex justify-between flex-wrap mt-10 gap-10 w-[85%] mx-auto ring-1 ring-slate-900/5">
        <div className="w-[47%] h-60 bg-gray-800 hover:shadow-2xl rounded-md shadow-lg flex justify-center items-center">
          <h3 className="text-2xl font-bold sm:text-3xl md:text-4xl">Class</h3>
        </div>
        <div className="w-[47%] h-60 bg-gray-800 hover:shadow-2xl rounded-md shadow-lg flex justify-center items-center">
          <h3 className="text-2xl font-bold sm:text-3xl md:text-4xl">
            Assignments
          </h3>
        </div>
        <div className="w-[47%] h-60 bg-gray-800 hover:shadow-2xl rounded-md shadow-lg flex justify-center items-center">
          <h3 className="text-2xl font-bold sm:text-3xl md:text-4xl">
            Test & Quizzes
          </h3>
        </div>
        <div className="w-[47%] h-60 bg-gray-800 hover:shadow-2xl rounded-md shadow-lg flex justify-center items-center">
          <h3 className="text-2xl font-bold sm:text-3xl md:text-4xl">
            Achievements
          </h3>
        </div>
      </div>
    </div>
  );
}

export default CoursesHeroPage;
