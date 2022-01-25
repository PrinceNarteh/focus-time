export const TimerActionTypes = {
  SET_MINUTES: "SET_MINUTES",
  SET_IS_STARTED: "SET_IS_STARTED",
  SET_PROGRESS: "SET_PROGRESS",
  RESET: "RESET",
  CANCEL: "CANCEL",
};

export const TimerAction = {
  setMinutes: (minutes: number) => ({
    type: TimerActionTypes.SET_MINUTES,
    payload: minutes,
  }),
  setIsStarted: (value: boolean) => ({
    type: TimerActionTypes.SET_IS_STARTED,
    payload: value,
  }),
  setProgress: (progress: number) => ({
    type: TimerActionTypes.SET_PROGRESS,
    payload: progress,
  }),
  cancel: () => ({
    type: TimerActionTypes.CANCEL,
  }),
  reset: () => ({
    type: TimerActionTypes.RESET,
  }),
};
