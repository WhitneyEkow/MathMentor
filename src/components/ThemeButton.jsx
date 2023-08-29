"use client";

import { useGlobal } from "@/context";
import { useTheme } from "next-themes";
import React from "react";
import { MdDarkMode, MdLightMode } from "react-icons/md";

function ThemeButton() {
  const { resolvedTheme, setTheme } = useTheme();
  const { isAuthenticated } = useGlobal();
  return (
    <div
      className={`flex cursor-pointer gap-4  items-center p-2 text-base font-normal dark:text-white text-black rounded-lg  hover:bg-gray-100 
      dark:hover:bg-gray-700 mt-10
      ${isAuthenticated && "w-full"}
      `}
      onClick={() => setTheme(resolvedTheme === "light" ? "dark" : "light")}
    >
      {resolvedTheme === "light" ? (
        <>
          <MdDarkMode color="black" size={20} />
          {isAuthenticated && " toggle dark mode"}
        </>
      ) : (
        <>
          <MdLightMode color="white" size={20} />
          {isAuthenticated && " toggle light mode"}
        </>
      )}
    </div>
  );
}

export default ThemeButton;
