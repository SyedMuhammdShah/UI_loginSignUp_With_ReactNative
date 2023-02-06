import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import BGImage from './background'
import Field from './Field'
import Btn from './btn'


export default function SignUp(props) {
  return (
    <BGImage>
      <View style={{ alignItems: "center", width: "100%" }}>
        <Text style={[style.Main_Text, style.marginBottomText]}>Register</Text>
        <View style={style.continer}>
          <Text style={{ fontSize: 30, color: "#89C4E1", fontWeight: "bold" }}>
            Welcome 
          </Text>
          <Text style={{ marginBottom: 4 }}>Create your account</Text>
          <Field
            placeholder=" Enter Your Full Name "
            keyboardType={"email-address"}
          />
          <Field
            placeholder=" Enter Your Email "
            keyboardType={"email-address"}
          />
          <Field placeholder=" Enter Your Password " secureTextEntry={true} />
          <Field placeholder=" Enter Your Contact Number "  />
          <View style={{ alignItems: "flex-end", width: "75%" }}>
            <Text>Forget Password?</Text>
          </View>
          <Btn bgColor="#39B5E0" btnLabel={"Login"} textColor="white" />
          <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
          <Text>Already have account?</Text>
          <TouchableOpacity onPress={()=> props.navigation.navigate("Login")}>
            <Text style={{fontWeight: 'bold', color:"#89C4E1"}} >Login</Text>
          </TouchableOpacity>
          </View>
        </View>
      </View>
    </BGImage>
  )
}

const style = StyleSheet.create({
    continer: {
      backgroundColor: "white",
      height: 530,
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
      marginTop: 8,
    },
    marginBottomText: {
      marginBottom: 10,
    },
  });
  