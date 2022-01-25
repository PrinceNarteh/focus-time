import React from "react";
import { Platform, StyleSheet, View } from "react-native";
import { Focus } from "../features/focus/Focus";
import { Timer } from "../features/timer/Timer";
import { useFocus } from "../hooks/useFocus";
import { theme } from "../utils/theme";

export default function HomeScreen() {
  const { focusSubject, setFocusSubject } = useFocus();

  return (
    <View style={styles.container}>
      {focusSubject ? (
        <Timer onTimerEnd={() => setFocusSubject(null)} />
      ) : (
        <Focus />
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
