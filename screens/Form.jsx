import React from 'react'
import { View } from 'react-native'
import { SafeAreaView, Text, TextInput} from 'react-native'
import CheckBox from '@react-native-community/checkbox';

const Form = ({navigation}) => {
  return (
    <SafeAreaView style={{flex:1, marginHorizontal: 20}}>
        <Text style={{fontSize: 24, fontWeight:"700", marginVertical: 20}}>Basic Information</Text>
    <View style={{flexDirection: "column" , gap: 4}}>
        <Text style={{fontSize: 14, fontWeight:"700",marginTop:50}}>Company Name</Text>
        <TextInput style={{borderWidth:1, padding: 12, borderColor:"#D0D5DD", borderRadius: 7}} placeholder='Enter company name'/>

        <Text style={{fontSize: 14, fontWeight:"700",marginTop:20}}>Email address</Text>
        <TextInput style={{borderWidth:1, padding: 12, borderColor:"#D0D5DD", borderRadius: 7}} placeholder='Enter company name'/>

        <Text style={{fontSize: 14, fontWeight:"700",marginTop:20}}>Phone number</Text>
        <TextInput style={{borderWidth:1, padding: 12, borderColor:"#D0D5DD", borderRadius: 7}} placeholder='Enter company name'/>

        <Text style={{fontSize: 14, fontWeight:"700",marginTop:20}}>Position </Text>
        <TextInput style={{borderWidth:1, padding: 12, borderColor:"#D0D5DD", borderRadius: 7}} placeholder='Enter company name'/>

        <Text style={{fontSize: 14, fontWeight:"700",marginTop:20}}>Phone number</Text>
        <TextInput style={{borderWidth:1, padding: 12, borderColor:"#D0D5DD", borderRadius: 7}} placeholder='Enter company name'/>

        <Text style={{fontSize: 14, fontWeight:"700",marginTop:20}}>Phone number</Text>
        <TextInput style={{borderWidth:1, padding: 12, borderColor:"#D0D5DD", borderRadius: 7}} placeholder='Enter company name'/>

       
    </View>
  
    </SafeAreaView>
  
  )
}

export default Form
