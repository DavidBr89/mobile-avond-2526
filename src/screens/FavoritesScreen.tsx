import { FlatList, StyleSheet, Text, View } from "react-native";
import React, { useContext } from "react";
import { FavoritesContext } from "../contexts/FavoritesContext";
import { useFavorites } from "../hooks/useFavorites";
import { useDispatch, useSelector } from "react-redux";
import { useAppSelector } from "../hooks/reduxHooks";

const FavoritesScreen = () => {
  // Favorites kunnen te gebruiken

  // Gebruik makend van de context
  // const { favorites } = useFavorites();

  // Gebruik makend van Redux
  const favorites = useAppSelector((storeState) => storeState);

  return (
    <View className="flex-1">
      <FlatList
        className="flex-1"
        data={favorites}
        numColumns={2}
        renderItem={({ item }) => {
          return (
            <View className="m-4 flex-1 p-4 bg-white shadow-lg">
              <Text className="font-bold text-xl">{item.name}</Text>
            </View>
          );
        }}
        keyExtractor={(item) => item.id}
      />
      {/* <Text>{JSON.stringify(favorites)}</Text> */}
    </View>
  );
};

export default FavoritesScreen;

const styles = StyleSheet.create({});
