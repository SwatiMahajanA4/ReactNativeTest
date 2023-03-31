import { Text, StyleSheet, Image, Dimensions, View } from "react-native";
import React, { Component } from "react";
import MyForm from "./MyForm";

export default class Login extends Component {
  render() {
    return (
      <View style={styles.loginContainer}>
        <View style={styles.logoContainer}>
          <Image source={require("./images/lcologo.png")} style={styles.logo} />
          <Text style={styles.logoText}>A lame jokes app</Text>
        </View>
        <MyForm />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  loginContainer: {
    backgroundColor: "#858786",
  },
  logoContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: Dimensions.get("window").width,
  },
  logo: {
    width: 100,
    height: 100,
  },
  logoText: {
    color: "#ffffff",
  },
});
