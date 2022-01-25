import { useContext } from "react";
import { FocusContext } from "../context/focus/focus.context";

export const useFocus = () => {
  const { focusSubject, setFocusSubject } = useContext(FocusContext);

  return { focusSubject, setFocusSubject };
};
