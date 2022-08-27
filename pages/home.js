import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Profile from './profile';
import Ionicons from 'react-native-vector-icons/Ionicons';
import React from 'react';
import Acceuil from './acceuil';
import Cart from './cart';
import Scan from './scan';
import Location from './location';

const Tab = createMaterialBottomTabNavigator();

export default function MyTabs() {
    const AcceuilScreen =() => <Acceuil/>
    const CartScreen =() => <Cart/>
    const ScanScreen =() => <Scan/>
    const ProfileScreen =() => <Profile/>
    const LocationScreen =() => <Location/>
    return (
        <Tab.Navigator
            initialRouteName="Home"
            activeColor={'rgb(24,82,20)'}

            inactiveColor={"#fff"}
            barStyle={{ backgroundColor: '#18260c' }}
        >
            <Tab.Screen name="Home"
                        component={AcceuilScreen}
                        options={{
                            tabBarLabel: 'Home',
                            tabBarIcon: ({ color }) => (
                                <Ionicons name="home" color={color} size={26} />
                            ),
                        }}
            />
            <Tab.Screen name="Cart"
                        component={CartScreen}
                        options={{
                            tabBarLabel: 'Cart',
                            tabBarIcon: ({ color }) => (
                                <Ionicons name={'cart' } color={color} size={26} />
                            ),
                        }}
            />
            <Tab.Screen name="Scan"
                        component={ScanScreen}
                        options={{
                            tabBarLabel: 'Scan',
                            tabBarIcon: ({ color }) => (
                                <Ionicons name={'scan' } color={color} size={26} />
                            ),
                        }}
            />
            <Tab.Screen name="Location"
                        component={LocationScreen}
                        options={{
                            tabBarLabel: 'Location',
                            tabBarIcon: ({ color }) => (
                                <Ionicons name={'location' } color={color} size={26} />
                            ),
                        }}
            />
            <Tab.Screen name="Profile"
                        component={ProfileScreen}
                        options={{
                            tabBarLabel: 'Profile',
                            tabBarIcon: ({ color }) => (
                                <Ionicons name={'person' } color={color} size={26} />
                            ),
                        }}
            />
        </Tab.Navigator>
    );
}
