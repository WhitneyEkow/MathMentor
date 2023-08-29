"use client";

import React from "react";
import { TbSend } from "react-icons/tb";


function ChatInterface({children}) {


  return (
    <div className="h-[80vh] md:h-[88vh] w-full bg-gray-200 dark:bg-gray-800 flex flex-col justify-between rounded-lg overflow-hidden ">
      <div className="w-full h-[80%] overflow-y-scroll p-4">
            {children}
      </div>
      <div className="w-full py-4 px-10 flex mb-2">
        <textarea className="w-[93%] h-12 rounded-lg px-4 py-2 bg-gray-200" />
        <button className="w-[7%] rounded-lg px-2 py-2 bg-gray-600 ml-2 flex justify-center items-center">
          <TbSend className="text-2xl text-" />
        </button>
      </div>
    </div>
  );
}

export default ChatInterface;
