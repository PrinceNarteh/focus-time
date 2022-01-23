import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { theme } from "../utils/theme";

interface RoundedButtonProps {
  style?: object;
  textStyle?: object;
  size?: number;
  title: string;
  onPress: () => void | undefined;
}

export const RoundedButton = ({
  style = {},
  textStyle = {},
  size = 30,
  title,
  onPress,
}: RoundedButtonProps) => {
  return (
    <TouchableOpacity style={[styles(size).radius, style]} onPress={onPress}>
      <Text style={[styles(size).text, textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = (size: number) =>
  StyleSheet.create({
    radius: {
      width: size,
      height: size,
      borderRadius: size / 2,
      alignItems: "center",
      justifyContent: "center",
      borderColor: theme.colors.white,
      borderWidth: 2,
    },
    text: {
      color: theme.colors.white,
      fontSize: size / 3,
    },
  });
