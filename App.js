import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, View, NativeModules } from "react-native";
import { COLORS } from "./components/Constants";
import Header from "./components/Header";
import Clients from "./pages/Clients";
const { StatusBarManager } = NativeModules;

export default function App() {
  return (
    <View>
      <SafeAreaView style={{ backgroundColor: COLORS.appBackground, paddingTop: StatusBarManager.HEIGHT, minHeight: "100%" }}>
        <Clients />
        <StatusBar style="auto" />
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "",
    alignItems: "center",
    justifyContent: "center",
  },
});
