import React, {useEffect, useState} from 'react';

import {Menu, Provider, useTheme} from 'react-native-paper';
import {Pressable, StatusBar, View} from 'react-native';

import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import darkTheme from './themes/DarkTheme';
import defaultTheme from './themes/DefaultTheme';
import Welcome from './pages/welcome';
import Signin from './pages/signin';
import Signup from './pages/signup';
import Home from './pages/home';
import Profile from './pages/profile';
import Buy from './pages/buy';

const Stack = createNativeStackNavigator();

export default function App() {
    const [theme, setTheme] = useState("Dark");
    return (
        <Provider theme={theme==="Dark" ? darkTheme : defaultTheme}>
            <NavigationContainer theme={theme==="Dark" ? darkTheme : defaultTheme}>
                <StatusBar backgroundColor={theme==="Dark"?'rgb(42,37,37)':'rgb(242, 242, 242)'} barStyle={theme==="Dark" ? 'light-content' : 'dark-content'}/>
                <NavStack isDarkMode={theme} setTheme={setTheme}/>
            </NavigationContainer>
        </Provider>

    );
}

const NavStack = () => {
  const WelcomeScreen =() => <Welcome/>
  const SignInScreen =() => <Signin/>
  const SignUpScreen =() => <Signup/>
  const HomeScreen =() => <Home/>
  const ProfileScreen =() => <Profile/>
  const BuyScreen =() => <Buy/>
  return (
      <Stack.Navigator>
          <Stack.Screen
              name="Welcome"
              options={{
                  headerShown:false,
              }}
              component={WelcomeScreen}
          />
          <Stack.Screen
              name="SignIn"
              options={{
                  headerShown:false,
              }}
              component={SignInScreen}
          />
          <Stack.Screen
              name="SignUp"
              options={{
                  headerShown:false,
              }}
              component={SignUpScreen}
          />
          <Stack.Screen
              name="Screen"
              options={{
                  headerShown:false,
              }}
              component={HomeScreen}
          />
          <Stack.Screen
              name="Profile"
              options={{
                  headerShown:false,
              }}
              component={ProfileScreen}
          />
          <Stack.Screen
              name="Buy"
              options={{
                  headerShown:false,
              }}
              component={BuyScreen}
          />
      </Stack.Navigator>
  );
};
const More = ({theme}) => {
    const navigation = useNavigation();
    const [visible, setVisible] = useState(true);
    const openMenu = () => setVisible(true);
    const closeMenu = () => setVisible(false);
    return (
        <View>
            <Menu
                statusBarHeight={21}
                visible={visible}
                onDismiss={closeMenu}
                theme={theme}
                anchor={
                    <Pressable
                        style={{
                            marginTop: 28,
                            width: 20,
                            height: 20,
                        }}
                        onPress={openMenu}>
                        <Ionicons name="ellipsis-vertical-outline" size={15} color={theme==="Dark" ? `#d3d3d3` : `#779d9d`}/>
                    </Pressable>
                }
            >
                <View>
                    <Menu.Item
                        titleStyle={{color:"#000"}}
                        style={{
                            height: 45,
                            width: 150,
                            fontSize: 20,
                        }}
                        onPress={() => {
                            closeMenu();
                            navigation.navigate('Settings');
                        }} title="Settings"/>
                </View>
            </Menu>
        </View>
    );
};
