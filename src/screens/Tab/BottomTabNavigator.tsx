import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { height, width } from "../../assets/constants";
import { Home, Search, Deals, Message, Profile } from "./index";
import {
  ChatBubbleBottomCenterIcon,
  HomeIcon,
  MagnifyingGlassIcon,
  ShoppingBagIcon,
  UserIcon,
} from "react-native-heroicons/solid";
import ItemDetailScreen from "../Seller/ItemDetails";
import { color } from "react-native-elements/dist/helpers";
import { useIsFocused } from "@react-navigation/native";
import DashBoard from "./DashBoard";

const Tab = createBottomTabNavigator();
const tabBarStyle = {
  padding: 20,
  height: 90,
  position: "absolute",
  bottom: 0,
  width,
};

const BottomTabNavigator = ({ navigation }: any) => {
  const activeLabelStyle = {
    color: "red", // Change this to the color you want for the active tab bar label
  };

  const inactiveLabelStyle = {
    color: "gray", // Change this to the color you want for the inactive tab bar label
  };
  const isFocused = useIsFocused();

  return (
    <Tab.Navigator initialRouteName="DashBoard">
      <Tab.Screen
        name="DashBoard"
        component={DashBoard}
        options={{
          tabBarShowLabel: true,
          tabBarLabelStyle: {
            color: isFocused ? "black" : "gray", // Change color based on focus state
          },
          headerShown: false,
          tabBarIcon: ({ focused }) =>
            focused ? (
              <HomeIcon size={24} color="#000" />
            ) : (
              <HomeIcon size={24} color="gray" />
            ),
        }}
      />

      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarShowLabel: true,
          headerShown: false,
          tabBarLabelStyle: {
            color: isFocused ? "black" : "gray", // Change color based on focus state
          },
          tabBarIcon: ({ focused }) =>
            focused ? (
              <MagnifyingGlassIcon size={24} color="#000" />
            ) : (
              <MagnifyingGlassIcon size={24} color="gray" />
            ),
        }}
      />
      <Tab.Screen
        name="Deals"
        component={Deals}
        options={{
          tabBarShowLabel: true,
          headerShown: false,
          tabBarLabelStyle: {
            color: isFocused ? "black" : "gray", // Change color based on focus state
          },
          tabBarIcon: ({ focused }) =>
            focused ? (
              <ShoppingBagIcon size={24} color="#000" />
            ) : (
              <ShoppingBagIcon size={24} color="gray" />
            ),
        }}
      />
      <Tab.Screen
        name="Message"
        component={Message}
        options={{
          tabBarShowLabel: true,
          headerShown: false,
          tabBarLabelStyle: {
            color: isFocused ? "black" : "gray", // Change color based on focus state
          },
          tabBarIcon: ({ focused }) =>
            focused ? (
              <ChatBubbleBottomCenterIcon size={24} color="#000" />
            ) : (
              <ChatBubbleBottomCenterIcon size={24} color="gray" />
            ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarShowLabel: true,
          headerShown: false,
          tabBarLabelStyle: {
            color: isFocused ? "black" : "gray", // Change color based on focus state
          },
          tabBarIcon: ({ focused }) =>
            focused ? (
              <UserIcon size={24} color="#000" />
            ) : (
              <UserIcon size={24} color="gray" />
            ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;

const styles = StyleSheet.create({
  tabColor: {
    color: "black",
  },
});
