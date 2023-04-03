import { Text, StyleSheet, View, Image, ImageBackground } from "react-native";
import React, { Component } from "react";

export default class Header extends Component {
  render() {
    return (
      <ImageBackground
        style={styles.headerBg}
        source={require("../images/headerbg.jpg")}
      >
        <View style={styles.headerContainer}>
          <View style={styles.profilePicView}>
            <Image
              style={styles.profileImage}
              source={require("../images/profilepic.jpg")}
            />
          </View>
          <Text style={styles.name}>Minion</Text>
          <Text style={styles.liner}>Et pis c’est tout</Text>
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  headerBg: {
    flex: 1,
    width: null,
    alignSelf: "stretch",
  },
  headerContainer: {
    backgroundColor: "rgba(0,0,0,0.7)",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  profilePicView: {
    height: 120,
    width: 120,
  },
  profileImage: {
    flex: 1,
    borderRadius: 100,
    width: null,
    alignSelf: "stretch",
    borderWidth: 3,
    borderColor: "rgb(255,255,255)",
  },
  name: {
    color: "#ffffff",
    marginTop: 10,
    fontSize: 16,
    fontWeight: "bold",
  },
  liner: {
    marginTop: 5,
    color: "#ffffff",
  },
});
