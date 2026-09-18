"use client";

import { useEffect, useState } from "react";
import { ModeContext } from "./ModeContext";

const DarkModeProvider = ({ children }) => {
  const [mode, setMode] = useState(false);

  useEffect(() => {
    if (typeof document !== "undefined") {
      const root = document.documentElement;
      if (mode) {
        root.classList.add("dark");
      } else {
        root.classList.remove("dark");
      }
    }
  }, [mode]);

  return (
    <ModeContext.Provider value={{ mode, setMode }}>
      {children}
    </ModeContext.Provider>
  );
};

export default DarkModeProvider;
