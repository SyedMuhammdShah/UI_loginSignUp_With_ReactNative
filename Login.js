import { View, Text, StyleSheet, Touchable, TouchableOpacity } from "react-native";
import React from "react";
import BGImage from "./background";
import Field from "./Field";
import Btn from "./btn";

export default function Login(props) {
  return (
    <BGImage>
      <View style={{ alignItems: "center", width: "100%" }}>
        <Text style={[style.Main_Text, style.marginBottomText]}>Login</Text>
        <View style={style.continer}>
          <Text style={{ fontSize: 30, color: "#89C4E1", fontWeight: "bold" }}>
            Welcome Back
          </Text>
          <Text style={{ marginBottom: 30 }}>Login to your account</Text>
          <Field
            placeholder=" Enter Your Email "
            keyboardType={"email-address"}
          />
          <Field placeholder=" Enter Your Password " secureTextEntry={true} />
          <View style={{ alignItems: "flex-end", width: "75%" }}>
            <Text>Forget Password?</Text>
          </View>
          <Btn bgColor="#39B5E0" btnLabel={"Login"} textColor="white" />
          <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
          <Text>Don't have an account?</Text>
          <TouchableOpacity onPress={()=> props.navigation.navigate("SignUp")}>
            <Text style={{fontWeight: 'bold', color:"#89C4E1"}} >SignUp</Text>
          </TouchableOpacity>
          </View>
        </View>
      </View>
    </BGImage>
  );
}
const style = StyleSheet.create({
  continer: {
    backgroundColor: "white",
    height: 430,
    width: 320,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    paddingTop: 30,
    alignItems: "center",
  },
  Main_Text: {
    fontSize: 60,
    color: "white",
    fontWeight: "800",
    marginTop: 20,
  },
  marginBottomText: {
    marginBottom: 40,
  },
});
