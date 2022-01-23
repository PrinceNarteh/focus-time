import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { theme } from "./../../utils/theme";
import { CountDown } from "../../components/CountDown";
import { RoundedButton } from "../../components/RoundedButton";

interface TimerProps {
  focusSubject: string;
}

export const Timer = ({ focusSubject }: TimerProps) => {
  const [isStarted, setIsStarted] = useState<boolean>(false);
  return (
    <View style={styles.container}>
      <View style={styles.countDownContainer}>
        <CountDown isPaused={!isStarted} />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.title}>Focusing on:</Text>
        <Text style={styles.task}>{focusSubject}</Text>
      </View>
      <View style={styles.btnWrapper}>
        <RoundedButton
          size={150}
          title={isStarted ? "Pause" : "Start"}
          onPress={() => setIsStarted(!isStarted)}
        />
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
  btnWrapper: {
    flex: 0.3,
    padding: 15,
    justifyContent: "center",
    alignItems: "center",
  },
});
