import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, ScrollView } from "react-native";
import Body from "./app/components/Body";
import Header from "./app/components/Header";
import Hero from "./app/components/Hero";

export default function App() {
  return (
    <ScrollView horizontal={false} style={styles.container}>
      <Header />
      <Hero />
      <Body />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
  },
});
