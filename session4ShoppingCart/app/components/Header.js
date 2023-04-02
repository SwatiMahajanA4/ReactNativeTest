import { Text, StyleSheet, View, Image, Dimensions } from "react-native";
import React, { Component } from "react";

export default class Header extends Component {
  render() {
    return (
      <View style={styles.headerView}>
        <Image
          source={require("../images/cartLogo.png")}
          style={styles.cartLogo}
        />
        <Text style={styles.logoText}>The TechShop App</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  headerView: {
    height: 80,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    borderBottomWidth: 4,
    borderBottomColor: "#ccc",
    width: Dimensions.get("window").width,
  },
  cartLogo: {
    height: 40,
    width: 40,
  },
  logoText: {
    marginLeft: 10,
    fontWeight: "bold",
    fontSize: 16,
  },
});
