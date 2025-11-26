import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import { DrawerScreenProps } from "@react-navigation/drawer";
import { StackScreenProps } from "@react-navigation/stack";

export type ParkingsStackParamsList = {
  home: undefined;
  detail: { parking: Parking };
  test: undefined;
  addParking: undefined;
};

export type ParkingsTabParamsList = {
  parkingsStack: undefined;
  map: undefined;
  favorites: undefined;
  settingsDrawer: undefined;
};

export type ParkingsDrawerParamsList = {
  profile: undefined;
  about: undefined;
  camera: undefined;
  settings: undefined;
};

export type ParkingsStackNavProps<T extends keyof ParkingsStackParamsList> =
  StackScreenProps<ParkingsStackParamsList, T>;

export type ParkingsTabNavProps<T extends keyof ParkingsTabParamsList> =
  BottomTabScreenProps<ParkingsTabParamsList, T>;

export type ParkingsDrawerNavProps<T extends keyof ParkingsDrawerParamsList> =
  DrawerScreenProps<ParkingsDrawerParamsList, T>;

declare global {
  namespace ReactNavigation {
    interface RootParamList
      extends ParkingsStackParamsList,
        ParkingsTabParamsList,
        ParkingsDrawerParamsList {}
  }
}
