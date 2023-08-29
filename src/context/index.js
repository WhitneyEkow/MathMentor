"use client";

import { createContext, useState } from "react";
import { ThemeProvider } from "next-themes";
export const GlobalContext = createContext({});

export default function GlobalState({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <GlobalContext.Provider
      value={{
        sidebarOpen,
        setSidebarOpen,
      }}
    >
      <ThemeProvider attribute="class">{children}</ThemeProvider>
    </GlobalContext.Provider>
  );
}
