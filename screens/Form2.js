import React from 'react'

import { View,Text, SafeAreaView, TextInput, Picker, Switch, Checkbox, Slider, TouchableOpacity} from 'react-native';
import { useState } from 'react';

const Form2 = ({navigation}) => {
    const [isChecked, setIsChecked] = useState(true);
    const handleToggleCheckbox = () => {
        setIsChecked(!isChecked);
      };
    
  return (
    <SafeAreaView style={{flex:1, marginHorizontal: 20}}>
        <Text style={{fontSize: 24, fontWeight:"700", marginVertical: 10}}>Basic Information</Text>
    <View style={{flexDirection: "column" , gap: 4}}>
        <Text style={{fontSize: 14, fontWeight:"700",marginTop:40}}>Company Name</Text>
        <TextInput style={{borderWidth:1, padding: 12, borderColor:"#D0D5DD", borderRadius: 7}} placeholder='Enter company name'/>
 
        <Text style={{fontSize: 14, fontWeight:"700",marginTop:10}}>Business email address</Text>
        <TextInput style={{borderWidth:1, padding: 12, borderColor:"#D0D5DD", borderRadius: 7}}   placeholder="Enter your email address"
        keyboardType="email-address" />

        <Text style={{fontSize: 14, fontWeight:"700",marginTop:10}}>Phone number</Text>
        <TextInput style={{borderWidth:1, padding: 12, borderColor:"#D0D5DD", borderRadius: 7}} placeholder='Enter your phone number' keyboardType='numeric'/>

        <Text style={{fontSize: 14, fontWeight:"700",marginTop:10}}>Position </Text>
        <TextInput style={{borderWidth:1, padding: 12, borderColor:"#D0D5DD", borderRadius: 7}} placeholder='Enter job role'/>

        <Text style={{fontSize: 14, fontWeight:"700",marginTop:10}}>Country</Text>
        <TextInput style={{borderWidth:1, padding: 12, borderColor:"#D0D5DD", borderRadius: 7}} placeholder='Enter your country'/>

        <Text style={{fontSize: 14, fontWeight:"700",marginTop:10}}>Plastic volume</Text>
        <TextInput style={{borderWidth:1, padding: 12, borderColor:"#D0D5DD", borderRadius: 7}} placeholder='Enter volume'/>

        <Text style={{fontSize: 14, fontWeight:"700",marginTop:10}}>Demand capacity(monthly) </Text>
        <TextInput style={{borderWidth:1, padding: 12, borderColor:"#D0D5DD", borderRadius: 7}} placeholder='Enter demand capacity in tonnes'/>

         <View style={{flexDirection:"row", gap:4, marginTop:10}}>
         <View
            style={{
              width: 20,
              height: 20,
              borderRadius: 4,
              borderWidth: 1,
              borderColor: 'black',
              justifyContent: 'center',
              alignItems: 'center',
              marginRight: 10,
              backgroundColor: isChecked ? 'black' : 'transparent',
            }}
          >
            {isChecked && <Text style={{ color: 'white' }}>✔</Text>}
          </View> 
               <Text style={{width: 296}}>I accept the Terms & Conditions and Privacy Policy by joining Revas.</Text>    
         </View>
       
    </View>
    
    <TouchableOpacity style={{backgroundColor: "black", marginHorizontal: 10 ,borderRadius: 50 ,  padding: 20,marginVertical:20}} >
                <Text style={{color: 'white', textAlign: "center"}}  onPress={()=>navigation.navigate("Account")}>Register</Text>
    </TouchableOpacity>
     
       <View style={{flexDirection:"row", marginHorizontal:"auto", width: '100%',justifyContent:"center"}}>
        <Text>Already have an account? </Text>
        <TouchableOpacity onPress={()=>navigation.navigate("SignIn")}>
            <Text>Sign In</Text>
        </TouchableOpacity>
       </View>
    </SafeAreaView>
  
  )
}

export default Form2
