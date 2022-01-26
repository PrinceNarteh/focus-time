import React, { useEffect, useState } from "react";
import { Platform, StyleSheet, View } from "react-native";
import { Focus } from "../features/focus/Focus";
import { FocusHistory } from "../features/focus/FocusHistory";
import { Timer } from "../features/timer/Timer";
import { useFocus } from "../hooks/useFocus";
import { theme } from "../utils/theme";

interface IFocusHistory {
  subject: string;
  status: number;
}

const STATUS = {
  COMPLETED: 1,
  CANCELLED: 2,
};

export default function HomeScreen() {
  const { focusSubject, setFocusSubject } = useFocus();
  const [focusHistory, setFocusHistory] = useState<IFocusHistory[]>([]);

  const addFocusHistorySubjectWithStatus = (
    subject: string,
    status: number
  ) => {
    setFocusHistory([...focusHistory, { subject, status }]);
  };

  const onClear = () => {};

  return (
    <View style={styles.container}>
      {focusSubject ? (
        <Timer
          onTimerEnd={() => {
            addFocusHistorySubjectWithStatus(focusSubject, STATUS.COMPLETED);
            () => setFocusSubject(null);
          }}
          addFocusHistory={addFocusHistorySubjectWithStatus}
        />
      ) : (
        <>
          <Focus />
          <FocusHistory focusHistory={focusHistory} onClear={() => onClear} />
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.darkBlue,
    paddingTop: Platform.OS === "ios" ? theme.spacing.md : theme.spacing.lg,
  },
});
