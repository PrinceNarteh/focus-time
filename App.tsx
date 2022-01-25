import { StatusBar } from "expo-status-bar";
import { FocusProvider } from "./src/context/focus/focus.context";
import HomeScreen from "./src/screens/HomeScreen";

export default function App() {
  return (
    <FocusProvider>
      <StatusBar style="auto" />
      <HomeScreen />
    </FocusProvider>
  );
}
