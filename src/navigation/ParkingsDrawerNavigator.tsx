// TODO: Nieuwe drawer navigator maken met profile, about en settings screen
// Kijk goed naar de headers en nest deze navigator in de bottom tab navigator
// Header stylen, drawer stylen

import { createDrawerNavigator } from "@react-navigation/drawer";
import { ParkingsDrawerParamsList } from "./types";

const ParkingDrawerNavigator =
  createDrawerNavigator<ParkingsDrawerParamsList>();

import React from "react";
import ParkingsAboutScreen from "../screens/ParkingsAboutScreen";
import ParkingsProfileScreen from "../screens/ParkingsProfileScreen";
import ParkingsSettingsScreen from "../screens/ParkingsSettingsScreen";

const ParkingsDrawerNavigator = () => {
  return (
    <ParkingDrawerNavigator.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "#1d40be",
        },
        headerTintColor: "white",
        drawerStyle: {
          backgroundColor: "#1d40be",
        },
        drawerActiveBackgroundColor: "#d3af37",
        drawerActiveTintColor: "white",
      }}>
      <ParkingDrawerNavigator.Screen
        name="about"
        options={{
          title: "Over ons",
        }}
        component={ParkingsAboutScreen}
      />
      <ParkingDrawerNavigator.Screen
        options={{
          title: "Profiel",
        }}
        name="profile"
        component={ParkingsProfileScreen}
      />
      <ParkingDrawerNavigator.Screen
        name="settings"
        options={{
          title: "Instellingen",
        }}
        component={ParkingsSettingsScreen}
      />
    </ParkingDrawerNavigator.Navigator>
  );
};

export default ParkingsDrawerNavigator;
