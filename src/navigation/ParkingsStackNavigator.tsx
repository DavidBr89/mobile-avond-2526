import { View, Text } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ParkingsListScreen from "../screens/ParkingsListScreen";
import ParkingsDetailScreen from "../screens/ParkingsDetailScreen";

const ParkingsStack = createStackNavigator();

const ParkingsStackNavigator = () => {
  return (
    <ParkingsStack.Navigator>
      <ParkingsStack.Screen
        name="home"
        component={ParkingsListScreen}
        options={{
          title: "Parkings",
        }}
      />
      <ParkingsStack.Screen name="detail" component={ParkingsDetailScreen} />
    </ParkingsStack.Navigator>
  );
};

export default ParkingsStackNavigator;
