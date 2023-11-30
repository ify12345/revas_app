import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import OnboardingScreen from './screens/OnboardingScreen';
import Home from './screens/Home';
import { useState,useEffect } from 'react';
import React from 'react';
import Form from './screens/Form';
import Account from './screens/Account';
import Form2 from './screens/Form2';
import SignIn from './screens/SignIn';
const Stack = createStackNavigator()

export default function Index() {

  return (
  
      <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Onboarding" component={OnboardingScreen} />
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

});
