import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Thor from "./components/Thor";
import CapAmerica from "./components/CapAmerica";
import Hulk from "./components/Hulk";

export default function App() {
  return (
    <View style={styles.container}>
      <Thor />
      <CapAmerica />
      <Hulk />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
