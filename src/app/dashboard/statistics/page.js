"use client";

import Link from "next/link";
import React from "react";
import {
  BsArrowRight,
  BsArrowRightSquare,
  BsArrowLeftSquare,
} from "react-icons/bs";
function Statistics() {
  return (
    // <div className="w-full h-full">
    //   <div className="sm:flex justify-between w-[90%] mx-auto">
    //     <div className="w-[30%] relative h-[200px] bg-gray-800 hover:shadow-2xl rounded-md shadow-lg ">
    //       <h3 className=" text-center mt-4 text-4xl font-bold">GRADEBOOK</h3>
    //       <div className="mt-4">
    //         <Link
    //           href={"/my-courses/assignments"}
    //           className="flex justify-center gap-4 mx-10 cursor-pointer"
    //         >
    //           Assignments
    //           <BsArrowRight className="text-2xl" />
    //         </Link>
    //         <Link
    //           href={"/my-courses/test-and-quizzes"}
    //           className="flex justify-center  mt-4 gap-4 mx-10 cursor-pointer"
    //         >
    //           Test and Quizzes
    //           <BsArrowRight className="text-2xl" />
    //         </Link>
    //       </div>
    //     </div>
    //     <div className="w-[60%] relative min-h-[300px] bg-gray-800 py-4 hover:shadow-2xl rounded-md shadow-lg cursor-pointer">
    //       <h3 className=" text-center mt-4 text-4xl font-bold">
    //         LEARNING TIME
    //       </h3>
    //       <div className="flex mt-4 items-center justify-center gap-2">
    //         <BsArrowLeftSquare className="text-2xl" />
    //         <h3 className="text-xl">28/08/2023</h3>
    //         <BsArrowRightSquare className="text-2xl" />
    //       </div>
    //       <div className="flex justify-center items-center gap-4 mt-4">
    //         <h5 className="text-center text-xl">Monday</h5>
    //         <h5 className="text-center text-xl">--------------------------</h5>
    //         <h5 className="text-center text-xl">3hrs</h5>
    //       </div>
    //       <div className="flex justify-center items-center gap-4 mt-4">
    //         <h5 className="text-center text-xl">Tuesday</h5>
    //         <h5 className="text-center text-xl">--------------------------</h5>
    //         <h5 className="text-center text-xl">6hrs</h5>
    //       </div>
    //       <div className="flex justify-center items-center gap-4 mt-4">
    //         <h5 className="text-center text-xl">Wednesday</h5>
    //         <h5 className="text-center text-xl">--------------------------</h5>
    //         <h5 className="text-center text-xl">2hrs</h5>
    //       </div>
    //       <div className="flex justify-center items-center gap-4 mt-4">
    //         <h5 className="text-center text-xl">Thursday</h5>
    //         <h5 className="text-center text-xl">--------------------------</h5>
    //         <h5 className="text-center text-xl">7hrs</h5>
    //       </div>
    //       <div className="flex justify-center items-center gap-4 mt-4">
    //         <h5 className="text-center text-xl">Friday</h5>
    //         <h5 className="text-center text-xl">--------------------------</h5>
    //         <h5 className="text-center text-xl">Nil</h5>
    //       </div>
    //       <div className="flex justify-center items-center gap-4 mt-4">
    //         <h5 className="text-center text-xl">Saturday</h5>
    //         <h5 className="text-center text-xl">--------------------------</h5>
    //         <h5 className="text-center text-xl">40mins</h5>
    //       </div>
    //       <div className="flex justify-center items-center gap-4 mt-4">
    //         <h5 className="text-center text-xl">Sunday</h5>
    //         <h5 className="text-center text-xl">--------------------------</h5>
    //         <h5 className="text-center text-xl">Nil</h5>
    //       </div>
    //     </div>
    //   </div>
    //   <div className="sm:flex justify-between w-[90%] mx-auto">
    //     <div className="w-[50%]">
    //       <h3 className="text-2xl font-bold text-center mt-4">
    //         PERSONAL ANALYTICS
    //       </h3>

    //       <div className="w-[60%]  mt-4 relative py-4 flex bg-black hover:shadow-2xl rounded-md shadow-lg ">
    //         <div className="w-[60px] h-[60px] rounded-full bg-black"></div>
    //         <div className="ml-4">
    //           <h3 className="text-2xl font-bold text-center mt-4">Level One</h3>
    //           <h3 className="">Numbers:</h3>
    //           <h3 className="">Due Date:</h3>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>

    <div className="hidden sm:flex w-full h-screen">
      <div className="w-[48%] h-full ">
        <div className="w-[60%] mt-4 ml-6 relative py-6 px-6 bg-gray-800 hover:shadow-2xl rounded-md shadow-lg ">
          <h3 className=" text-center  text-4xl font-bold">GRADEBOOK</h3>
          <div className="mt-4">
            <Link
              href={"/my-courses/assignments"}
              className="flex justify-between  cursor-pointer"
            >
              Assignments
              <BsArrowRight className="text-2xl" />
            </Link>
            <Link
              href={"/my-courses/test-and-quizzes"}
              className="flex justify-between  mt-4 gap-4  cursor-pointer"
            >
              Test and Quizzes
              <BsArrowRight className="text-2xl" />
            </Link>
          </div>
        </div>
        <div className="w-[95%] mt-[15%] md:mt-[18%]">
          <h3 className="text-3xl font-bold ml-6 mt-4">PERSONAL ANALYTICS</h3>
          <div className=" ml-10 w-full">
            <div className="w-[65%]  mt-4 relative p-4 flex gap-4 items-center bg-gray-800 hover:shadow-2xl rounded-md shadow-lg ">
              <div className="w-16 h-16  rounded-full bg-black"></div>
              <div className="ml-4">
                <h3 className="text-2xl font-bold ">Level One</h3>
                <h3 className="">Numbers:</h3>
                <h3 className="">Due Date: Saturday, 22nd June</h3>
              </div>
            </div>
            <div className="w-[65%]  mt-6 relative p-4 flex gap-4 items-center bg-gray-800 hover:shadow-2xl rounded-md shadow-lg ">
              <div className="w-16 h-16  rounded-full bg-black"></div>
              <div className="ml-4">
                <h3 className="text-2xl font-bold ">Level Two</h3>
                <h3 className="">Numbers:</h3>
                <h3 className="">Due Date: Saturday, 22nd June</h3>
              </div>
            </div>
            <div className="w-[65%]  mt-6 relative p-4 flex gap-4 items-center bg-gray-800 hover:shadow-2xl rounded-md shadow-lg ">
              <div className="w-16 h-16  rounded-full bg-black"></div>
              <div className="ml-4">
                <h3 className="text-2xl font-bold ">Level Three</h3>
                <h3 className="">Numbers:</h3>
                <h3 className="">Due Date: Saturday, 22nd June</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[52%] h-full ml-10">
        <div className="px-2 relative bg-gray-800 py-4 hover:shadow-2xl rounded-md shadow-lg cursor-pointer">
          <h3 className=" text-center mt-4 text-4xl font-bold">
            LEARNING TIME
          </h3>
          <div className="flex mt-2 items-center justify-center gap-4">
            <BsArrowLeftSquare className="text-2xl" />
            <h3 className="text-xl">28/08/2023</h3>
            <BsArrowRightSquare className="text-2xl" />
          </div>
          <div className="w-[80%] mx-auto px-10">
            <div className="flex justify-between items-center mt-2">
              <h5 className="text-center text-xl">Monday</h5>
              <h5 className="text-center text-xl">
                --------------------------
              </h5>
              <h5 className="text-center text-xl">3hrs</h5>
            </div>
            <div className="flex justify-between items-center mt-2">
              <h5 className="text-center text-xl">Tuesday</h5>
              <h5 className="text-center text-xl">
                --------------------------
              </h5>
              <h5 className="text-center text-xl">6hrs</h5>
            </div>
            <div className="flex justify-between items-center mt-2">
              <h5 className="text-center text-xl">Wednesday</h5>
              <h5 className="text-center text-xl">
                --------------------------
              </h5>
              <h5 className="text-center text-xl">2hrs</h5>
            </div>
            <div className="flex justify-between items-center mt-2">
              <h5 className="text-center text-xl">Thursday</h5>
              <h5 className="text-center text-xl">
                --------------------------
              </h5>
              <h5 className="text-center text-xl">7hrs</h5>
            </div>
            <div className="flex justify-between items-center mt-2">
              <h5 className="text-center text-xl">Friday</h5>
              <h5 className="text-center text-xl">
                --------------------------
              </h5>
              <h5 className="text-center text-xl">Nil</h5>
            </div>
            <div className="flex justify-between items-center mt-2">
              <h5 className="text-center text-xl">Saturday</h5>
              <h5 className="text-center text-xl">
                --------------------------
              </h5>
              <h5 className="text-center text-xl">40mins</h5>
            </div>
            <div className="flex justify-between items-center  mt-2">
              <h5 className="text-center text-xl">Sunday</h5>
              <h5 className="text-center text-xl">
                --------------------------
              </h5>
              <h5 className="text-center text-xl">Nil</h5>
            </div>
          </div>
        </div>
        <div className="w-[100%] mt-6">
          <h3 className="text-3xl font-bold ml-6 mt-4">REMINDERS</h3>
          <div className=" ml-10 w-full flex flex-wrap gap-6">
            <div className="w-[45%]  mt-4 relative p-4 flex gap-4 items-center bg-gray-800 hover:shadow-2xl rounded-md shadow-lg ">
              <div className="ml-4">
                <h3 className="text-2xl font-bold ">Level One</h3>
                <h3 className="">Numbers:</h3>
                <h3 className="">Due Date: Saturday, 22nd June</h3>
              </div>
            </div>
            <div className="w-[45%]  mt-4 relative p-4 flex gap-4 items-center bg-gray-800 hover:shadow-2xl rounded-md shadow-lg ">
              <div className="ml-4">
                <h3 className="text-2xl font-bold ">
                  UPDATE YOUR PROFILE, USER
                </h3>
              </div>
            </div>
            <div className="w-[45%] relative p-4 flex gap-4 items-center bg-gray-800 hover:shadow-2xl rounded-md shadow-lg ">
              <div className="ml-4">
                <h3 className="text-2xl font-bold ">Level TWO</h3>
                <h3 className="">Numbers:</h3>
                <h3 className="">Due : Past Deadline</h3>
              </div>
            </div>
            <div className="w-[45%]  mt-4 relative p-4 flex gap-4 items-center bg-gray-800 hover:shadow-2xl rounded-md shadow-lg ">
              <div className="ml-4">
                <h3 className="text-2xl font-bold ">
                  WE MIS YOU, YOUR 3 DAYS STREAK AWAITS{" "}
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Statistics;
