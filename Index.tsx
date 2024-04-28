import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { useFonts } from 'expo-font';
import { NavigationContainer } from "@react-navigation/native";
import { CardStyleInterpolators, createStackNavigator } from "@react-navigation/stack";
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
import ItemDetailScreen from './screens/Seller/ItemDetails';
import ProductMore from './buyer/ProductMore';
import Home1 from './screens/Tab/Home';
import LiveOrder from './screens/Seller/LiveOrder';
import Verification from './screens/onboarding/Verification';
import ResetPassword from './screens/onboarding/ResetPassword';
import CreateNewPassword from './screens/onboarding/CreateNewPassword';
import ResetSuccess from './screens/onboarding/Auth/ResetSuccess';

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
        <Stack.Screen
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
        />
        <Stack.Screen
          name="Verification"
          component={Verification}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SignIn"
          component={SignIn}
          options={{ headerShown: false }}
        /> 
         <Stack.Screen
          name="SellerProfileSetup"
          component={SellerProfileSetup}
          options={{ headerShown: false }}
        />
        
        <Stack.Screen
          name="ResetPassword"
          component={ResetPassword}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="CreateNewPassword"
          component={CreateNewPassword}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ResetSuccess"
          component={ResetSuccess}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="BottomTabNavigator"
          component={BottomTabNavigator}
          options={{ headerShown: false }}
        />
          <Stack.Screen
          name="Home1"
          component={Home1}
          options={{ headerShown: false }}
        />
          <Stack.Screen
          name="Product"
          component={ProductMore}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="CreateListing"
          component={CreateListing}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="LiveOrder"
          component={LiveOrder}
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
