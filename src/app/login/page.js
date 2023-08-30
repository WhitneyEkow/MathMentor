"use client";

import React, { useState } from "react";
import { Box, TextField, Button, Spinner, Checkbox } from "@mui/material";
import Link from "next/link";
// import "./Page.css";

function Login() {
  const [loading, setLoading] = useState(false);
  const redirectToLogin = () => {
    window.location.replace("/login");
  };

  return (
    <div className="w-full flex bg-white h-screen">
      <div className=" w-[50%]  h-full bg-[url('/loginWallpaper.png')] bg-contain relative">
        <div className="absolute top-0 left-0 w-full flex gap-6 px-6 mt-4 z-10">
          <button className="mt-2 text-xl cursor-not-allowed text-white">
            Guide
          </button>
          <button className="mt-2 text-xl cursor-not-allowed text-white">
            Facts
          </button>
        </div>
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-80 flex items-center justify-center">
          <div className="">
            <h1 className="text-8xl text-[#00A0FB] font-bold text-center">
              MathMentor{" "}
            </h1>
            <p className="text-center w-[60%] mx-auto mt-4 text-2xl font-thin">
              MathMentor is an online school system for upper primary level
              students in Ghana to help them with their studies in relation to
              mathematics.The system follows the syllabus of GES.
            </p>
          </div>
        </div>
      </div>

      <div className="  w-[50%] bg-[url('/backGround.png')] flex items-center justify-center shadow-lg">
        <Box
          component="form"
          className="w-[60%]  "
          noValidate
          autoComplete="off"
        >
          <h1 className="text-5xl text-[#00A0FB] font-bold text-center mb-4">
            MathMentor{" "}
          </h1>
          <h2 className="text-xl  text-center text-black mb-6">Welcome Back</h2>
          <div className="w-full h-full">
            <div className="flex gap-6 items-center justify-center mb-6">
              <div className="flex gap-2">
                <input type="radio" id="type" name="type" className="mr-2" />
                <p className="text-black">Student</p>
              </div>
              <div className="flex gap-2">
                <input type="radio" id="type" name="type" className="mr-2" />
                <p className="text-black">Teacher</p>
              </div>
            </div>

            <div>
              <TextField
                className="w-full  mb-6 "
                required
                id="outlined-required"
                label="Email Address"
                defaultValue=""
                placeholder="Email Address"
              />
            </div>
            <div>
              <TextField
                className="w-full   "
                required
                id="outlined-required"
                label="Password"
                defaultValue=""
                placeholder="* * * * * * *"
              />
            </div>
            <p className="text-right text-black mb-6 mt-1">Forgot Password?</p>
            <div>
              <Button
                className="w-full  mb-6 text-black bg-gray-200"
                fullWidth
                size="large"
                type="submit"
                variant="contained"
              >
                {loading ? "Signing In" : "Sign In"}
              </Button>
            </div>

            <div>
              <p className="w-full  mb-6 text-black text-center">
                Don{"'"}t have an account?{" "}
                <span>
                  <Link href="/signup" className="text-blue-500">
                    Sign Up
                  </Link>
                </span>
              </p>
            </div>
          </div>
        </Box>
      </div>
    </div>
  );
}

export default Login;
