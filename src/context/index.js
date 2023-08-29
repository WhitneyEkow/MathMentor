"use client";

import { createContext, useContext, useState } from "react";
import { ThemeProvider } from "next-themes";
export const GlobalContext = createContext({});

export default function GlobalState({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  return (
    <GlobalContext.Provider
      value={{
        sidebarOpen,
        setSidebarOpen,
        isAuthenticated,
        setIsAuthenticated,
      }}
    >
      <ThemeProvider attribute="class">{children}</ThemeProvider>
    </GlobalContext.Provider>
  );
}

export const useGlobal = () => useContext(GlobalContext);
