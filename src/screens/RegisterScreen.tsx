import {
  View,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  Alert,
} from "react-native";
import React from "react";
import { replace, useFormik } from "formik";
import * as Yup from "yup";
import MyTextInput from "../components/MyTextInput";
import { useNavigation } from "@react-navigation/native";
import { AuthStackNavProps } from "../navigation/types";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config/firebase";

// Validatie schema met Yup
const registerValidationSchema = Yup.object().shape({
  email: Yup.string()
    .email("Geef een geldig email adres in")
    .required("Email is verplicht"),
  password: Yup.string()
    .min(6, "Wachtwoord moet minstens 6 karakters bevatten")
    .required("Wachtwoord is verplicht"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Wachtwoorden komen niet overeen")
    .required("Bevestig je wachtwoord"),
});

const RegisterScreen = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: registerValidationSchema,
    onSubmit: async (values) => {
      // Hier kun je de registratie logica implementeren
      console.log("Registreer met:", values.email, values.password);
      try {
        await createUserWithEmailAndPassword(
          auth,
          values.email,
          values.password
        );
      } catch (error) {
        Alert.alert("Fout", "Fout tijdens het registreren", [
          {
            style: "destructive",
            text: "Custom tekst",
            onPress: () => {
              console.log("Geklikt op de knop in de alert!");
            },
          },
          {
            text: "Tweede knop",
            onPress: () => {
              console.log("Geklikt op de tweede knop in de alert!");
            },
          },
        ]);
      }
    },
  });

  const navigate = useNavigation<AuthStackNavProps<"register">["navigation"]>();

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      className="flex-1">
      <View className="flex-1 justify-center px-6 bg-white">
        <Text className="text-3xl font-bold text-center mb-8 text-blue-700">
          Registreren
        </Text>

        <View className="mb-4">
          <Text className="text-base mb-2 text-gray-700">Email</Text>
          <MyTextInput
            placeholder="Geef je email in"
            value={formik.values.email}
            onChangeText={formik.handleChange("email")}
            onBlur={formik.handleBlur("email")}
            keyboardType="email-address"
            autoCapitalize="none"
            error={formik.errors.email}
          />
        </View>

        <View className="mb-4">
          <Text className="text-base mb-2 text-gray-700">Wachtwoord</Text>
          <MyTextInput
            placeholder="Geef je wachtwoord in"
            value={formik.values.password}
            onChangeText={formik.handleChange("password")}
            onBlur={formik.handleBlur("password")}
            secureTextEntry
            error={formik.errors.password}
          />
        </View>

        <View className="mb-6">
          <Text className="text-base mb-2 text-gray-700">
            Bevestig wachtwoord
          </Text>
          <MyTextInput
            placeholder="Bevestig je wachtwoord"
            value={formik.values.confirmPassword}
            onChangeText={formik.handleChange("confirmPassword")}
            onBlur={formik.handleBlur("confirmPassword")}
            secureTextEntry
            error={formik.errors.confirmPassword}
          />
        </View>

        <TouchableOpacity
          onPress={() => formik.handleSubmit()}
          className="bg-blue-700 py-4 rounded-lg mb-4">
          <Text className="text-white text-center text-lg font-semibold">
            Registreren
          </Text>
        </TouchableOpacity>

        <View className="flex-row justify-center mt-4">
          <Text className="text-gray-600">Heb je al een account? </Text>
          <TouchableOpacity
            onPress={() => {
              navigate.replace("login");
            }}>
            <Text className="text-blue-700 font-semibold">Log hier in</Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default RegisterScreen;
