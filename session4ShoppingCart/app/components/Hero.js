import { Text, StyleSheet, View, ImageBackground } from "react-native";
import React, { Component } from "react";
import HeroText from "./HeroText";

export default class Hero extends Component {
  render() {
    return (
      <ImageBackground
        source={require("../images/hero.jpeg")}
        style={styles.heroImage}
      >
        <HeroText />
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  heroImage: {
    flex: 1,
    height: 250,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
});
