import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { ParkingsDrawerNavProps } from "../navigation/types";

const ParkingsAboutScreen = () => {
  const navigation =
    useNavigation<ParkingsDrawerNavProps<"about">["navigation"]>();

  return (
    <View>
      <Text>ParkingsAboutScreen</Text>

      <Button
        title="Ga naar profiel"
        onPress={() => {
          navigation.jumpTo("profile");
        }}
      />

      <Button
        title="Open drawer"
        onPress={() => {
          navigation.openDrawer();
        }}
      />
    </View>
  );
};

export default ParkingsAboutScreen;

const styles = StyleSheet.create({});
