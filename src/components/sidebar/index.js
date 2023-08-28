"use client";

import React from "react";
import { BiSolidDashboard } from "react-icons/bi";
import { GiBookshelf } from "react-icons/gi";
import { PiChatsDuotone } from "react-icons/pi";
import { GoQuestion } from "react-icons/go";
import { CgLogOut } from "react-icons/cg";
import Link from "next/link";

const menuItems = [
  {
    id: "dashboard",
    label: "Dashboard",
    path: "/",
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
    label: "Questions",
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
  const [selectedMenuItem, setSelectedMenuItem] = React.useState(
    menuItems[0].id
  );

  return (
    <div>
      <button
        data-drawer-target="default-sidebar"
        data-drawer-toggle="default-sidebar"
        aria-controls="default-sidebar"
        type="button"
        className="inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
      >
        <span className="sr-only text-blue">Open sidebar</span>
      </button>

      <aside
        id="default-sidebar"
        className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
        aria-label="Sidenav"
      >
        <div className="overflow-y-auto py-5 px-3 h-full bg-white border-r border-gray-200 dark:bg-gray-800 dark:border-gray-700">
          <ul className="space-y-2">
            {menuItems.map((item) => (
              <li key={item.id} onClick={() => setSelectedMenuItem(item.id)}>
                <Link
                  href={item.path}
                  className={`flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group
                    ${
                      selectedMenuItem === item.id
                        ? "bg-gray-100 dark:bg-gray-700"
                        : ""
                    }
                  `}
                >
                  {item.icon}
                  <span className="ml-3">{item.label}</span>
                </Link>
              </li>
            ))}
          </ul>
          <ul className="pt-5 mt-5 space-y-2 border-t border-gray-200 dark:border-gray-700">
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg transition duration-75 hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group"
              >
                <span className="ml-3">Docs</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg transition duration-75 hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group"
              >
                <span className="ml-3">Components</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg transition duration-75 hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group"
              >
                <span className="ml-3">Help</span>
              </a>
            </li>
          </ul>
        </div>
        <div className="hidden absolute bottom-0 left-0 justify-center p-4 space-x-4 w-full lg:flex bg-white dark:bg-gray-800 z-20 border-r border-gray-200 dark:border-gray-700">
          <a
            href="#"
            className="inline-flex justify-center p-2 text-gray-500 rounded cursor-pointer dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-600"
          ></a>
          <a
            href="#"
            data-tooltip-target="tooltip-settings"
            className="inline-flex justify-center p-2 text-gray-500 rounded cursor-pointer dark:text-gray-400 dark:hover:text-white hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-600"
          ></a>
          <div
            id="tooltip-settings"
            role="tooltip"
            className="inline-block absolute invisible z-10 py-2 px-3 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 transition-opacity duration-300 tooltip"
          >
            Settings page
            <div className="tooltip-arrow" data-popper-arrow></div>
          </div>
          <button
            type="button"
            data-dropdown-toggle="language-dropdown"
            className="inline-flex justify-center p-2 text-gray-500 rounded cursor-pointer dark:hover:text-white dark:text-gray-400 hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-600"
          ></button>
          <div
            className="hidden z-50 my-4 text-base list-none bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700"
            id="language-dropdown"
          >
            <ul className="py-1" role="none">
              <li>
                <a
                  href="#"
                  className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:text-white dark:text-gray-300 dark:hover:bg-gray-600"
                  role="menuitem"
                >
                  <div className="inline-flex items-center">English (US)</div>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:text-white dark:hover:bg-gray-600"
                  role="menuitem"
                >
                  <div className="inline-flex items-center">Deutsch</div>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:text-white dark:hover:bg-gray-600"
                  role="menuitem"
                >
                  <div className="inline-flex items-center">Italiano</div>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:text-white dark:text-gray-300 dark:hover:bg-gray-600"
                  role="menuitem"
                >
                  <div className="inline-flex items-center">中文 (繁體)</div>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </aside>
    </div>
  );
}

export default Sidebar;
