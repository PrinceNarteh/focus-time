import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { TextInput } from "react-native-paper";
import { RoundedButton } from "../../components/RoundedButton";
import { theme } from "../../utils/theme";

interface FocusProps {
  addSubject: React.Dispatch<React.SetStateAction<string | null>>;
}

export const Focus = ({ addSubject }: FocusProps) => {
  const [subject, setSubject] = useState<string | null>(null);

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>What would you like to focus on?</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            autoComplete={true}
            onSubmitEditing={({ nativeEvent }) => setSubject(nativeEvent.text)}
          />
          <RoundedButton
            title="+"
            size={50}
            onPress={() => addSubject(subject)}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  titleContainer: {
    flex: 0.5,
    padding: theme.spacing.md,
    justifyContent: "center",
  },
  title: {
    color: theme.colors.white,
    fontWeight: "bold",
    fontSize: theme.fontSizes.lg,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingTop: theme.spacing.md,
  },
  input: {
    flex: 1,
    marginRight: theme.spacing.md,
  },
});
