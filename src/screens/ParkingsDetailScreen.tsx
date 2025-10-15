import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useRoute } from "@react-navigation/native";

const ParkingsDetailScreen = () => {
  const {
    params: { parking },
  } = useRoute();

  return (
    <View>
      <Text>{parking.name}</Text>
    </View>
  );
};

export default ParkingsDetailScreen;

const styles = StyleSheet.create({});
