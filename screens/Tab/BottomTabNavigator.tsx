import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { height } from '../../assets/constants';
import { Home, Search, Deals, Message, Profile } from './index';
import { AntDesign, Feather, FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();
const tabBarStyle = {
    padding: 20,
    borderRadius: 10,
    height: (height * 35) / 100,
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20
};

const BottomTabNavigator = () => {
    return (
        <Tab.Navigator
            initialRouteName='Home'
            activeColor='#FFD469'
            tabBarHideKeyBoard={true}
            headerShown={false}
            inactiveColor='#3e2465'
            barStyle={{ paddingBottom: 40 }}
            tabBarOptions={{
                style: tabBarStyle,
                showLabel: false,
                keyboardHidesTabBar: true,
                headerShown: false
            }}
        >
            <Tab.Screen name="Home" component={Home} options={{
                tabBarIcon: ({ focused }) => (
                    focused ?
                        <FontAwesome5 name="home" size={24} color="black" />
                        : <Feather name="home" size={24} color="black" />
                )
            }} />
            <Tab.Screen name="Search" component={Search} options={{
                tabBarIcon: ({ focused }) => (
                    focused ?
                        <AntDesign name="search1" size={24} color="black" />
                        : <FontAwesome name="search" size={24} color="black" />
                )
            }} />
            <Tab.Screen name="Deals" component={Deals} options={{
                tabBarIcon: ({ focused }) => (
                    focused ?
                        <MaterialCommunityIcons name="shopping" size={24} color="black" />
                        : <MaterialCommunityIcons name="shopping-outline" size={24} color="black" />
                )
            }} />
            <Tab.Screen name="Message" component={Message} options={{
                tabBarIcon: ({ focused }) => (
                    focused ?
                        <MaterialCommunityIcons name="message-reply-text" size={24} color="black" />
                        : <MaterialCommunityIcons name="message-outline" size={24} color="black" />
                )
            }} />
            <Tab.Screen name="Profile" component={Profile} options={{
                tabBarIcon: ({ focused }) => (
                    focused ?
                        <FontAwesome5 name="user-alt" size={24} color="black" />
                        : <FontAwesome name="user-o" size={24} color="black" />
                )
            }} />
        </Tab.Navigator>
    );
};

export default BottomTabNavigator;

const styles = StyleSheet.create({});
