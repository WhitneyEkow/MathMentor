"use client";

import { createContext, useContext, useState } from "react";
import { ThemeProvider } from "next-themes";
export const GlobalContext = createContext({});

export default function GlobalState({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [stepOne, setStepOne] = useState(true);
  const [stepTwo, setStepTwo] = useState(false);
  const [stepThree, setStepThree] = useState(false);
  const [user, setUser] = useState({
    firstname: "John",
    lastname: "Doe",
    email: "jdoe@gmail.com",
    password: "",
  });

  const goToStepOne = () => {
    setStepOne(true);
    setStepTwo(false);
    setStepThree(false);
  };

  const goToStepTwo = () => {
    setStepOne(false);
    setStepTwo(true);
    setStepThree(false);
  };

  const goToStepThree = () => {
    setStepOne(false);
    setStepTwo(false);
    setStepThree(true);
  };

  return (
    <GlobalContext.Provider
      value={{
        sidebarOpen,
        setSidebarOpen,
        isAuthenticated,
        setIsAuthenticated,
        user,
        setUser,
        stepOne,
        setStepOne,
        stepTwo,
        setStepTwo,
        stepThree,
        setStepThree,
        goToStepOne,
        goToStepTwo,
        goToStepThree,
      }}
    >
      <ThemeProvider attribute="class">{children}</ThemeProvider>
    </GlobalContext.Provider>
  );
}

export const useGlobal = () => useContext(GlobalContext);
