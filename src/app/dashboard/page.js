"use client";

import React from "react";
import Link from "next/link";

function Dashboard() {
  return (
    <div className="">
      <h3 className="text-2xl font-bold sm:text-3xl md:text-4xl">
        Welcome User,
      </h3>
      <div className="flex justify-between flex-wrap mt-10 gap-10 w-[85%] mx-auto   ">
        <Link
          href={"/messages"}
          className="w-[47%] h-60 dark:bg-gray-800 hover:shadow-xl rounded-md shadow-lg flex justify-center items-center cursor-pointer ring-1 ring-slate-900/5"
        >
          <h3 className="text-2xl font-bold sm:text-3xl md:text-4xl">Chat Me</h3>
        </Link>
        <Link
          href={"/my-courses/assignments"}
          className="w-[47%] h-60 dark:bg-gray-800 hover:shadow-2xl rounded-md shadow-lg flex justify-center items-center cursor-pointer ring-1 ring-slate-900/5"
        >
          <h3 className="text-2xl font-bold sm:text-3xl md:text-4xl">
            Assignments
          </h3>
        </Link>
        <Link
          href={"/dashboard/statistics"}
          className="w-[47%] h-60 dark:bg-gray-800 hover:shadow-2xl rounded-md shadow-lg flex justify-center items-center cursor-pointer ring-1 ring-slate-900/5"
        >
          <h3 className="text-2xl font-bold sm:text-3xl md:text-4xl">
            Statistics
          </h3>
        </Link>
        <Link
          href={"/dashboard/profile"}
          className="w-[47%] h-60 dark:bg-gray-800 hover:shadow-2xl rounded-md shadow-lg flex justify-center items-center cursor-pointer"
        >
          <h3 className="text-2xl font-bold sm:text-3xl md:text-4xl">
            Profile
          </h3>
        </Link>
      </div>
    </div>
  );
}

export default Dashboard;
