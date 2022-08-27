import {Dimensions, Image, ScrollView, Text, View} from 'react-native';
import React from "react";
import useGlobalStyles from '../styles';
import * as Progress from 'react-native-progress';
import {user} from '../data/user';

export default function Acceuil() {
    const style = useGlobalStyles()
    return (
        <ScrollView style={style.page}>
            <Text style={{
                fontSize:26,
                color:"#fff",
                marginLeft:30,
                marginBottom:20

            }}>
                {'Welcome Back , '+user.name}
            </Text>
            <View style={{
                alignSelf:"center",
                width : Dimensions.get("window").width*0.9,
                height:60,
                backgroundColor:"rgba(92,175,92,0.87)",
                borderRadius:20,
                marginBottom:20,
                flexDirection:"row",
                alignItems:"center",
                justifyContent: "space-around"
            }}>
                <Text style={{
                    color:'#fff',
                    fontSize:19
                }}>
                    Points :
                </Text>
                <Text style={{
                    color:'#fff',
                    fontSize:21
                }}>
                    {user.points+" Pt"}
                </Text>
            </View>
            <Text style={{
                color:'#fff',
                fontSize:20,
                marginLeft:28,
                marginBottom:12
            }}>
                Progress :
            </Text>
            <View style={{
                alignSelf:"center",
                width : Dimensions.get("window").width*0.9,
                height:200,
                backgroundColor:"rgba(92,175,92,0.87)",
                borderRadius:20,
                flexDirection:"row",
                alignContent:"center",
                alignItems:"center",
                justifyContent: "space-around",
                marginBottom:20,
            }}>
                    <Progress.Circle size={110} progress ={0.8} color ={"#fff"} borderWidth ={0} thickness ={7} showsText ={true} formatText = {()=>user.points +' / '+"5000"} textStyle={{
                        fontSize:18,endAngle:0
                    }}/>
                <View style={{
                    flexDirection:"column",
                    justifyContent:"space-around",
                    height:"50%"
                }}>
                    <Progress.Bar progress={0.3} width={80} color={"#fff"} />
                    <Progress.Bar progress={0.7} width={80} color={"#fff"}/>
                    <Progress.Bar progress={0.1} width={80} color={"#fff"} />
                </View>
            </View>
            <Text style={{
                color:'#fff',
                fontSize:20,
                marginLeft:28,
                marginBottom:12
            }}>
                Popular Products :
            </Text>
            <ScrollView
                contentContainerStyle={{
                    alignItems:"center",
                    alignContent:"center"
                }}
                horizontal={true}
                style={{
                alignSelf:"center",
                width : Dimensions.get("window").width*0.9,
                height:250,
                backgroundColor:"rgba(92,175,92,0.87)",
                borderRadius:20,
                marginBottom:20,
            }}>
                <View style={{
                    width:Dimensions.get("window").width*0.6,
                    height:"90%",
                    backgroundColor:"#fff",
                    borderRadius:20,
                    alignSelf:"center",
                    marginHorizontal:13
                }}>
                    <View
                        style={{height:150 , alignSelf:"center"}}
                    >
                        <Image source={require("../assets/p1.jpg")}
                               style={{

                                   height:150,
                                   width:200,
                               }}/>
                    </View>
                    <Text style={{
                        color:"#000",
                        fontSize:22,
                        alignSelf:"center"
                    }}>
                        Sneakers
                    </Text>
                    <View style={{
                        flexDirection:"row",
                        justifyContent:"space-between",
                        marginHorizontal:20
                    }}>
                        <Text style={{
                            color:"#000",
                            fontSize:20,
                        }}>
                            Decathlon
                        </Text>
                        <Text style={{
                            fontSize:18
                        }}>
                            8091 Pt
                        </Text>
                    </View>
                </View>
                <View style={{
                    width:Dimensions.get("window").width*0.6,
                    height:"90%",
                    backgroundColor:"#fff",
                    borderRadius:20,
                    alignSelf:"center",
                    marginHorizontal:13
                }}>
                    <View
                        style={{height:150,alignSelf:"center"}}
                    >
                        <Image source={require("../assets/p2.jpg")}
                               style={{
                                   height:150,
                                   width:200,
                               }}/>
                    </View>
                    <Text style={{
                        color:"#000",
                        fontSize:22,
                        alignSelf:"center"
                    }}>
                        Pat
                    </Text>
                    <View style={{
                        flexDirection:"row",
                        justifyContent:"space-between",
                        marginHorizontal:20
                    }}>
                        <Text style={{
                            color:"#000",
                            fontSize:20,
                        }}>
                            Artalk
                        </Text>
                        <Text style={{
                            fontSize:18
                        }}>
                            10963 Pt
                        </Text>
                    </View>
                </View>
                <View style={{
                    width:Dimensions.get("window").width*0.6,
                    height:"90%",
                    backgroundColor:"#fff",
                    borderRadius:20,
                    alignSelf:"center",
                    marginHorizontal:13
                }}>
                    <View
                        style={{height:150,alignSelf:"center"}}
                    >
                        <Image source={require("../assets/p3.jpg")}
                               style={{

                                   height:150,
                                   width:200,
                               }}/>
                    </View>
                    <Text style={{
                        color:"#000",
                        fontSize:22,
                        alignSelf:"center"
                    }}>
                        a Vase
                    </Text>
                    <View style={{
                        flexDirection:"row",
                        justifyContent:"space-between",
                        marginHorizontal:20
                    }}>
                        <Text style={{
                            color:"#000",
                            fontSize:20,
                        }}>
                            Artalk
                        </Text>
                        <Text style={{
                            fontSize:18
                        }}>
                            2921 Pt
                        </Text>
                    </View>
                </View>
            </ScrollView>
        </ScrollView>

    );
}
