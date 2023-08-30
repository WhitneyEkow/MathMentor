"use client";

import GlobalState from "@/context";
import "./globals.css";
import { Inter } from "next/font/google";
import Sidebar from "@/components/sidebar";
import Header from "@/components/header";
import { usePathname } from "next/navigation";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  const pathname = usePathname();

  if (
    pathname.includes("guest") ||
    pathname.includes("login") ||
    pathname.includes("signup") ||
    pathname.includes("onboarding") ||
    pathname === "/"
  ) {
    return (
      <html lang="en" suppressHydrationWarning>
        <body className={inter.className}>
          <GlobalState>
            <div className="flex w-full h-screen overflow-y-scroll">
              <div className="relative w-[100%] ">
                <main className="overflow-hidden h-screen">
                  <div className="mx-auto h-screen text-black dark:text-white dark:bg-[#080b13]">
                    {children}
                  </div>
                </main>
              </div>
            </div>
          </GlobalState>
        </body>
      </html>
    );
  }

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <GlobalState>
          <div className="flex w-full h-screen overflow-y-scroll">
            <div className="w-[16%]">
              <Sidebar />
            </div>
            <div className="relative w-[84%] ">
              <Header />
              <main className="overflow-hidden ">
                <div className=" text-black dark:text-white dark:bg-[#080b13]  p-6">
                  {children}
                </div>
              </main>
            </div>
          </div>
        </GlobalState>
      </body>
    </html>
  );
}
