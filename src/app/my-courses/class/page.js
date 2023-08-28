"use client";

import Levels from "@/components/courses/Levels";
import React from "react";

function Class() {
  return (
    <div className="w-full h-full">
      <h3 className="text-2xl font-bold sm:text-3xl md:text-4xl">
        Let{"'"}s study, User
      </h3>
      <Levels />
    </div>
  );
}

export default Class;
