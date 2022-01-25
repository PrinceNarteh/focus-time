import { createContext, useState } from "react";

export const FocusContext = createContext<{
  focusSubject: string | null;
  setFocusSubject: React.Dispatch<React.SetStateAction<string | null>>;
}>({ focusSubject: null, setFocusSubject: () => {} });

export const FocusProvider = ({ children }: { children: React.ReactNode }) => {
  const [focusSubject, setFocusSubject] = useState<string | null>(
    "God Is Good"
  );

  return (
    <FocusContext.Provider value={{ focusSubject, setFocusSubject }}>
      {children}
    </FocusContext.Provider>
  );
};
