import { View, Text } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { ParkingsTabParamsList } from "./types";
import ParkingsListScreen from "../screens/ParkingsListScreen";
import ParkingsStackNavigator from "./ParkingsStackNavigator";
import ParkingsMapScreen from "../screens/ParkingsMapScreen";
import ParkingsSettingsScreen from "../screens/ParkingsSettingsScreen";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import ParkingsDrawerNavigator from "./ParkingsDrawerNavigator";
import FavoritesScreen from "../screens/FavoritesScreen";

const ParkingsTab = createBottomTabNavigator<ParkingsTabParamsList>();

const ParkingsTabNavigator = () => {
  return (
    <ParkingsTab.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "#1d40be",
        },
        headerTintColor: "white",
        tabBarStyle: {
          backgroundColor: "#1d40be",
        },
        tabBarActiveTintColor: "white",
        tabBarInactiveTintColor: "#020169ed",
      }}>
      <ParkingsTab.Screen
        name="parkingsStack"
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
        name="favorites"
        component={FavoritesScreen}
        options={{
          title: "Favorieten",
          tabBarIcon: ({ color, size }) => {
            return (
              <MaterialCommunityIcons name="star" color={color} size={size} />
            );
          },
        }}
      />
      <ParkingsTab.Screen
        name="settingsDrawer"
        component={ParkingsDrawerNavigator}
        options={{
          title: "Instellingen",
          headerShown: false,
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
