import { initializeApp } from "firebase/app";
import {
  getAuth,
  getReactNativePersistence,
  initializeAuth,
} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import AsyncStorage from "@react-native-async-storage/async-storage";

const firebaseConfig = {
  apiKey: "AIzaSyD3FTz3tVG-UspV92on1s9ccfKGvtM3maE",
  authDomain: "hogent-parkings-ee85e.firebaseapp.com",
  projectId: "hogent-parkings-ee85e",
  storageBucket: "hogent-parkings-ee85e.firebasestorage.app",
  messagingSenderId: "403950082766",
  appId: "1:403950082766:web:6f89a4442b5c01f4498e9f",
};

export const app = initializeApp(firebaseConfig);
export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});
export const db = getFirestore(app);
