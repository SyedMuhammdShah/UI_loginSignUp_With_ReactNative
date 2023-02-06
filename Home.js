import { View, Text, StyleSheet } from "react-native";
import React from "react";
import BGImage from "./background";
import Btn from "./btn";

export default function Home() {
  return (
    <View>
      <BGImage>
        <View style={{ marginHorizontal: 30, marginVertical: 30 }}>
          <Text style={style.Main_Text}>Let's Start</Text>
          <Text style={[style.Main_Text , style.marginBottomText]}>With Us!</Text>
        <Btn btnLabel='Login' bgColor={'#89C4E1'} textColor={'white'} />
        <Btn btnLabel='SignUp' bgColor={'white'} textColor={'#89C4E1'} />
        </View>
      </BGImage>
    </View>
  );
}

const style = StyleSheet.create({
  Main_Text: {
    fontSize: 60,
    color: "white",
  },
  marginBottomText:{
    marginBottom: 30,
  }
});
