import { Text, StyleSheet, View } from "react-native";
import React, { Component } from "react";

export default class HeroText extends Component {
  render() {
    return (
      <View>
        <Text style={styles.heroText}>Grab a Gadget</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  heroText: {
    elevation: 1,
    backgroundColor: "rgba(255,255,255,0.8)",
    alignSelf: "center",
    borderRadius: 7,
    textAlign: "center",
    padding: 5,
    fontSize: 25,
  },
});
