import React, { useEffect, useState } from "react";
import { AsyncStorage, Platform, StyleSheet, View } from "react-native";
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

  const saveFocusHistory = async () => {
    try {
      AsyncStorage.setItem("focusHistory", JSON.stringify(focusHistory));
    } catch (e) {
      console.log(e);
    }
  };

  const loadFocusHistory = async () => {
    try {
      const history = await AsyncStorage.getItem("focusHistory");

      if (history && JSON.parse(history)) {
        setFocusHistory(JSON.parse(history));
      }
    } catch (error) {
      console.log(error);
    }
  };

  const onClear = () => {
    setFocusHistory([]);
  };

  useEffect(() => {
    loadFocusHistory();
  }, []);

  useEffect(() => {
    saveFocusHistory();
  }, [focusHistory]);

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
