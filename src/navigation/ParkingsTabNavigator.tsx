import { View, Text } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { ParkingsTabParamsList } from "./types";
import ParkingsListScreen from "../screens/ParkingsListScreen";
import ParkingsStackNavigator from "./ParkingsStackNavigator";
import ParkingsMapScreen from "../screens/ParkingsMapScreen";
import ParkingsSettingsScreen from "../screens/ParkingsSettingsScreen";

import { MaterialCommunityIcons } from "@expo/vector-icons";

const ParkingsTab = createBottomTabNavigator<ParkingsTabParamsList>();

const ParkingsTabNavigator = () => {
  return (
    <ParkingsTab.Navigator>
      <ParkingsTab.Screen
        name="list"
        component={ParkingsStackNavigator}
        options={{
          title: "Lijst",
          headerShown: false,
          tabBarIcon: ({ color, size }) => {
            return (
              <MaterialCommunityIcons name="home" color={color} size={size} />
            );
          },
        }}
      />
      <ParkingsTab.Screen
        name="map"
        component={ParkingsMapScreen}
        options={{
          title: "Map",
          tabBarIcon: ({ color, size }) => {
            return (
              <MaterialCommunityIcons
                name="map-marker"
                color={color}
                size={size}
              />
            );
          },
        }}
      />
      <ParkingsTab.Screen
        name="settings"
        component={ParkingsSettingsScreen}
        options={{
          title: "Instellingen",
          tabBarIcon: ({ color, size }) => {
            return (
              <MaterialCommunityIcons name="cog" color={color} size={size} />
            );
          },
        }}
      />
    </ParkingsTab.Navigator>
  );
};

export default ParkingsTabNavigator;
