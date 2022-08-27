import {Text, View} from 'react-native';
import React from "react";
import useGlobalStyles from '../styles';
import NormalButton from '../components/normalButton';
import TappedText from '../components/tappedText';
import {useNavigation} from '@react-navigation/native';
import Input from '../components/input';

export default function Signin() {
    const style = useGlobalStyles()
    const navigation = useNavigation()
    return (
        <View style={style.page}>
            <View style={{
                paddingLeft:30,
                paddingVertical:40,
                paddingBottom:80
            }}>
                <Text
                    style={{
                        color:"#fff",
                        fontSize:23
                    }}
                >
                    {"SIGN IN"}
                </Text>

                <Text
                    style={{
                        color:"#fff"
                    }}
                >
                    {"Complete this step for best adjustment"}
                </Text>
            </View>
            <Input title={"Email"}/>
            <Input title={"Password"}/>
            <View style={{height:70}}></View>
            <NormalButton title={"Sign In"} role={()=>{navigation.navigate("Screen")}}/>
            <NormalButton title={"Sign In With Facebook"} role={()=>{navigation.navigate("Screen")}}/>
            <TappedText text={"Don't have an account ? "} tapped={"Sign Up here"} role={()=>{navigation.navigate("SignUp")}}/>
        </View>

    );
}
