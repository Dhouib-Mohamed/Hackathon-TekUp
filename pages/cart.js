import {Dimensions, Image, Pressable, Text, View} from 'react-native';
import React, {useState} from 'react';
import useGlobalStyles from '../styles';
import Input from '../components/input';
import Modal from 'react-native-paper/src/components/Modal';
import {Portal} from 'react-native-paper';

export default function Cart() {
    const style = useGlobalStyles()
    return (
        <View  style={style.page}>
            <Input title={" Search"}/>
            <Provider name={"Decathlon"} image={require('../assets/Decathlon.jpg')}/>
            <Provider name={"Artalk"} image={require('../assets/Artalk.png')}/>
        </View>

    );
}

const Provider = ({name,image})=>{
    const [drawer,setDrawer] = useState(false)
    return(
        <>
        <Pressable
            onPress={()=>setDrawer(true)}
            style={{
            width:Dimensions.get("window").width*0.9,
            alignSelf:"center",
                alignItems:"center",
                alignContent:"center",
            height:90,
            flexDirection:"row",
                borderRadius:20,
                backgroundColor:"#fff",
                marginVertical:20

        }}>
            <View
                style={{height:80}}
            >
                <Image source={image}
                       style={{
                           padding:0,
                           marginHorizontal:20,
                           height:80,
                           width:120,
                       }}/>
            </View>

                    <Text style={{
                        color:"#000",
                        fontSize:30,
                    }}>
                        {name}
                    </Text>
        </Pressable>
            <Portal>
                <Modal visible={drawer} onDismiss={()=>{setDrawer(false)}} contentContainerStyle={{backgroundColor: "rgb(92,175,92)",width:Dimensions.get("window").width*0.9,height:Dimensions.get("window").height*0.52,borderRadius:10,alignSelf:"center"}}>
                    <Text
                        style={{
                            color:"#fff",
                            fontSize:24,
                            marginTop:20,
                            marginLeft:10
                        }}>
                        Gift Cards For {name} :
                    </Text>
                    <Achat x={10}/>
                    <Achat x={20}/>
                    <Achat x={50}/>
                    <Achat x={100}/>
                </Modal>
            </Portal>
        </>
    )
}
const Achat = ({x})=>{
    return(
        <View style={{
            width:"100%",
            height:90,
            padding :20,
            flexDirection:"row",
            alignContent:"center",
            alignItems:"center",
            justifyContent:"space-between"

        }}>
            <Text
            style={{
                color:"#fff",
                fontSize:19
            }}>
                Gift Card Of {x} Dinars
            </Text>
            <Pressable
                style={{
                    marginVertical:15,
                    alignSelf:"center",
                    backgroundColor: "#fff",
                    width: 80,
                    height: 44,
                    justifyContent: 'center',
                    alignItems: 'center',
                    alignContent:"center",
                    padding: 10,
                    borderRadius: 20,
                }}
                onPress={()=>{}}
            >
                <Text
                    style={{
                        color:"rgb(11,61,7)",
                        fontWeight:"700",
                        fontSize:15
                    }}
                >
                    Buy
                </Text>
            </Pressable>

        </View>
    )
}
