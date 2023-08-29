"use client";

import React from "react";

function Questions() {
  // create an array called years and it should have every year from 1990 to 2023
  const years = [
    1990, 1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999, 2000, 2001,
    2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013,
    2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023,
  ];

  return (
    <div className="w-full mx-auto p-4 flex flex-wrap gap-10 justify-start ml-4">
      {
        // map over the years array and return a div for each year
        years.map((year) => {
          return (
            <div className="w-1/5 px-2 py-4 hover:shadow-2xl text-center bg-gray-200 dark:bg-gray-800 mt-4 rounded-lg cursor-pointer">
              <div className="text-2xl font-bold">{year}</div>
            </div>
          );
        })
      }
    </div>
  );
}

export default Questions;
