import { Text, StyleSheet, View } from "react-native";
import React, { Component } from "react";
import ImageComponent from "./ImageComponent";

export default class Body extends Component {
  render() {
    return (
      <View style={styles.bodyContainer}>
        <View style={styles.columnsContainer}>
          <View style={styles.column1}>
            <ImageComponent imageSource={require("../images/img2.jpeg")} />
          </View>
          <View style={styles.column2}>
            <ImageComponent imageSource={require("../images/img3.jpeg")} />
          </View>
        </View>
        <View style={styles.full}>
          <ImageComponent imageSource={require("../images/img4.jpg")} />
        </View>

        <View style={styles.columnsContainer}>
          <View style={styles.column1}>
            <ImageComponent imageSource={require("../images/img6.jpeg")} />
          </View>
          <View style={styles.column2}>
            <ImageComponent imageSource={require("../images/img5.jpeg")} />
          </View>
        </View>
        <View style={styles.full}>
          <ImageComponent imageSource={require("../images/img2.jpeg")} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  bodyContainer: {
    flex: 1,
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center",
  },
  columnsContainer: {
    flexDirection: "row",
  },
  column1: {
    flex: 1,
    padding: 2,
  },
  column2: {
    flex: 2,
    padding: 2,
  },
  full: {
    width: "100%",
    padding: 2,
  },
});
