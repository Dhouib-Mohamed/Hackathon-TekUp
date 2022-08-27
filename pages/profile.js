import {Text, View} from 'react-native';
import React from "react";
import useGlobalStyles from '../styles';
import {user} from '../data/user';
import NormalButton from '../components/normalButton';

export default function Profile() {
    const style = useGlobalStyles()
    return (
        <View  style={style.page}>
            <View style={{
                flexDirection:"row",
                justifyContent:"space-between",
                marginHorizontal:30,
                marginTop:20,

            }}>
                <Text style={{
                    color:"#fff",
                    fontSize:20
                }}>
                    Name :
                </Text>
                <Text
                    style={{
                        color:"#fff",
                        fontSize:20
                    }}
                >
                    {user.name}
                </Text>

            </View>
            <View style={{ backgroundColor:"#fff" ,height:2,margin:20}}>
            </View>
            <View style={{
                flexDirection:"row",
                justifyContent:"space-between",
                marginHorizontal:30,

            }}>
                <Text
                    style={{
                        color:"#fff",
                        fontSize:20
                    }}
                >
                    Email :
                </Text>
                <Text
                    style={{
                    color:"#fff",
                    fontSize:20
                }}>
                    {user.email}
                </Text>

            </View>
            <View style={{ backgroundColor:"#fff" ,height:1,margin:20}}>
            </View>
            <View style={{
                flexDirection:"row",
                justifyContent:"space-between",
                marginHorizontal:30,
                marginBottom:30,
            }}>
                <Text
                    style={{
                        color:"#fff",
                        fontSize:20
                    }}>
                    Points :
                </Text>
                <Text
                    style={{
                        color:"#fff",
                        fontSize:20
                    }}>
                    {user.points+" Pt"}
                </Text>

            </View>

            <NormalButton title={"change password"}/>
            <NormalButton title={"log out"}/>

        </View>

    );
}
