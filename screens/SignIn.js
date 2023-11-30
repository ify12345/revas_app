import React from 'react'

import { View,Text, SafeAreaView, TextInput, Picker, Switch, Checkbox, Slider, TouchableOpacity} from 'react-native';
import { useState } from 'react';

const SignIn = ({navigation}) => {
    const [isChecked, setIsChecked] = useState(true);
    const handleToggleCheckbox = () => {
        setIsChecked(!isChecked);
      };
    
  return (
    <SafeAreaView style={{flex:1, marginHorizontal: 20}}>
        <Text style={{fontSize: 24, fontWeight:"700", marginTop: 50}}>Welcome Back</Text>
        <Text style={{fontSize: 14, fontWeight:"400", marginVertical: 5}}>Lets get you logged In</Text>
        <Text style={{fontSize: 14, fontWeight:"400", marginVertical: 5}}>....</Text>

    <View style={{flexDirection: "column" , gap: 4}}>
        <Text style={{fontSize: 14, fontWeight:"700",marginTop:20}}>Email address</Text>
        <TextInput style={{borderWidth:1, padding: 12, borderColor:"#D0D5DD", borderRadius: 7}}   placeholder="Enter your email address"
        keyboardType="email-address" />

        <Text style={{fontSize: 14, fontWeight:"700",marginTop:20}}>Password</Text>
        <TextInput style={{borderWidth:1, padding: 12, borderColor:"#D0D5DD", borderRadius: 7}} placeholder='Enter your password' keyboardType='numeric'/>
       
    </View>
    
    <TouchableOpacity style={{backgroundColor: "black", marginHorizontal: 5, padding: 20,marginVertical:20}} >
                <Text style={{color: 'white', textAlign: "center"}}  onPress={()=>navigation.navigate("Account")}>Sign in</Text>
    </TouchableOpacity>
     
    <TouchableOpacity style={{bmarginHorizontal: 5 ,  padding: 20}} >
                <Text style={{color: 'black', textAlign: "center"}}  onPress={()=>navigation.navigate("Account")}>I forgot my password</Text>
    </TouchableOpacity>
     
    
    </SafeAreaView>
  
  )
}

export default SignIn
