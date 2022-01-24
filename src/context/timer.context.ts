import { createContext } from "react";

const DEFAULT_TIME = 0.1;
const TimerContext = createContext<number>(DEFAULT_TIME);

export const TimerProvider = ({ children }: { children: React.ReactNode }) => {
  return <TimerContext.Provider value={{}}>{children}</TimerContext.Provider>;
};
