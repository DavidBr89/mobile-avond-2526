import { Button, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useRef } from "react";

import MapView, { Marker } from "react-native-maps";
import {
  useForegroundPermissions,
  useBackgroundPermissions,
} from "expo-location";
import { useQuery } from "@tanstack/react-query";
import { fetchParkings } from "../api/parkings";

const ParkingsMapScreen = () => {
  // Locatie permissies opvragen

  const [foreGroundStatus, foreGroundRequestPermission] =
    useForegroundPermissions();

  const [backStatus, backRequestPermission] = useBackgroundPermissions();

  // Voorgrond permissies
  useEffect(() => {
    if (foreGroundStatus?.canAskAgain) {
      foreGroundRequestPermission();
    }
  }, [foreGroundStatus?.canAskAgain]);

  // Achtergrond permissies
  useEffect(() => {
    if (backStatus?.canAskAgain) {
      backRequestPermission();
    }
  }, [backStatus?.canAskAgain]);

  const mapRef = useRef<MapView>(null);

  const { data, dataUpdatedAt, isError, error, isLoading } = useQuery({
    queryKey: ["fetchParkings"],
    queryFn: fetchParkings,
    initialData: {
      total_count: 0,
      results: [],
    },
  });

  return (
    <View className="flex-1">
      <MapView
        ref={mapRef}
        style={{ flex: 1 }}
        provider="google"
        mapType="terrain"
        userInterfaceStyle="dark"
        showsUserLocation
        initialCamera={{
          center: {
            latitude: 51.05,
            longitude: 3.7304,
          },
          heading: 0,
          pitch: 0,
          zoom: 12,
        }}>
        {data.results.map((p) => (
          <Marker
            title={p.name}
            description={p.availablecapacity.toString()}
            key={p.id}
            coordinate={{ latitude: p.location.lat, longitude: p.location.lon }}
          />
        ))}
      </MapView>
      <Button
        title="Navigeer"
        onPress={() => {
          mapRef.current?.animateCamera({
            center: {
              latitude: 50.8567,
              longitude: 3.3106,
            },
            zoom: 15,
          });
        }}></Button>
      <Button
        title="Intiële locatie"
        onPress={() => {
          mapRef.current?.animateCamera({
            center: {
              latitude: 51.05,
              longitude: 3.7304,
            },
            zoom: 12,
          });
        }}></Button>
    </View>
  );
};

export default ParkingsMapScreen;

const styles = StyleSheet.create({});
