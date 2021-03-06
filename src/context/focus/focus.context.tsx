import { createContext, useState } from "react";
import { TimerProvider } from "../timer/timer.context";

export const FocusContext = createContext<{
  focusSubject: string | null;
  setFocusSubject: React.Dispatch<React.SetStateAction<string | null>>;
}>({ focusSubject: null, setFocusSubject: () => {} });

export const FocusProvider = ({ children }: { children: React.ReactNode }) => {
  const [focusSubject, setFocusSubject] = useState<string | null>(null);

  return (
    <FocusContext.Provider value={{ focusSubject, setFocusSubject }}>
      <TimerProvider>{children}</TimerProvider>
    </FocusContext.Provider>
  );
};
