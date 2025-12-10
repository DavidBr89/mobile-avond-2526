import { StyleSheet, Text, View, TextProps } from "react-native";
import React, { PropsWithChildren } from "react";

// interface BlueTextProps {
//   children?: React.ReactNode;
// }

// Hoge orde component
// Wrapper rond de React Native Text component
const BlueText = (props: TextProps) => {
  return (
    <Text {...props} style={[styles.text, props.style]}>
      {props.children}
    </Text>
  );
};

export default BlueText;

const styles = StyleSheet.create({
  text: {
    fontFamily: "Bitcount",
    color: "blue",
  },
});
