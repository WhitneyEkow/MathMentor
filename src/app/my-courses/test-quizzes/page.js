"use client";

import React from "react";
import { BiSolidLockOpen, BiSolidLock } from "react-icons/bi";


function TestAndQuizzes() {
  const testLevels = [
    {
      name: "LEVEL ONE-NUMBERS",
      courses: [
        {
          name: "Beginner",
          lesson: "Lesson 1",
          status: "unlocked",
        },
        {
          name: "Intermediate 1",
          lesson: "Lesson 2",
          status: "locked",
        },
        {
          name: "Intermediate 2",
          lesson: "Lesson 3",
          status: "locked",
        },
        {
          name: "Difficulty 1",
          lesson: "Lesson 4",
          status: "locked",
        },
      ],
    },
    {
      name: "LEVEL TWO",
      courses: [
        {
          name: "Beginner",
          lesson: "Lesson 1",
          status: "unlocked",
        },
        {
          name: "Course 2",
          lesson: "Lesson 2",
          status: "locked",
        },
        {
          name: "Course 3",
          lesson: "Lesson 3",
          status: "locked",
        },
      ],
    },
    {
      name: "LEVEL THREE",
      courses: [
        {
          name: "Beginner",
          lesson: "Lesson 1",
          status: "unlocked",
        },
        {
          name: "Course 2",
          lesson: "Lesson 2",
          status: "locked",
        },
        {
          name: "Course 3",
          lesson: "Lesson 3",
          status: "locked",
        },
      ],
    },
  ];
  return (
    <div className="w-full h-full">
      <h3 className="text-2xl font-bold ">
        These assignments are curated based on lesson plan and you style of
        learning,
      </h3>
      <div className="mt-6 ">
      {testLevels.map((level) => {
        return (
          <div className="mt-12">
            <h3 className="text-2xl font-bold ">{level.name}</h3>
            <div className="grid grid-flow-col overflow-x-scroll mt-8 gap-10 p-4 w-[90%] mx-auto ring-1 ring-slate-900/5  ">
              {level.courses.map((course) => {
                return (
                  <div
                    key={course.name}
                    className="w-[350px] relative h-[200px] bg-white dark:bg-gray-800 hover:shadow-xl rounded-md shadow-lg flex items-center justify-center flex-col cursor-pointer ring-slate-900/5 "
                  >
                    <h3 className="text-2xl font-bold sm:text-3xl md:text-4xl">
                      {course.name}
                    </h3>
                    <br />
                    {/* <p>{course.lesson}</p> */}

                    <div className="absolute bottom-0 right-0 mr-4 mb-4">
                      {course.status === "locked" ? (
                        <BiSolidLock className="text-2xl text-red-500" />
                      ) : (
                        <BiSolidLockOpen className="text-2xl text-green-500" />
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
    </div>
  );
}

export default TestAndQuizzes;
