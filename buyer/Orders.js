import React from 'react'

import { View,Text, SafeAreaView, TextInput, Picker, Switch, Checkbox, Slider, TouchableOpacity,StyleSheet} from 'react-native';
import { useState } from 'react';

export default function Orders() {
  return (
    <SafeAreaView style={{flex:1, marginHorizontal: 20}}>
        <Text style={{fontSize: 24, fontWeight:"700", marginVertical: 10,borderBottomWidth:1, borderBottomColor:"black",paddingVertical:10}}>Create Order</Text>

    <View style={{flexDirection: "column" , gap: 4}}>
    <Text style={{fontSize: 18, fontWeight:"700"}}>Bid Details</Text>
        <Text style={{fontSize: 14, fontWeight:"400",marginTop:10}}>Type of Plastic</Text>
        <TextInput style={{borderWidth:1, padding: 12, borderColor:"#D0D5DD", borderRadius: 7}} placeholder='Enter type of plastic'/>
       

       <View style={{flexDirection:"row", justifyContent:"space-between", gap:10}}>
          
       <View style={{width:"50%"}}>
        <Text style={{fontSize: 14, fontWeight:"400",marginTop:10}}>Volume in Tonnes</Text>
        <TextInput style={{borderWidth:1, padding: 12, borderColor:"#D0D5DD", borderRadius: 7}}  
        keyboardType="email-address" />
       </View>
         
       <View style={{width:"45%"}}>
         <Text style={{fontSize: 14, fontWeight:"400",marginTop:10}}>Duration</Text>
          <TextInput style={{borderWidth:1, padding: 12, borderColor:"#D0D5DD", borderRadius: 7}} keyboardType='numeric'/>
        </View>

       </View>
     


       
        <Text style={{fontSize: 14, fontWeight:"400",marginTop:10}}>Price(in USD) </Text>
        <TextInput style={{borderWidth:1, padding: 12, borderColor:"#D0D5DD", borderRadius: 7}} placeholder='$4000'/>

        <Text style={{fontSize: 14, fontWeight:"400",marginTop:10}}>Destination</Text>
        <TextInput style={{borderWidth:1, padding: 12, borderColor:"#D0D5DD", borderRadius: 7}} placeholder='Destination'/>

        <Text style={{fontSize: 14, fontWeight:"400",marginTop:10}}>Payment Terms</Text>
        <TextInput style={{borderWidth:1, padding: 12, borderColor:"#D0D5DD", borderRadius: 7}} placeholder='Enter Payment Terms'/>

        <Text style={{fontSize: 14, fontWeight:"400",marginTop:10}}>Shipping Terms </Text>
        <TextInput style={{borderWidth:1, padding: 12, borderColor:"#D0D5DD", borderRadius: 7}} placeholder='Enter Shipping Terms'/>

       
    </View>
    
    <TouchableOpacity style={{backgroundColor: "black", marginHorizontal: 10 ,  padding: 20,marginVertical:20}} >
                <Text style={{color: 'white', textAlign: "center"}}>Create Order</Text>
    </TouchableOpacity>

  </SafeAreaView>
   
  )
}

const styles = StyleSheet.create({})