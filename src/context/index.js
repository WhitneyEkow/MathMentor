"use client";

import { createContext } from "react";

export const GlobalContext = createContext({});

export default function GlobalState({ children }) {
  return (
    <GlobalContext.Provider value={{}}>
      {children}
    </GlobalContext.Provider>
  );
}
