import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { theme } from "./../../utils/theme";
import { CountDown } from "../../components/CountDown";

interface TimerProps {
  focusSubject: string;
}

export const Timer = ({ focusSubject }: TimerProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.countDownContainer}>
        <CountDown />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.title}>Focusing on:</Text>
        <Text style={styles.task}>{focusSubject}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  countDownContainer: {
    flex: 0.5,
    justifyContent: "center",
    alignItems: "center",
  },
  textContainer: {
    paddingTop: theme.spacing.xxl,
  },
  title: {
    color: theme.colors.white,
    textAlign: "center",
    fontSize: theme.fontSizes.lg,
  },
  task: {
    color: theme.colors.white,
    textAlign: "center",
    fontWeight: "bold",
    fontSize: theme.fontSizes.lg,
  },
});
