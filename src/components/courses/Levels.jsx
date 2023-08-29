"use client";

import React from "react";
import { BiSolidLockOpen, BiSolidLock } from "react-icons/bi";
function Levels() {
  const levels = [
    {
      name: "Level One",
      courses: [
        {
          name: "Course 1",
          lesson: "Lesson 1",
          status: "locked",
        },
        {
          name: "Course 2",
          lesson: "Lesson 2",
          status: "unlocked",
        },
        {
          name: "Course 3",
          lesson: "Lesson 3",
          status: "locked",
        },
        {
          name: "Course 4",
          lesson: "Lesson 4",
          status: "unlocked",
        },
      ],
    },
    {
      name: "Level Two",
      courses: [
        {
          name: "Course 1",
          lesson: "Lesson 1",
          status: "locked",
        },
        {
          name: "Course 2",
          lesson: "Lesson 2",
          status: "unlocked",
        },
        {
          name: "Course 3",
          lesson: "Lesson 3",
          status: "locked",
        },
      ],
    },
    {
      name: "Level Three",
      courses: [
        {
          name: "Course 1",
          lesson: "Lesson 1",
          status: "locked",
        },
        {
          name: "Course 2",
          lesson: "Lesson 2",
          status: "locked",
        },
        {
          name: "Course 3",
          lesson: "Lesson 3",
          status: "unlocked",
        },
      ],
    },
  ];
  return (
    <div className="mt-6 ">
      {levels.map((level, index) => {
        return (
          <div key={`${level.name}-${index}`} className="mt-12">
            <h3 className="text-2xl font-bold ">{level.name}</h3>
            <div className="grid grid-flow-col overflow-x-scroll mt-8 gap-10 p-4 w-[90%] mx-auto ring-1 ring-slate-900/5  ">
              {level.courses.map((course) => {
                return (
                  <div
                    key={course.name}
                    className="w-[350px] relative h-[200px]  dark:bg-gray-800 hover:shadow-xl rounded-md shadow-lg flex items-center justify-center flex-col cursor-pointer ring-1 ring-slate-900/5 "
                  >
                    <h3 className="text-2xl font-bold sm:text-3xl md:text-4xl">
                      {course.name}
                    </h3>
                    <br />
                    <p>{course.lesson}</p>

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
  );
}

export default Levels;
