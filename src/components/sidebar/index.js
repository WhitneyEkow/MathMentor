"use client";

import React, { useState } from "react";
import { BiSolidDashboard } from "react-icons/bi";
import { GiBookshelf } from "react-icons/gi";
import { PiChatsDuotone } from "react-icons/pi";
import { GoQuestion } from "react-icons/go";
import { CgLogOut } from "react-icons/cg";
import { MdLightMode, MdDarkMode } from "react-icons/md";
import { usePathname, useRouter } from "next/navigation";

const menuItems = [
  {
    id: "dashboard",
    label: "Dashboard",
    path: "/dashboard",
    icon: <BiSolidDashboard />,
  },
  {
    id: "my-courses",
    label: "My Courses",
    path: "/my-courses",
    icon: <GiBookshelf />,
  },
  {
    id: "messages",
    label: "Messages",
    path: "/messages",
    icon: <PiChatsDuotone />,
  },
  {
    id: "questions",
    label: "Past Questions",
    path: "/questions",
    icon: <GoQuestion />,
  },
  {
    id: "logout",
    label: "Logout",
    path: "/logout",
    icon: <CgLogOut />,
  },
];

function Sidebar() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const handleNavigate = (item) => () => {
    router.push(item.path);
  };

  return (
    <div className="">
      {/* <button
        data-drawer-target="default-sidebar"
        data-drawer-toggle="default-sidebar"
        aria-controls="default-sidebar"
        type="button"
        className="inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
      >
        <span className="sr-only text-blue">Open sidebar</span>
      </button> */}

      <aside
        id="dafault-sidebar"
        className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0 "
        aria-label="Sidenav"
      >
        <div className="overflow-y-auto py-5 px-3 h-full bg-white border-r border-gray-200 dark:bg-[#111827] dark:border-gray-700">
          <div className="flex items-center justify-between mb-6 ">
            <div className="flex items-center">
              <h1>
                <span className="text-2xl font-bold text-gray-800 dark:text-white">
                  MathMentor
                </span>
              </h1>
            </div>
          </div>
          <ul className="space-y-2">
            {menuItems.map((item) => (
              <li key={item.id} onClick={handleNavigate(item)}>
                <label
                  className={`flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group
                    ${
                      pathname.includes(item.id)
                        ? "bg-gray-100 dark:bg-gray-700"
                        : ""
                    }
                  `}
                >
                  {item.icon}
                  <span className="ml-3">{item.label}</span>
                </label>
              </li>
            ))}
          </ul>
          {/* <div className="  mt-6 space-y-2  text-white">
            <button className="flex gap-4 w-full items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
              <MdLightMode color="black" size={20} />
              toggle light mode
            </button>
            <button className="flex gap-4 w-full items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-black hover:bg-gray-100 dark:hover:bg-gray-700">
              <MdDarkMode color="white" size={20} />
              toggle dark mode
            </button>
          </div> */}
        </div>
      </aside>
    </div>
  );
}

export default Sidebar;
