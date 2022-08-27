import {Dimensions, Image, View} from 'react-native';
import React from "react";
import useGlobalStyles from '../styles';
import { ClusterMap } from 'react-native-cluster-map';
import { Marker } from 'react-native-maps';

export default function Location() {
    const style = useGlobalStyles()
    return (
        <View  style={style.page}>
            <Image source={require("../assets/map.jpg")}
                   style={{
                       alignSelf:"center",
                       height:Dimensions.get("window").height*0.95,
                       width:Dimensions.get("window").width*0.95,
                   }}/>
        </View>

    );
}
