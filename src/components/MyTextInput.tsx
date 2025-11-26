import { View, Text, TextInput, TextInputProps } from "react-native";
import React, { Ref } from "react";

const MyTextInput = (
  props: TextInputProps & { ref?: Ref<TextInput>; error?: string | undefined }
) => {
  return (
    <>
      <TextInput
        className="border border-blue-700 py-2 px-4 rounded-lg h-16"
        autoCorrect={false}
        {...props}
        //   submitBehavior="submit"
      />
      {props.error && (
        <Text className=" text-red-700 text-sm">{props.error}</Text>
      )}
    </>
  );
};

export default MyTextInput;
