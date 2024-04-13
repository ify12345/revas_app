
import React from 'react'
import { SafeAreaView, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import DashBoard from '../buyer/DashBoard';
import Market from '../buyer/Market';
import Orders from '../buyer/Orders';
import Settings from '../buyer/Settings';
import { Foundation } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator()
const screenOptions = {
    tabBarShowLabel: false,
    headerShown: false,
    tabBarStyle:{
        position: "absolute",
        right: 0,
        bottom: 0,
        left:0,
        elevation: 0,
        height: 90,
        background: "#fff",
        
    }
}

const Account = () => {
  return (
    <Tab.Navigator screenOptions={screenOptions}>
        <Tab.Screen options={{
           tabBarIcon:({focused})=>{
             return(
                <View style={{alignItems:"center", justifyContent: "center"}}>
               <Foundation name="home" size={29} color={"black" }/>
                    {
                        focused?
                        <Entypo name="dot-single" size={24} color="black" />
                         :
                         <Text style={{fontSize: 18,fontWeight:"200"}}>Home</Text>
                    }
                </View>
             )
               
           }
        }} 
        name="Dashboard" component={DashBoard} />


        <Tab.Screen  options={{
           tabBarIcon:({focused})=>{
             return(
                <View style={{alignItems:"center", justifyContent: "center"}}>
                  <Entypo name="shop" size={29} color="black" />
                   
                    {
                        focused?
                        <Entypo name="dot-single" size={24} color="black" />
                         :
                         <Text style={{fontSize: 18,fontWeight:"200"}}>Market</Text>
                    }
                   
                </View>
             )
               
           }
        }}  name="Market" component={Market} />

       
    <Tab.Screen name="Plus"
        options={{
           tabBarIcon:({focused})=>{
             return(
                <View style={{alignItems:"center", justifyContent: "center"}}>
                 <AntDesign name="pluscircle" size={59} color="black" />
                </View>
             )
               
           }
        }} component={Orders} />


        <Tab.Screen name="Orders"
        options={{
           tabBarIcon:({focused})=>{
             return(
                <View style={{alignItems:"center", justifyContent: "center"}}>
                 <Ionicons name="cart-outline" size={29} color="black" />
                    {
                        focused?
                        <Entypo name="dot-single" size={24} color="black" />
                         :
                         <Text style={{fontSize: 18,fontWeight:"200"}}>Orders</Text>
                    }
                </View>
             )
               
           }
        }} component={Orders} />


 


        <Tab.Screen
           options={{
           tabBarIcon:({focused})=>{
             return(
                <View style={{alignItems:"center", justifyContent: "center"}}>
                 <Ionicons name="person-outline" size={29} color={"black"} />
                   {
                        focused?
                        <Entypo name="dot-single" size={24} color="black" />
                         :
                         <Text style={{fontSize: 18,fontWeight:"200"}}>Settings</Text>
                    }
                </View>
             )
               
           }
        }}
         name="Settings" component={Settings} />
    </Tab.Navigator>
  )
}

export default Account
