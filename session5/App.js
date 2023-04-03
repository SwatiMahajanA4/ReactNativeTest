import { StyleSheet, Text, View } from "react-native";
import Body from "./app/components/Body";
import Header from "./app/components/Header";
import Mid from "./app/components/Mid";

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <Mid />
      <Body />
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
