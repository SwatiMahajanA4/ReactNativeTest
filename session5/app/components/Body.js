import { StyleSheet, ScrollView, Image, View, Dimensions } from "react-native";
import React, { Component } from "react";

export default class Body extends Component {
  getImage() {
    return Math.trunc(Math.random() * 6) + 1;
  }
  render() {
    return (
      <ScrollView style={styles.scrollView}>
        <View style={styles.wrapperViewElement}>
          <View style={styles.imageViewElement}>
            <Image
              style={styles.imageElement}
              source={require(`../images/img_(1).jpg`)}
            />
          </View>
          <View style={styles.imageViewElement}>
            <Image
              style={styles.imageElement}
              source={require(`../images/img_(2).jpg`)}
            />
          </View>
          <View style={styles.imageViewElement}>
            <Image
              style={styles.imageElement}
              source={require(`../images/img_(3).jpg`)}
            />
          </View>
          <View style={styles.imageViewElement}>
            <Image
              style={styles.imageElement}
              source={require(`../images/img_(4).jpg`)}
            />
          </View>
          <View style={styles.imageViewElement}>
            <Image
              style={styles.imageElement}
              source={require(`../images/img_(5).jpg`)}
            />
          </View>
          <View style={styles.imageViewElement}>
            <Image
              style={styles.imageElement}
              source={require(`../images/img_(6).jpg`)}
            />
          </View>
          <View style={styles.imageViewElement}>
            <Image
              style={styles.imageElement}
              source={require(`../images/img_(7).jpg`)}
            />
          </View>
          <View style={styles.imageViewElement}>
            <Image
              style={styles.imageElement}
              source={require(`../images/img_(8).jpg`)}
            />
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
  },
  wrapperViewElement: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  imageViewElement: {},
  imageElement: {
    margin: 2,
    height: 100,
    width: Dimensions.get("window").width / 2 - 4,
  },
});
