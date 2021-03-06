import { StyleSheet, Text, View, FlatList, SafeAreaView } from "react-native";
import React from "react";
import { theme } from "../../utils/theme";
import { RoundedButton } from "../../components/RoundedButton";

interface IFocusHistory {
  subject: string;
  status: number;
}

interface FocusHistoryProps {
  focusHistory: IFocusHistory[];
  onClear: () => void;
}

const historyItem = ({
  item,
  index,
}: {
  item: IFocusHistory;
  index: number;
}) => {
  return <Text style={styles(item.status).historyItem}>{item.subject}</Text>;
};

export const FocusHistory = ({ focusHistory, onClear }: FocusHistoryProps) => {
  const clearHistory = () => {
    onClear();
  };

  return (
    <>
      <SafeAreaView style={{ flex: 0.5, alignItems: "center" }}>
        <View>
          {!!focusHistory.length && (
            <>
              <Text style={styles().title}>Things we've focus on.</Text>
              <FlatList
                style={{ flex: 1 }}
                contentContainerStyle={{ flex: 1, alignItems: "center" }}
                data={focusHistory}
                renderItem={historyItem}
                keyExtractor={(item) => item.subject}
              />
              <View style={styles().clearContainer}>
                <RoundedButton
                  size={75}
                  title="Clear"
                  onPress={() => onClear()}
                />
              </View>
            </>
          )}
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = (status?: number) =>
  StyleSheet.create({
    historyItem: {
      color: status === 1 ? "green" : "red",
      fontSize: theme.fontSizes.md,
    },
    title: {
      color: theme.colors.white,
      fontSize: theme.fontSizes.lg,
    },
    clearContainer: {
      alignItems: "center",
      padding: theme.spacing.md,
    },
  });
