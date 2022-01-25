import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, View, Platform } from "react-native";
import { FocusProvider } from "./src/context/focus/focus.context";
import { Focus } from "./src/features/focus/Focus";
import { Timer } from "./src/features/timer/Timer";
import { theme } from "./src/utils/theme";
import { useFocus } from "./src/hooks/useFocus";

export default function App() {
  const { focusSubject, setFocusSubject } = useFocus();

  console.log(focusSubject);

  return (
    <FocusProvider>
      <View style={styles.container}>
        {focusSubject ? (
          <Timer
            focusSubject={focusSubject}
            onTimerEnd={() => setFocusSubject(null)}
          />
        ) : (
          <Focus />
        )}
        <StatusBar style="auto" />

        <Text>{focusSubject}</Text>
      </View>
    </FocusProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.darkBlue,
    paddingTop: Platform.OS === "ios" ? theme.spacing.md : theme.spacing.lg,
  },
});
