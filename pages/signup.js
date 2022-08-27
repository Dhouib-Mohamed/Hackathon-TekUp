import {Text, TextInput, View} from 'react-native';
import React from "react";
import useGlobalStyles from '../styles';
import NormalButton from '../components/normalButton';
import TappedText from '../components/tappedText';
import {useNavigation} from '@react-navigation/native';
import Input from '../components/input';

export default function Signup() {
    const style = useGlobalStyles()
    const navigation = useNavigation()
    return (
        <View style={style.page}>
            <View style={{
                paddingLeft:30,
                paddingVertical:40,
                paddingBottom:70
            }}>
                <Text
                    style={{
                        color:"#fff",
                        fontSize:23
                    }}
                >
                    {"SIGN UP"}
                </Text>

                <Text
                    style={{
                        color:"#fff"
                    }}
                >
                    {"Complete this step for best adjustment"}
                </Text>
            </View>
            <Input title={"Name"}/>
            <Input title={"Email"}/>
            <Input title={"Password"}/>
            <View style={{height:60}}></View>
            <NormalButton title={"Sign Up"} role={()=>{navigation.navigate("Screen")}}/>
            <TappedText text={"Already have an account ? "} tapped={"Sign in Here"} role={()=>{navigation.navigate("SignIn")}}/>
        </View>

    );
}
