import { TimerActionTypes } from "./timer.action";
import { ITimerContext } from "./timer.context";

export const initialState: ITimerContext = {
  minutes: 0.1,
  isStarted: false,
  progress: 1,
  dispatch: () => {},
};

export const timerReducer = (
  state: ITimerContext,
  action: any
): ITimerContext => {
  switch (action.type) {
    case TimerActionTypes.SET_MINUTES: {
      return { ...state, minutes: action.payload };
    }
    case TimerActionTypes.SET_PROGRESS:
      return { ...state, progress: action.payload };
    case TimerActionTypes.SET_IS_STARTED:
      return { ...state, isStarted: !action.payload };
    case TimerActionTypes.RESET:
      return initialState;
    default:
      return state;
  }
};
