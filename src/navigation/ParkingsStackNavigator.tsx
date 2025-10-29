import { View, Text } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ParkingsListScreen from "../screens/ParkingsListScreen";
import ParkingsDetailScreen from "../screens/ParkingsDetailScreen";
import { ParkingsStackParamsList } from "./types";

const ParkingsStack = createStackNavigator<ParkingsStackParamsList>();

const ParkingsStackNavigator = () => {
  return (
    <ParkingsStack.Navigator
      screenOptions={{
        // header: ({ options }) => (
        //   <View className="h-36 bg-sky-600 flex justify-end items-center p-6">
        //     <Text className="text-2xl font-black text-white">
        //       {options.title}
        //     </Text>
        //   </View>
        // ),
        headerStyle: {
          backgroundColor: "#1d40be",
        },
        headerTintColor: "white",
      }}>
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
