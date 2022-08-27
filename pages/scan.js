import {Image, View} from 'react-native';
import React from "react";
import useGlobalStyles from '../styles';
import NormalButton from '../components/normalButton';

export default function Scan() {
    const style = useGlobalStyles()
    return (
        <View  style={style.page}>
            <Image source={require("../assets/qr.jpg")}
                   style={{
                       alignSelf:"center",
                       height:500,
                       width:300,
                   }}/>
            <NormalButton title={"Scan for QR Code"} role={()=>{} }/>
        </View>

    );
}
