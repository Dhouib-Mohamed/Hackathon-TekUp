import {Button, Pressable, Text, TextInput} from 'react-native';
import React from "react";
import {useTheme} from 'react-native-paper';

export default function Input({title}) {
    return (
        <TextInput placeholder={title} placeholderTextColor={"#000"} style={{
            marginVertical:15,
            alignSelf:"center",
            width: 325,
            height: 53,
            justifyContent: 'center',
            alignItems: 'center',
            padding: 15,
            borderRadius: 20,
            borderWidth:1,backgroundColor:"#FFF",
        }}/>

    );
}
