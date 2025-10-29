import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { ParkingsStackNavProps } from "../navigation/types";

const ParkingsDetailScreen = () => {
  const {
    params: { parking },
  } = useRoute<ParkingsStackNavProps<"detail">["route"]>();

  const navigation =
    useNavigation<ParkingsStackNavProps<"detail">["navigation"]>();

  return (
    <View>
      <Text>{parking.name}</Text>
      <Button
        title="POP TO TOP"
        onPress={() => {
          navigation.popToTop();
        }}
      />
    </View>
  );
};

export default ParkingsDetailScreen;

const styles = StyleSheet.create({});
