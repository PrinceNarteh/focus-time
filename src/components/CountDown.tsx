import { StyleSheet, Text, View } from "react-native";
import React, { useRef, useState, useEffect } from "react";
import { theme } from "../utils/theme";
import { useTimer } from "../hooks/useTimer";
import { TimerAction } from "../context/timer/timer.action";

interface CountDownProps {
  minutes?: number;
  isPaused?: boolean;
  onEnd: () => void;
}

const minutesToMilliseconds = (mins: number) => mins * 1000 * 60;
const formatTime = (time: number) => (time < 10 ? `0${time}` : time);

export const CountDown = ({
  minutes,
  isPaused = false,
  onEnd,
}: CountDownProps) => {
  const { dispatch } = useTimer();
  const [millis, setMillis] = useState<number>(0);
  const internal = useRef<ReturnType<typeof setTimeout> | null>(null);

  const mins = Math.floor(millis / 1000 / 60) % 60;
  const secs = Math.floor(millis / 1000) % 60;

  useEffect(() => {
    const countDown = () => {
      setMillis((time) => {
        if (time === 0) {
          clearInterval(internal.current as any);
          onEnd();
          return time;
        }
        const timeLeft = time - 1000;
        dispatch(
          TimerAction.setProgress(
            timeLeft / minutesToMilliseconds(!minutes ? 0 : minutes)
          )
        );
        return timeLeft;
      });
    };

    if (isPaused) {
      if (internal.current) clearInterval(internal.current);
      return;
    }

    internal.current = setInterval(countDown, 1000);

    return () => clearInterval(internal.current as any);
  }, [isPaused]);

  useEffect(() => {
    setMillis(minutesToMilliseconds(!minutes ? 0 : minutes));
  }, [minutes]);

  return (
    <View>
      <Text style={styles.text}>
        {formatTime(mins)}:{formatTime(secs)}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontWeight: "bold",
    fontSize: theme.fontSizes.xxxl,
    color: theme.colors.white,
    padding: theme.spacing.lg,
    backgroundColor: "rgba(94, 132, 226, 0.3)",
  },
});
