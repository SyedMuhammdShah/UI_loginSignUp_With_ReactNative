import { View, Text, ImageBackground } from "react-native";
import React from "react";

const BGImage = ({ children }) => {
  return (
    <View>
      <ImageBackground
        source={require("./assets/mount.jpg")}
        style={{ height: "100%" }}
      />
      <View style={{ position: "absolute" }}>{children}</View>
    </View>
  );
};

export default BGImage;
