import { View, Text, TextInput, StyleSheet } from 'react-native'
import React from 'react'

export default function Field(props) {
  return (
    <View style={{width:'100%', alignItems: 'center'}}>
        <TextInput
        {...props} style={InputSheet.field}
        >
        </TextInput>
    </View>
  )
}
const InputSheet = StyleSheet.create({
  
    field: {
         backgroundColor: "#E3F6FF",
         width: '80%',
         marginTop: 15,
         paddingHorizontal: 10,
         padding: 10,
         borderRadius: 50,
         fontSize: 15,
    },
})