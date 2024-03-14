import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Welcome from './src/pages/Welcome'
import Login from './src/pages/Login'
import Register from './src/pages/Register'
import ForgotPassword from "./src/pages/ForgotPassword";
import Home from "./src/pages/Home";

const Stack = createNativeStackNavigator()

export default function App(){
  return(
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown: false
      }}>

        <Stack.Screen name='Welcome' component={Welcome} options={{animation: 'slide_from_right'}}/>
        <Stack.Screen name='Login' component={Login} options={{animation: 'slide_from_right'}}/>
        <Stack.Screen name='Register' component={Register} options={{animation: 'slide_from_bottom'}}/>
        <Stack.Screen name='ForgotPassword' component={ForgotPassword} options={{animation: 'slide_from_bottom'}}/>
        <Stack.Screen name='Home' component={Home} options={{animation: 'slide_from_right'}}/>
      
      </Stack.Navigator>
    </NavigationContainer>
  )
}