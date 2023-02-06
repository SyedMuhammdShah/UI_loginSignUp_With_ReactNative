import React from "react";
import { TouchableOpacity, Text } from "react-native";

export default function Btn({ bgColor, btnLabel, textColor,Press }) {
  return (
    <TouchableOpacity
    onPress={Press}
      style={{
        backgroundColor: bgColor,
        borderRadius: 100,
        alignItems: "center",
        width: 250,
        paddingVertical: 5,
        marginVertical: 5
      }}
    >
      <Text style={{ 
        color: textColor,
        fontSize: 25, 
        textAlign: 'center',
        fontWeight: "bold" }}>
        {btnLabel}
      </Text>
    </TouchableOpacity>
  );
}
