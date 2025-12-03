import {
  Text,
  View,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import MyTextInput from "../components/MyTextInput";
import { useNavigation } from "@react-navigation/native";
import { AuthStackNavProps } from "../navigation/types";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config/firebase";

// Validatie schema met Yup
const loginValidationSchema = Yup.object().shape({
  email: Yup.string()
    .email("Geef een geldig email adres in")
    .required("Email is verplicht"),
  password: Yup.string()
    .min(6, "Wachtwoord moet minstens 6 karakters bevatten")
    .required("Wachtwoord is verplicht"),
});

const LoginScreen = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: loginValidationSchema,
    onSubmit: async (values) => {
      try {
        const result = await signInWithEmailAndPassword(
          auth,
          values.email,
          values.password
        );
      } catch (error) {
        console.log(error);
      }
    },
  });

  const navigate = useNavigation<AuthStackNavProps<"login">["navigation"]>();

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      className="flex-1">
      <View className="flex-1 justify-center px-6 bg-white">
        <Text className="text-3xl font-bold text-center mb-8 text-blue-700">
          Inloggen
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

        <View className="mb-6">
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

        <TouchableOpacity
          onPress={() => formik.handleSubmit()}
          className="bg-blue-700 py-4 rounded-lg mb-4">
          <Text className="text-white text-center text-lg font-semibold">
            Inloggen
          </Text>
        </TouchableOpacity>

        <TouchableOpacity className="py-2">
          <Text className="text-blue-700 text-center">
            Wachtwoord vergeten?
          </Text>
        </TouchableOpacity>

        <View className="flex-row justify-center mt-4">
          <Text className="text-gray-600">Nog geen account? </Text>
          <TouchableOpacity
            onPress={() => {
              navigate.replace("register");
            }}>
            <Text className="text-blue-700 font-semibold">Registreer hier</Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;
