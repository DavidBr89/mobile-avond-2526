import { View, Text, Button, Image } from "react-native";
import React, { useEffect, useRef, useState } from "react";

import {
  CameraCapturedPicture,
  CameraView,
  useCameraPermissions,
} from "expo-camera";
import { useIsFocused } from "@react-navigation/native";

const CameraScreen = () => {
  const [isCameraReady, setIsCameraReady] = useState(false);
  const [picture, setPicture] = useState<CameraCapturedPicture>();

  const [status, requestPermission] = useCameraPermissions();

  const isFocus = useIsFocused();

  useEffect(() => {
    if (status?.canAskAgain) {
      requestPermission();
    }
  }, [status?.canAskAgain]);

  const cameraRef = useRef<CameraView>(null);

  if (picture) {
    return (
      <View className="flex-1">
        <Image className="flex-1" source={{ uri: picture.uri }} />
      </View>
    );
  }

  return (
    <View className="flex-1">
      {isFocus && (
        <>
          <CameraView
            onCameraReady={() => {
              setIsCameraReady(true);
            }}
            ref={cameraRef}
            style={{ flex: 1 }}
            barcodeScannerSettings={{
              barcodeTypes: ["ean13", "qr"],
            }}
            onBarcodeScanned={(result) => {
              console.log(result);
            }}
          />
          <Button
            title="Foto nemen"
            onPress={async () => {
              if (isCameraReady) {
                try {
                  const pic = await cameraRef.current?.takePictureAsync();
                  setPicture(pic);
                } catch (error) {
                  console.log(error);
                }
              }
            }}
          />
        </>
      )}
    </View>
  );
};

export default CameraScreen;
