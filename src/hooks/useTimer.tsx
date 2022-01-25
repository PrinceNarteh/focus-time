import { useContext } from "react";
import { TimerContext } from "../context/timer/timer.context";

export const useTimer = () => {
  const { isStarted, minutes, progress, dispatch } = useContext(TimerContext);

  return { isStarted, minutes, progress, dispatch };
};
