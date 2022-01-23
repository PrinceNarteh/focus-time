import { StyleSheet, Text, View, Vibration, Platform } from "react-native";
import React, { useState, useEffect } from "react";
import { theme } from "./../../utils/theme";
import { CountDown } from "../../components/CountDown";
import { RoundedButton } from "../../components/RoundedButton";
import { ProgressBar } from "react-native-paper";
import { Timing } from "./Timing";
import { useKeepAwake } from "expo-keep-awake";

interface TimerProps {
  focusSubject: string;
}

const DEFAULT_TIME = 0.1;

export const Timer = ({ focusSubject }: TimerProps) => {
  useKeepAwake();
  const [minutes, setMinutes] = useState<number>(DEFAULT_TIME);
  const [isStarted, setIsStarted] = useState<boolean>(false);
  const [progress, setProgress] = useState<number>(1);

  const vibrate = () => {
    if (Platform.OS === "ios") {
      const interval = setInterval(() => Vibration.vibrate(), 1000);
      setTimeout(() => clearInterval(interval), 10000);
    } else {
      Vibration.vibrate([1000, 2000, 1000, 3000]);
    }
  };

  const onEnd = () => {
    vibrate();
    setMinutes(DEFAULT_TIME);
    setProgress(1);
    setIsStarted(false);
  };

  useEffect(() => {
    setProgress(progress);
  }, [progress]);

  useEffect(() => {
    setMinutes(minutes);
    setProgress(1);
    setIsStarted(false);
  }, [minutes]);

  return (
    <View style={styles.container}>
      <View style={styles.countDownContainer}>
        <CountDown
          isPaused={!isStarted}
          onProgress={setProgress}
          minutes={minutes}
          onEnd={onEnd}
        />
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
        <Timing onChangeTime={setMinutes} />
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
    flexDirection: "row",
  },
});
