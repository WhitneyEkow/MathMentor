"use client";

import React, { useState } from "react";
import { Box, TextField, Button, Spinner } from "@mui/material";
import Link from "next/link";
// import "./Page.css";

function SignUp() {
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
          <h2 className="text-3xl font-bold text-center text-black mb-6">
            Sign Up
          </h2>
          <div className="w-full h-full">
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
                className="w-full  mb-6 "
                required
                id="outlined-required"
                label="First Name"
                defaultValue=""
                placeholder="First Name"
              />
            </div>
            <div>
              <TextField
                className="w-full  mb-6 "
                required
                id="outlined-required"
                label="Last Name"
                defaultValue=""
                placeholder="Last Name"
              />
            </div>

            <div>
              <TextField
                className="w-full  mb-6 "
                required
                id="outlined-required"
                label="Password"
                defaultValue=""
                placeholder="* * * * * * *"
              />
            </div>
            <div>
              <Button
                className="w-full  mb-6 text-black bg-gray-200"
                fullWidth
                size="large"
                type="submit"
                variant="contained"
              >
                {loading ? "Signing Up" : "Sign Up"}
              </Button>
            </div>

            <div>
              <p className="w-full  mb-6 text-black text-center">
                Already have an account?{" "}
                <span>
                  <Link href="/login" className="text-blue-500">
                    Login
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

export default SignUp;
