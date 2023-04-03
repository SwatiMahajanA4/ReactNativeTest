import { Text, StyleSheet, View } from "react-native";
import React, { Component } from "react";

export default class Mid extends Component {
  render() {
    return (
      <View style={styles.mid}>
        <View style={styles.innerView}>
          <Text style={styles.counts}>7 +</Text>
          <Text style={styles.valueTitle}>Images</Text>
        </View>
        <View style={[styles.innerView, styles.leftBorder]}>
          <Text style={styles.counts}>77K +</Text>
          <Text style={styles.valueTitle}>Followers</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mid: {
    borderTopWidth: 7,
    borderTopColor: "#ffffff",
    flexDirection: "row",
  },
  innerView: {
    backgroundColor: "#0077B6",
    flex: 1,
    alignItems: "center",
    paddingVertical: 20,
  },
  counts: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "bold",
  },
  valueTitle: {
    color: "#ffffff",
    fontSize: 13,
  },
  leftBorder: {
    borderLeftWidth: 3,
    borderLeftColor: "#ffffff",
  },
});
