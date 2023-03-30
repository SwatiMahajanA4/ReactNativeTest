import { Component } from "react";
import { View, StyleSheet, Text } from "react-native";

export default class Hulk extends Component {
  render() {
    return (
      <View>
        <Text style={styles?.text}></Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    width: 100,
    height: 100,
    backgroundColor: "green",
  },
});
