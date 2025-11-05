import { StyleSheet, Text, View } from "react-native";
import React, { useContext } from "react";
import { FavoritesContext } from "../contexts/FavoritesContext";
import { useFavorites } from "../hooks/useFavorites";

const FavoritesScreen = () => {
  // Favorites kunnen te gebruiken

  const context = useFavorites();

  return (
    <View>
      <Text>{JSON.stringify(context.favorites)}</Text>
    </View>
  );
};

export default FavoritesScreen;

const styles = StyleSheet.create({});
