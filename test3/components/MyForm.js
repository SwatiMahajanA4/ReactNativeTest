import {
  Text,
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { Component } from "react";
import { counterEvent } from "react-native/Libraries/Performance/Systrace";

export default class MyForm extends Component {
  render() {
    return (
      <View style={styles.formContainer}>
        <TextInput style={styles.inputField} placeholder="Username" />
        <TextInput
          style={styles.inputField}
          placeholder="Password"
          secureTextEntry={true}
        />
        <View style={styles.buttonView}></View>
        <TouchableOpacity style={styles.buttonContainer}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  formContainer: {
    flex: 1,
    paddingHorizontal: 20,
  },
  inputField: {
    paddingLeft: 10,
    paddingVertical: 5,
    marginBottom: 10,
    backgroundColor: "rgba(255, 255, 255, 0.8)",
  },
  buttonView: {
    // flex: 1,
    // justifyContent: "center",
  },
  buttonContainer: {
    backgroundColor: "#CAB7A2",
    // width: 50,
    // alignSelf: "flex-start",
  },
  buttonText: {
    padding: 10,
    textAlign: "center",
  },
});
