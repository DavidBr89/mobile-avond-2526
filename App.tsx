import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Test from "./src/components/Test";
import BlueText from "./src/components/BlueText";
import ParkingsListScreen from "./src/screens/ParkingsListScreen";
import {
  SafeAreaProvider,
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import ParkingsStackNavigator from "./src/navigation/ParkingsStackNavigator";

import "./global.css";
import ParkingsTabNavigator from "./src/navigation/ParkingsTabNavigator";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import FavoritesProvider from "./src/contexts/FavoritesContext";

import { Provider } from "react-redux";
import { persistor, store } from "./src/store/store";
import { PersistGate } from "redux-persist/integration/react";
import { KeyboardProvider } from "react-native-keyboard-controller";
import AuthStackNavigator from "./src/navigation/AuthStackNavigator";

import * as SplashScreen from "expo-splash-screen";
import { useEffect, useState } from "react";
import { onAuthStateChanged, User } from "firebase/auth";
import { auth } from "./src/config/firebase";

// Union types
type ID = number | string;

// Typen van een functie
type SumFn = (a: number, b: number) => number;

// Typen van een object a.h.v. type keyword
type Person = {
  firstName: string;
  lastName: string;
  age: number;
};

type Student = Person & {
  isVerified: boolean;
  studentNumber: string;
  study?: () => void;
};

// Typen van een object a.h.v. interface keyword
interface IPerson {
  firstName: string;
  lastName: string;
  age: number;
}
interface IStudent extends IPerson {
  isVerified: boolean;
  studentNumber: string;
  study?: () => void;
}

// Typen van arrays
type NumberArr = number[];

// Enums

enum Direction {
  LEFT,
  RIGHT,
  UP,
  DOWN,
}

enum StatusCodes {
  OK = 200,
  CREATED,
  BADREQUEST = 400,
  UNAUTHORIZED,
  FORBIDDEN,
}

type OrderStatus = "pending" | "new" | "confirmed" | "cancelled";

// QueryClient aanmaken
const queryClient = new QueryClient();

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [user, setUser] = useState<User | null>(null);
  const [isAuthLoading, setIsAuthLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (usr) => {
      setUser(usr);
      setIsAuthLoading(false);
    });

    return unsubscribe;
  }, []);

  useEffect(() => {
    if (!isAuthLoading) {
      SplashScreen.hideAsync();
    }
  }, [isAuthLoading]);

  if (isAuthLoading) {
    return null;
  }

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <KeyboardProvider>
          <QueryClientProvider client={queryClient}>
            <FavoritesProvider>
              <NavigationContainer>
                {user !== null ? (
                  <ParkingsTabNavigator />
                ) : (
                  <AuthStackNavigator />
                )}
                {/* <ParkingsTabNavigator /> */}
                <StatusBar style="auto" />
              </NavigationContainer>
            </FavoritesProvider>
          </QueryClientProvider>
        </KeyboardProvider>
      </PersistGate>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // flexDirection: "row",
    backgroundColor: "white",
    // justifyContent: "center",
    // alignItems: "center",
    color: "blue",
  },
});
