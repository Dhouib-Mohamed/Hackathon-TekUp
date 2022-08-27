import {Dimensions, Image, ImageBackground, View} from 'react-native';
import React from "react";
import useGlobalStyles from '../styles';
import NormalButton from '../components/normalButton';
import TappedText from '../components/tappedText';
import {useNavigation} from '@react-navigation/native';

export default function Welcome() {
    const style = useGlobalStyles()
    const navigation = useNavigation()
    return (
        <View style={style.page}>
            <Image source={require("../assets/logo.png")}
                   style={{
                       width:Dimensions.get("window").width,
                height:300,
                       marginTop:30,
                       marginBottom:80,
                alignSelf: "center"
            }}/>
            <NormalButton title={"Sign In"} role={()=>{navigation.navigate("SignIn")}}/>
            <NormalButton title={"Sign In With Facebook"} role={()=>{navigation.navigate("Screen")}}/>
            <TappedText text={"Or Start By "} tapped={"Creating An Account"} role={()=>{navigation.navigate("SignUp")}}/>
        </View>

    );
}
