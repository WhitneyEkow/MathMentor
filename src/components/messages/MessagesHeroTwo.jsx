"use client";

import React from "react";
import ChatInterface from "./ChatInterface";
import Link from "next/link";

function MessagesHeroTwo() {
  return (
    <ChatInterface>
      <div className="inline-block  py-4 mt-10 bg-gray-400 dark:bg-gray-600 rounded-md px-6 text-black dark:text-white">
        <h2 className="text-3xl font-bold ">Welecome User,</h2>
      </div>
      <div className="max-w-[80%] py-4 mt-4 bg-gray-400 dark:bg-gray-600  rounded-md px-6">
        <p className=" text-2xl">
          As a visual learner, you learn best by seeing information. Therefore
          we will provide you with videos to watch and use diagrams and charts
          in order for you to learn old and new concepts
        </p>
      </div>
      <div className=" inline-block py-4 mt-4 bg-gray-400 dark:bg-gray-600  rounded-md px-6">
        <p className=" text-2xl">
          Down below is your lesson plan in order for you to understand what you
          will be learning.
        </p>
      </div>
      <div className="mt-2 flex justify-center">
        <Link
          href="#"
          className="text-center text-4xl font-bold   mt-4"
        >
          LESSON PLAN
        </Link>
      </div>
      <div className=" inline-block py-4 mt-4 bg-gray-400 dark:bg-gray-600  rounded-md px-6">
        <p className=" text-2xl">
          You can go back to the homepage and click MY COURSES or double click
          on the phrase below.
        </p>
      </div>
      <div className="mt-2 flex justify-center">
        <Link
          href="/my-courses"
          className="text-center text-4xl font-bold   mt-4"
        >
          MY COURSES
        </Link>
      </div>
    </ChatInterface>
  );
}

export default MessagesHeroTwo;
