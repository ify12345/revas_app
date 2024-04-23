import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { height, width } from '../../assets/constants';
import { Home, Search, Deals, Message, Profile } from './index';
import { ChatBubbleBottomCenterIcon, HomeIcon, MagnifyingGlassIcon, ShoppingBagIcon, UserIcon } from 'react-native-heroicons/solid';
import ItemDetailScreen from '../Seller/ItemDetails';

const Tab = createBottomTabNavigator();
const tabBarStyle = {
    padding: 20,
    height: 90,
    position: 'absolute',
    bottom: 0,
    width,
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
            tabBarStyle: tabBarStyle,
            tabBarShowLabel: true,
            headerShown: false,
            tabBarIcon: ({ focused }) => (
                focused ?
                     <HomeIcon  size={24} color="#000"/>
                    : <HomeIcon  size={24} color="gray" />
            )
        }} 
        
        />

        <Tab.Screen name="Search" component={Search} options={{
            tabBarStyle: tabBarStyle,
            tabBarShowLabel: true,
            headerShown: false,
            tabBarIcon: ({ focused }) => (
                focused ?
                <MagnifyingGlassIcon  size={24} color="#000"/>
                    : <MagnifyingGlassIcon  size={24} color="gray" />
            )
        }} />
        <Tab.Screen name="Deals" component={Deals} options={{
            tabBarStyle: tabBarStyle,
            tabBarShowLabel: true,
            headerShown: false,
            tabBarIcon: ({ focused }) => (
                focused ?
                <ShoppingBagIcon  size={24} color="#000"/>
                    : <ShoppingBagIcon  size={24} color="gray" />
            )
        }} />
        <Tab.Screen name="Message" component={Message} options={{
            tabBarStyle: tabBarStyle,
            tabBarShowLabel: true,
            headerShown: false,
            tabBarIcon: ({ focused }) => (
                focused ?
                <ChatBubbleBottomCenterIcon  size={24} color="#000"/>
                    : <ChatBubbleBottomCenterIcon   size={24} color="gray" />
            )
        }} />
        <Tab.Screen name="Profile" component={Profile} options={{
            tabBarStyle: tabBarStyle,
            tabBarShowLabel: true,
            headerShown: false,
            tabBarIcon: ({ focused }) => (
                focused ?
                <UserIcon  size={24} color="#000"/>
                    : <UserIcon  size={24} color="gray" />
            )
        }} />
    </Tab.Navigator>
    
    );
};

export default BottomTabNavigator;

const styles = StyleSheet.create({});
