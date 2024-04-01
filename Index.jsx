import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts } from 'expo-font';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import OnboardingScreen from './screens/onboarding/OnboardingScreen';
import Home from './screens/Home';
import { useState,useEffect } from 'react';
import * as SplashScreen from "expo-splash-screen";
import { useCallback } from 'react';
import React from 'react';
import Form from './screens/Form';
import Account from './screens/Account';
import Form2 from './screens/Form2';
import SignIn from './screens/SignIn';



const Stack = createStackNavigator()

export default function Index() {
  const [fontsLoaded] = useFonts({
    GeneralSans: require("./assets/fonts/GeneralSans-Regular.ttf"),
    GeneralSansMedium: require("./assets/fonts/GeneralSans-Medium.ttf"),
    GeneralSansSemibold: require("./assets/fonts/GeneralSans-Semibold.ttf"),
  })


  const onLayoutRootView = useCallback(async()=>{
    if(fontsLoaded){
      await SplashScreen.hideAsync();

    }
    if(!fontsLoaded){
      return null
    }
  })
  return (
  
      <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
        name="Onboarding"
        component={OnboardingScreen}
        options={{ headerShown: false }}
        />
        
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Form" component={Form} />
        <Stack.Screen name="Form2" component={Form2} />
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="Account" component={Account} />
      </Stack.Navigator>
    </NavigationContainer>
   
  );
}

const styles = StyleSheet.create({
    container:{
      fontFamily: "GeneralSansSemibold",
    }
});
