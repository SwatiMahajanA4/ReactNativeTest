import { Text, StyleSheet, View } from "react-native";
import React, { Component } from "react";

export default class CapAmerica extends Component {
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
    backgroundColor: "red",
  },
});
