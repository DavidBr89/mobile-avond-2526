import { StyleSheet, Text, View } from "react-native";
import React from "react";
import BlueText from "./BlueText";

const Test = () => {
  return (
    <View style={styles.container}>
      <BlueText>Test</BlueText>
    </View>
  );
};

export default Test;

const styles = StyleSheet.create({
  container: {
    flex: 8,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },
});
