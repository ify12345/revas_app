import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import OnboardingScreen from './screens/OnboardingScreen';
import Home from './screens/Home';
import { useState,useEffect } from 'react';
import React from 'react';
import Form from './screens/Form';
const Stack = createStackNavigator()

export default function App() {
  const[launched,setLaunched] = React.useState(true)
  React.useEffect(()=>{
    
  })
  return (
    launched != null &&(
      <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Onboarding" component={OnboardingScreen} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Form" component={Form} />
      </Stack.Navigator>
    </NavigationContainer>
    )
  );
}

const styles = StyleSheet.create({

});
