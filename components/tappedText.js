import {Button, Pressable, Text, View} from 'react-native';
import React from "react";
import {useTheme} from 'react-native-paper';

export default function TappedText({text,tapped, role}) {
    return (
        <View style={{
            marginVertical:20,
            marginLeft:50,
            flexDirection:"row"
        }}>
            <Text style={{
                color:"#fff"
            }}>
                {text}
            </Text>
            <Pressable
                onPress={role}
            >
                <Text
                    style={{
                        color:"#189318",
                    }}
                >
                    {tapped}
                </Text>
            </Pressable>
        </View>

    );
}
