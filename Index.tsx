import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { useFonts } from 'expo-font';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import OnboardingScreen from './screens/onboarding/OnboardingScreen';
import Home from './screens/onboarding/Home';
import { useState, useEffect } from 'react';
import * as SplashScreen from "expo-splash-screen";
import { useCallback } from 'react';
import React from 'react';
import SignUp from './screens/onboarding/SignUp';
import Account from './screens/onboarding/Account';
import SignIn from './screens/onboarding/SignIn';
import SellerProfileSetup from './screens/Seller/SellerProfileSetup';
import SellersAccount from './screens/Seller/SellersAccount';
import BottomTabNavigator from './screens/Tab/BottomTabNavigator';
import CreateListing from './screens/Seller/CreateListing';
 

const Stack = createStackNavigator();

export default function Index() {
  const [fontsLoaded] = useFonts({
    GeneralSans: require("./assets/fonts/GeneralSans-Regular.ttf"),
    GeneralSansMedium: require("./assets/fonts/GeneralSans-Medium.ttf"),
    GeneralSansSemibold: require("./assets/fonts/GeneralSans-Semibold.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
    if (!fontsLoaded) {
      return null;
    }
  });

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen
          name="Onboarding"
          component={OnboardingScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUp}
          options={{ headerShown: false }}
        /> */}
        <Stack.Screen
          name="SignIn"
          component={SignIn}
          options={{ headerShown: false }}
        />
        {/* <Stack.Screen
          name="SellerProfileSetup"
          component={SellerProfileSetup}
          options={{ headerShown: false }}
        /> */}
        <Stack.Screen
          name="Account"
          component={Account}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SellersDashboard"
          component={SellersAccount}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="BottomTabNavigator"
          component={BottomTabNavigator}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="CreateListing"
          component={CreateListing}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    fontFamily: "GeneralSansSemibold",
  },
});
