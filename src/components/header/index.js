"use client";

import React, { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { Breadcrumb } from "flowbite-react";
import Link from "next/link";

function Header() {
  const pathname = usePathname();
  const router = useRouter();
  const [paths, setPaths] = React.useState([]);

  useEffect(() => {
    const paths = pathname.split("/").filter((path) => path !== "");
    setPaths(paths);
  }, [pathname]);

  return (
    <div className="sticky top-0 flex items-center justify-between h-16 px-4 py-4 z-10 shadow-2xl bg-white dark:bg-[#111827]">
      <div />

      <div className="flex items-center space-x-4">
        <Breadcrumb>
          {paths.map((path, index) => {
            const isLast = index === paths.length - 1;
            const isHome = index === 0;
            const label = path[0].toUpperCase() + path.slice(1);
            const href = `/${paths.slice(0, index + 1).join("/")}`;

            return (
              <Breadcrumb.Item
                key={path}
                href={href}
                onClick={() => {
                  if (isLast) return;
                  router.push(href);
                }}
              >
                {label}
              </Breadcrumb.Item>
            );
          })}
        </Breadcrumb>
      </div>
      <Link
        className="w-[50px] h-[50px] bg-blue-300 rounded-full"
        href={"/profile"}
      ></Link>
    </div>
  );
}

export default Header;
