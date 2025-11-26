import {
  StyleSheet,
  Switch,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useRef, useState } from "react";
import MyTextInput from "../components/MyTextInput";

import { useFormik } from "formik";
import * as Yup from "yup";

import Slider from "@react-native-community/slider";
import { Picker } from "@react-native-picker/picker";

import { KeyboardAwareScrollView } from "react-native-keyboard-controller";

const type = [
  { id: 1, label: "Bovengronds", value: "bovengronds" },
  { id: 2, label: "Ondergronds", value: "ondergronds" },
  { id: 3, label: "Overdekt", value: "overdekt" },
];

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .required("Naam is verplicht")
    .min(2, "Naam moet minstens uit 2 karakters bestaan"),
  email: Yup.string()
    .required("Email is verplicht")
    .email("Geen geldig emailadres"),
  comments: Yup.string()
    .required("Opmerkingen zijn verplicht")
    .min(5, "Minstens 5 karakters")
    .max(150, "Maximum 150 karakters"),
  isClosed: Yup.boolean().required("Is gesloten is verplicht"),
  places: Yup.number().required("Plaatsen zijn verplicht").min(0).max(25),
  type: Yup.string()
    .required("Type is verplicht")
    .oneOf(type.map((t) => t.value)),
});

const AddParkingScreen = () => {
  // const [name, setName] = useState("B Parking");
  // const [email, setEmail] = useState("");
  // const [comments, setComments] = useState("");

  const {
    values,
    handleChange,
    handleBlur,
    handleSubmit,
    errors,
    setFieldValue,
  } = useFormik({
    initialValues: {
      name: "",
      email: "",
      comments: "",
      isClosed: false,
      places: 10,
      type: type[1].value,
    },
    onSubmit: (values) => {
      console.log(values);
    },
    validationSchema,
  });

  const emailTxtRef = useRef<TextInput>(null);
  const commentsTxtRef = useRef<TextInput>(null);

  return (
    <KeyboardAwareScrollView
      className="flex-1 bg-white p-4 gap-4 "
      contentContainerClassName="gap-4"
      bottomOffset={150}>
      <MyTextInput
        value={values.name}
        onChangeText={handleChange("name")}
        onBlur={handleBlur("name")}
        autoCapitalize="none"
        autoComplete="new-password"
        placeholder="Naam"
        returnKeyType="next"
        onSubmitEditing={() => {
          emailTxtRef.current?.focus();
        }}
        submitBehavior="submit"
        error={errors.name}
      />
      <MyTextInput
        ref={emailTxtRef}
        value={values.email}
        onChangeText={handleChange("email")}
        onBlur={handleBlur("email")}
        autoCapitalize="none"
        keyboardType="email-address"
        placeholder="Email"
        returnKeyType="next"
        onSubmitEditing={() => {
          commentsTxtRef.current?.focus();
        }}
        submitBehavior="submit"
        error={errors.email}
      />
      <MyTextInput
        ref={commentsTxtRef}
        value={values.comments}
        onChangeText={handleChange("comments")}
        onBlur={handleBlur("comments")}
        autoCapitalize="none"
        keyboardType="default"
        multiline
        numberOfLines={10}
        placeholder="Opmerkingen"
        returnKeyType="done"
        error={errors.comments}
      />
      <View className="flex flex-row justify-between items-center">
        <Text>Is gesloten?</Text>
        <Switch
          value={values.isClosed}
          onValueChange={(value) => {
            setFieldValue("isClosed", value);
          }}
          trackColor={{ true: "blue" }}
        />
      </View>
      <Slider
        value={values.places}
        onValueChange={(value) => {
          setFieldValue("places", value);
        }}
        minimumValue={0}
        maximumValue={25}
        step={5}
      />
      <Picker
        selectedValue={values.type}
        onValueChange={(value) => setFieldValue("type", value)}>
        {type.map((t) => (
          <Picker.Item key={t.id} label={t.label} value={t.value} />
        ))}
      </Picker>
      <TouchableOpacity
        className="bg-blue-700 px-4 py-2 rounded-lg"
        onPress={() => {
          handleSubmit();
        }}>
        <Text className="text-center text-white font-bold text-xl">
          Verstuur
        </Text>
      </TouchableOpacity>
    </KeyboardAwareScrollView>
  );
};

export default AddParkingScreen;

const styles = StyleSheet.create({});
