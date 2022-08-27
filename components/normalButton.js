import {Button, Pressable, Text} from 'react-native';
import React from "react";
import {useTheme} from 'react-native-paper';

export default function NormalButton({title, role}) {
    return (
        <Pressable
            style={{
                marginVertical:15,
                alignSelf:"center",
                backgroundColor: "#fff",
                width: 320,
                height: 44,
                justifyContent: 'center',
                alignItems: 'center',
                padding: 10,
                borderRadius: 20,
            }}
            onPress={role}
        >
            <Text
                style={{
                    color:"rgb(11,61,7)",
                    fontWeight:"700",
                    fontSize:15
                }}
            >
                {title}
            </Text>
        </Pressable>

    );
}
