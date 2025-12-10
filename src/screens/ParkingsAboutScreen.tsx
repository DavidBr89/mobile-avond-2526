import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { ParkingsDrawerNavProps } from "../navigation/types";
import { signOut } from "firebase/auth";
import { auth } from "../config/firebase";

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

      <Button
        title="Logout"
        onPress={() => {
          signOut(auth);
        }}
      />
    </View>
  );
};

export default ParkingsAboutScreen;

const styles = StyleSheet.create({});
