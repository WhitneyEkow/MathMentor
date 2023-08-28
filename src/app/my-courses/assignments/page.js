"use client";

import React from "react";
import Link from "next/link";
import Levels from "@/components/courses/Levels";

function Assignments() {

  return (
    <div className="">
      <h3 className="text-2xl font-bold ">
        These assignments are curated based on lesson plan and you style of
        learning,
      </h3>
      <Levels />
    </div>
  );
}

export default Assignments;
