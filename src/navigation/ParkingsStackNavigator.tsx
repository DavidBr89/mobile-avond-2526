import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ParkingsListScreen from "../screens/ParkingsListScreen";
import ParkingsDetailScreen from "../screens/ParkingsDetailScreen";
import { ParkingsStackNavProps, ParkingsStackParamsList } from "./types";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import AddParkingScreen from "../screens/AddParkingScreen";
import { useNavigation } from "@react-navigation/native";

const ParkingsStack = createStackNavigator<ParkingsStackParamsList>();

const ParkingsStackNavigator = () => {
  // const navigation =
  //   useNavigation<ParkingsStackNavProps<"home">["navigation"]>();

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
        options={({ navigation }) => ({
          title: "Parkings",
          headerRight: ({ tintColor }) => (
            <TouchableOpacity
              className="p-2 mr-2 mb-2 rounded-full bg-amber-500"
              onPress={() => {
                // Navigeer naar addParking
                navigation.navigate("addParking");
              }}>
              <MaterialCommunityIcons name="plus" color={tintColor} size={20} />
            </TouchableOpacity>
          ),
        })}
      />
      <ParkingsStack.Screen name="detail" component={ParkingsDetailScreen} />
      <ParkingsStack.Screen name="addParking" component={AddParkingScreen} />
    </ParkingsStack.Navigator>
  );
};

export default ParkingsStackNavigator;
