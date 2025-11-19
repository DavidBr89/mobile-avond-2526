import { StyleSheet, Text, TextInput, View } from "react-native";
import React, { useRef, useState } from "react";

const AddParkingScreen = () => {
  const [name, setName] = useState("B Parking");
  const [email, setEmail] = useState("");
  const [comments, setComments] = useState("");

  const emailTxtRef = useRef<TextInput>(null);

  //   TODO: Extra ref aanmaken voor de comments TextInput component

  return (
    <View className="flex-1 bg-white p-4 gap-4 ">
      // TODO: Custom component CustomTextInput - TextInputProps
      <TextInput
        className="border border-blue-700 py-2 px-4 rounded-lg h-16"
        value={name}
        // onChange={(event) => {
        //     setName(event.nativeEvent.text)
        // }}
        onChangeText={(text) => setName(text)}
        autoCapitalize="none"
        // secureTextEntry
        autoComplete="new-password"
        autoCorrect={false}
        placeholder="Naam"
        returnKeyType="next"
        onSubmitEditing={() => {
          emailTxtRef.current?.focus();
        }}
        submitBehavior="submit"
      />
      <TextInput
        ref={emailTxtRef}
        className="border border-blue-700 py-2 px-4 rounded-lg h-16"
        value={email}
        // onChange={(event) => {
        //     setName(event.nativeEvent.text)
        // }}
        onChangeText={(text) => setEmail(text)}
        autoCapitalize="none"
        autoCorrect={false}
        keyboardType="email-address"
        placeholder="Email"
        returnKeyType="next"
      />
      <TextInput
        className="border border-blue-700 py-2 px-4 rounded-lg"
        value={comments}
        // onChange={(event) => {
        //     setName(event.nativeEvent.text)
        // }}
        onChangeText={(text) => setComments(text)}
        autoCapitalize="none"
        autoCorrect={false}
        keyboardType="default"
        multiline
        numberOfLines={10}
        placeholder="Opmerkingen"
        returnKeyType="done"
      />
      {/* TODO: Slider, pickers */}
    </View>
  );
};

export default AddParkingScreen;

const styles = StyleSheet.create({});
