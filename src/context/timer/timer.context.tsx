import { createContext, useReducer } from "react";
import { timerReducer, initialState } from "./timer.reducer";

export interface ITimerContext {
  minutes: number;
  isStarted: boolean;
  progress: number;
  dispatch: React.Dispatch<any>;
}

export const TimerContext = createContext<ITimerContext>(initialState);

export const TimerProvider = ({ children }: { children: React.ReactNode }) => {
  const [{ minutes, progress, isStarted }, dispatch] = useReducer(
    timerReducer,
    initialState
  );

  return (
    <TimerContext.Provider value={{ minutes, progress, isStarted, dispatch }}>
      {children}
    </TimerContext.Provider>
  );
};
