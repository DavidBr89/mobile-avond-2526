import { FlatList, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import Axios from "axios";

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
          <View style={styles.item}>
            <Text>{item.name}</Text>
          </View>
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
    height: 56,
    paddingHorizontal: 16,
  },
});
