import { useContext, useState } from "react";
import { TimerContext } from "../context/timer/timer.context";

export const useTimer = () => {
  const time = useContext(TimerContext);
  const [minutes, setMinutes] = useState(time);
  return [minutes, setMinutes];
};
