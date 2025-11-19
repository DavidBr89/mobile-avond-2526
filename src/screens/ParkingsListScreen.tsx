import {
  ActivityIndicator,
  Button,
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import Axios from "axios";
import { useNavigation } from "@react-navigation/native";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import { ParkingsStackNavProps } from "../navigation/types";
import { useQuery } from "@tanstack/react-query";
import { fetchParkings } from "../api/parkings";
import { useFavorites } from "../hooks/useFavorites";
import { useAppDispatch, useAppSelector } from "../hooks/reduxHooks";
import { add, remove } from "../store/favorites/slice";

const URL =
  "https://data.stad.gent/api/explore/v2.1/catalog/datasets/bezetting-parkeergarages-real-time/records";

interface AxiosParkingResponse {
  total_count: number;
  results: Parking[];
}

const ParkingsListScreen = () => {
  //   const [count, setCount] = useState(0);

  const navigation =
    useNavigation<ParkingsStackNavProps<"home">["navigation"]>();

  const { toggleFavorite, isInFavorites } = useFavorites();

  const dispatch = useAppDispatch();

  const favorites = useAppSelector((storeState) => storeState.favorites);

  // const navigation = useNavigation();

  // const [parkings, setParkings] = useState<Parking[]>([]);

  // useEffect(() => {
  //   // OPGELET: De callback functie dat je meegeeft in een useEffect mag geen async functie zijn return Promise<void>
  //   const fetchParkings = async () => {
  //     try {
  //       const response = await Axios.get<AxiosParkingResponse>(URL);
  //       setParkings(response.data.results);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };

  //   fetchParkings();

  //   // const timerId = setInterval(() => {
  //   //   console.log("Tick");
  //   // }, 1000);

  //   // // Cleanup functie
  //   // return () => clearInterval(timerId);
  // }, []);

  const { data, dataUpdatedAt, isError, error, isLoading } = useQuery({
    queryKey: ["fetchParkings"],
    queryFn: fetchParkings,
    initialData: {
      total_count: 0,
      results: [],
    },
    refetchInterval: 5 * 60 * 1000,
  });

  if (isLoading) {
    return (
      <View className="flex-1 justify-center items-center">
        <ActivityIndicator />
      </View>
    );
  }

  if (isError) {
    return (
      <View>
        <Text>{error.message}</Text>
      </View>
    );
  }
  return (
    <View className="flex-1 ">
      {/* Mobile niet meer echt mappen en zeker niet over data waarvan we niet weten hoeveel er inzitten */}
      {/* {parkings.map((p) => (
        <Text style={{ height: 400 }} key={p.id}>
          {p.name}
        </Text>
      ))} */}

      <Text className="text-2xl font-bold">
        {new Date(dataUpdatedAt).toLocaleTimeString()}
      </Text>

      <FlatList
        data={data.results}
        renderItem={({ item }) => (
          <TouchableOpacity
            className="flex-1 flex-row justify-between items-center bg-white h-24 my-2 px-4"
            onPress={() => {
              navigation.navigate("detail", { parking: item });
            }}
            onLongPress={() => {
              console.log("Lang geklikt op item ", item.name);
            }}>
            <Text className="text-2xl font-black">{item.name}</Text>
            <View className="flex flex-row gap-4">
              <TouchableOpacity
                onPress={() => {
                  // Favorite toggle met de Context
                  // toggleFavorite(item);
                  // Favorite toevoegen met Redux
                  if (favorites.some((f) => f.id === item.id)) {
                    dispatch(remove(item.id));
                  } else {
                    dispatch(add(item));
                  }
                }}
                className="bg-sky-700 rounded-full p-2">
                <MaterialCommunityIcons
                  name={
                    favorites.some((f) => f.id === item.id)
                      ? "star"
                      : "star-outline"
                  }
                  size={28}
                  color="#fcd34d"
                />
              </TouchableOpacity>

              <MaterialCommunityIcons
                name="chevron-right"
                size={28}
                color="#dadada"
              />
            </View>
            {/* <Button
              onPress={() => {
                console.log("Op detail knop geklikt");
              }}
              title="Naar detail (BTN)"
              // color="red"
            />
            <Pressable
              style={{
                paddingHorizontal: 16,
                paddingVertical: 8,
                backgroundColor: "#08524f",
                borderRadius: 8,
              }}
              onPress={() => {
                console.log("Op detail pressable geklikt");
              }}>
              <Text
                style={{
                  color: "white",
                  textAlign: "center",
                  fontWeight: "800",
                }}>
                Naar detail (Pressable)
              </Text>
            </Pressable>

            <TouchableOpacity
              style={{
                marginVertical: 16,
                paddingHorizontal: 16,
                paddingVertical: 8,
                backgroundColor: "#08524f",
                borderRadius: 8,
              }}
              onPress={() => {
                console.log("Op detail touchable opacity geklikt");
              }}>
              <Text
                style={{
                  color: "white",
                  textAlign: "center",
                  fontWeight: "800",
                }}>
                Naar detail (TO)
              </Text> */}
            {/* </TouchableOpacity> */}
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id}
        // horizontal
      />
    </View>
  );
};

export default ParkingsListScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: 150,
    marginVertical: 8,
    backgroundColor: "white",
    paddingHorizontal: 16,
  },
});
