import { StyleSheet, Text, View, Vibration, Platform } from "react-native";
import React, { useState, useEffect } from "react";
import { theme } from "./../../utils/theme";
import { CountDown } from "../../components/CountDown";
import { RoundedButton } from "../../components/RoundedButton";
import { ProgressBar } from "react-native-paper";
import { Timing } from "./Timing";
import { useKeepAwake } from "expo-keep-awake";
import { useFocus } from "../../hooks/useFocus";
import { useTimer } from "../../hooks/useTimer";
import { TimerAction } from "../../context/timer/timer.action";

interface TimerProps {
  onTimerEnd: () => void;
}

export const Timer = ({ onTimerEnd }: TimerProps) => {
  useKeepAwake();
  const { minutes, isStarted, progress, dispatch } = useTimer();
  const { focusSubject, setFocusSubject } = useFocus();

  const vibrate = () => {
    if (Platform.OS === "ios") {
      const interval = setInterval(() => Vibration.vibrate(), 1000);
      setTimeout(() => clearInterval(interval), 10000);
    } else {
      Vibration.vibrate([500, 1000, 600, 1200]);
    }
  };

  const onEnd = () => {
    vibrate();
    dispatch(TimerAction.reset());
    onTimerEnd();
  };

  useEffect(() => {
    dispatch(TimerAction.setProgress(progress));
  }, [progress]);

  return (
    <View style={styles.container}>
      <View style={styles.countDownContainer}>
        <CountDown isPaused={!isStarted} minutes={minutes} onEnd={onEnd} />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.title}>Focusing on:</Text>
        <Text style={styles.task}>{focusSubject}</Text>
      </View>
      <ProgressBar
        color="#5E84E2"
        style={{ height: 10, margin: theme.spacing.md, borderRadius: 5 }}
        progress={progress}
      />
      <View style={styles.btnWrapper}>
        <Timing />
      </View>
      <View style={styles.btnWrapper}>
        <RoundedButton
          size={150}
          title={isStarted ? "Pause" : "Start"}
          onPress={() => dispatch(TimerAction.setIsStarted(isStarted))}
        />
        <RoundedButton
          size={50}
          title="Cancel"
          textStyle={{ fontSize: 10 }}
          onPress={() => setFocusSubject(null)}
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
    flexDirection: "row",
  },
});
