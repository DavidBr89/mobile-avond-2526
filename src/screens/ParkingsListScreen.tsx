import {
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

const URL =
  "https://data.stad.gent/api/explore/v2.1/catalog/datasets/bezetting-parkeergarages-real-time/records";

interface Parking {
  id: string;
  name: string;
  description: string;
  totalcapacity: number;
  availablecapacity: number;
  occupation: number;
}

interface AxiosParkingResponse {
  total_count: number;
  results: Parking[];
}

const ParkingsListScreen = () => {
  //   const [count, setCount] = useState(0);

  const navigation = useNavigation();

  const [parkings, setParkings] = useState<Parking[]>([]);

  useEffect(() => {
    // OPGELET: De callback functie dat je meegeeft in een useEffect mag geen async functie zijn return Promise<void>
    const fetchParkings = async () => {
      try {
        const response = await Axios.get<AxiosParkingResponse>(URL);
        setParkings(response.data.results);
      } catch (error) {
        console.log(error);
      }
    };

    fetchParkings();

    // const timerId = setInterval(() => {
    //   console.log("Tick");
    // }, 1000);

    // // Cleanup functie
    // return () => clearInterval(timerId);
  }, []);

  return (
    <View style={styles.container}>
      {/* Mobile niet meer echt mappen en zeker niet over data waarvan we niet weten hoeveel er inzitten */}
      {/* {parkings.map((p) => (
        <Text style={{ height: 400 }} key={p.id}>
          {p.name}
        </Text>
      ))} */}
      <FlatList
        data={parkings}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.item}
            onPress={() => {
              navigation.navigate("detail", { parking: item });
            }}
            onLongPress={() => {
              console.log("Lang geklikt op item ", item.name);
            }}>
            <Text>{item.name}</Text>
            <MaterialCommunityIcons
              name="chevron-right"
              size={28}
              color="#dadada"
            />
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
    height: 150,
    marginVertical: 8,
    backgroundColor: "white",
    paddingHorizontal: 16,
  },
});
