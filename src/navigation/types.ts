import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import { StackScreenProps } from "@react-navigation/stack";

export type ParkingsStackParamsList = {
  home: undefined;
  detail: { parking: Parking };
  test: undefined;
};

export type ParkingsTabParamsList = {
  list: undefined;
  map: undefined;
  settings: undefined;
};

export type ParkingsStackNavProps<T extends keyof ParkingsStackParamsList> =
  StackScreenProps<ParkingsStackParamsList, T>;

export type ParkingsTabNavProps<T extends keyof ParkingsTabParamsList> =
  BottomTabScreenProps<ParkingsTabParamsList, T>;

declare global {
  namespace ReactNavigation {
    interface RootParamList
      extends ParkingsStackParamsList,
        ParkingsTabParamsList {}
  }
}
