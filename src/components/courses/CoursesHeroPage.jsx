"use client";
import React from "react";
import Link from "next/link";

function CoursesHeroPage() {
  return (
    <div className="">
      <h3 className="text-2xl font-bold sm:text-3xl md:text-4xl">
        Welcome User,
      </h3>
      <div className="flex justify-between flex-wrap mt-10 gap-10 w-[85%] mx-auto ring-1 ring-slate-900/5  ">
        <Link
          href={"/my-courses/class"}
          className="w-[47%] h-60 bg-gray-800 hover:shadow-2xl rounded-md shadow-lg flex justify-center items-center cursor-pointer"
        >
          <h3 className="text-2xl font-bold sm:text-3xl md:text-4xl">Class</h3>
        </Link>
        <Link
          href={"/my-courses/assignments"}
          className="w-[47%] h-60 bg-gray-800 hover:shadow-2xl rounded-md shadow-lg flex justify-center items-center cursor-pointer"
        >
          <h3 className="text-2xl font-bold sm:text-3xl md:text-4xl">
            Assignments
          </h3>
        </Link>
        <Link
          href={"/my-courses/test-quizzes"}
          className="w-[47%] h-60 bg-gray-800 hover:shadow-2xl rounded-md shadow-lg flex justify-center items-center cursor-pointer"
        >
          <h3 className="text-2xl font-bold sm:text-3xl md:text-4xl">
            Test & Quizzes
          </h3>
        </Link>
        <Link
          href={"/my-courses/statistics"}
          className="w-[47%] h-60 bg-gray-800 hover:shadow-2xl rounded-md shadow-lg flex justify-center items-center cursor-pointer"
        >
          <h3 className="text-2xl font-bold sm:text-3xl md:text-4xl">
            Achievements
          </h3>
        </Link>
      </div>
    </div>
  );
}

export default CoursesHeroPage;
