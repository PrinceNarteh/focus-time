import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { RoundedButton } from "../../components/RoundedButton";

interface TimingProps {
  onChangeTime: (time: number) => void;
}

export const Timing = ({ onChangeTime }: TimingProps) => {
  return (
    <>
      <View style={styles.timingButton}>
        <RoundedButton title="10" size={75} onPress={() => onChangeTime(10)} />
      </View>
      <View style={styles.timingButton}>
        <RoundedButton title="15" size={75} onPress={() => onChangeTime(15)} />
      </View>
      <View style={styles.timingButton}>
        <RoundedButton title="20" size={75} onPress={() => onChangeTime(20)} />
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
