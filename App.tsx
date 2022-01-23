import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, View, Platform } from "react-native";
import { Focus } from "./src/features/focus/Focus";
import { Timer } from "./src/features/timer/Timer";
import { theme } from "./src/utils/theme";

export default function App() {
  const [focusSubject, setFocusSubject] = useState<string | null>("Read Bible");

  return (
    <View style={styles.container}>
      {focusSubject ? (
        <Timer focusSubject={focusSubject} />
      ) : (
        <Focus addSubject={setFocusSubject} />
      )}
      <StatusBar style="auto" />

      <Text>{focusSubject}</Text>
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
