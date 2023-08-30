"use client";

import { useGlobal } from "@/context";
import { Button } from "flowbite-react";
import { useRouter } from "next/navigation";
import React from "react";

function LogOut() {
  const router = useRouter();
  const { setIsAuthenticated } = useGlobal();
  return (
    <div className="w-full h-[87vh]">
      <div className="w-full h-[60vh] flex justify-center items-center">
        <div className="w-full ">
          <h2 className="text-4xl font-bold text-center mb-4">
            Are you sure you want to log out?
          </h2>
          <h2 className="text-4xl mt-3 font-bold text-center mb-4">
            If so, click the button below.
          </h2>

          <div className="flex items-center w-full justify-center mt-16">
            <Button
              onClick={() => {
                setIsAuthenticated(false);
                router.push("/login");
              }}
            >
              Log Out
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LogOut;
