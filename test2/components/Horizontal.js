import { Text, StyleSheet, View } from "react-native";
import React, { Component } from "react";
import { ScrollView, Dimensions } from "react-native";

export default class Horizontal extends Component {
  render() {
    return (
      <ScrollView
        horizontal={true}
        pagingEnabled={true}
        style={styles?.container}
      >
        <View style={styles?.viewOne}>
          <Text style={styles?.innerText}>Welcome to JustKidding</Text>
        </View>
        <View style={[styles.viewOne, styles?.viewTwo]}>
          <Text style={styles?.innerText}>
            Find the most lame jokes in here
          </Text>
        </View>
        <View style={[styles.viewOne, styles?.viewThree]}>
          <Text style={styles?.innerText}>On Android and iOS</Text>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {},
  viewOne: {
    backgroundColor: "#b4ada3",
    justifyContent: "center",
    alignItems: "center",
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
  viewTwo: { backgroundColor: "#BFB59E" },
  viewThree: { backgroundColor: "#CAB7A2" },
  innerText: {
    color: "#ffffff",
    fontSize: 25,
    textAlign: "center",
  },
});
