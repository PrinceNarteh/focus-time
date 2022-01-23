import { StyleSheet, Text, View } from "react-native";
import React, { useRef, useState, useEffect } from "react";
import { theme } from "../utils/theme";

interface CountDownProps {
  minutes?: number;
  isPaused?: boolean;
}

const minutesToMilliseconds = (mins: number) => mins * 1000 * 60;
const formatTime = (time: number) => (time < 10 ? `0${time}` : time);

export const CountDown = ({
  minutes = 20,
  isPaused = false,
}: CountDownProps) => {
  const [millis, setMillis] = useState<number>(minutesToMilliseconds(minutes));
  const internal = useRef<ReturnType<typeof setTimeout> | null>(null);

  const mins = Math.floor(millis / 1000 / 60) % 60;
  const secs = Math.floor(millis / 1000) % 60;

  const countDown = () => {
    setMillis((time) => {
      if (time === 0) {
        return time;
      }
      const timeLeft = time - 1000;
      return timeLeft;
    });
  };

  useEffect(() => {
    if (isPaused) return;

    internal.current = setInterval(countDown, 1000);

    return () => clearInterval(internal.current as any);
  }, [isPaused]);

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
