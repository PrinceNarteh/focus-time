import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
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

  const mins = Math.floor(millis / 1000 / 60) % 60;
  const secs = Math.floor(millis / 1000) % 60;

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
