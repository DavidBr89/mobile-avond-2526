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

export default function App() {
  const message: string = "Hello world!";
  let number: number = 45;
  let isVerified: boolean = false;

  // Inline typen van deze functie
  const sum = (a: number, b: number): number => {
    return a + b;
  };

  const sumTyped: SumFn = (a, b) => a + b;

  const result = sumTyped(2, 3);

  // Objecten

  const person: Person = {
    firstName: "Tim",
    lastName: "Doe",
    age: 21,
  };

  const student: Student = {
    firstName: "John",
    lastName: "Doe",
    age: 35,
    isVerified: true,
    studentNumber: "jd232424524",
    study: () => {},
  };

  const student2: IStudent = {
    firstName: "Jane",
    lastName: "Doe",
    age: 25,
    isVerified: true,
    studentNumber: "jd56486483",
  };

  // Arrays

  const arr: NumberArr = [1, 2, 3];
  const strArr: string[] = ["Web 1", "Web 2"];

  const students: Array<Student> = [];

  // students.map(s => ({ age: s.age}) );

  // Tuples

  const web1Tuple: [string, number] = ["Web 1", 6];
  web1Tuple[0] = "Web 2";

  const drivingDirection: Direction = Direction.DOWN;

  const status: OrderStatus = "confirmed";

  // const { top, bottom, left, right } = useSafeAreaInsets();

  // return (
  //   <SafeAreaProvider>
  //     <SafeAreaView style={styles.container}>
  //       {/* <BlueText style={{ flex: 1 }}>Mobile</BlueText>
  //     <Test />
  //     <BlueText style={{ flex: 1, backgroundColor: "yellow" }}>Hallo</BlueText> */}
  //       <ParkingsListScreen />
  //       <StatusBar style="auto" />
  //     </SafeAreaView>
  //   </SafeAreaProvider>
  // );

  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <ParkingsTabNavigator />
        <StatusBar style="auto" />
      </NavigationContainer>
    </QueryClientProvider>
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
