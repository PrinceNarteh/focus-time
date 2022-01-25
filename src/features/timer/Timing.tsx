import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { RoundedButton } from "../../components/RoundedButton";
import { useTimer } from "../../hooks/useTimer";
import { TimerAction } from "../../context/timer/timer.action";

export const Timing = () => {
  const { dispatch } = useTimer();

  const handleTimeChange = (mins: number) => {
    dispatch(TimerAction.setMinutes(mins));
  };
  return (
    <>
      <View style={styles.timingButton}>
        <RoundedButton
          title="10"
          size={75}
          onPress={() => handleTimeChange(10)}
        />
      </View>
      <View style={styles.timingButton}>
        <RoundedButton
          title="15"
          size={75}
          onPress={() => handleTimeChange(15)}
        />
      </View>
      <View style={styles.timingButton}>
        <RoundedButton
          title="20"
          size={75}
          onPress={() => handleTimeChange(20)}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  timingButton: {
    flex: 1,
    alignItems: "center",
  },
});
