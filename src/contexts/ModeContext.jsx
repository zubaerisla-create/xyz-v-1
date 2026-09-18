import { createContext } from "react";

export const ModeContext = createContext({
  mode: true,
  setMode: () => {},
});
