import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";
import ChevronLeftIcon from '../assets/icons/ChevronLeftIcon';


export default function BackButton({navigation}){
  return (
    <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={styles.back}
        >
      <ChevronLeftIcon/>
    </TouchableOpacity>
  )
}


const styles = StyleSheet.create({
    back:{
        width: 40,
        justifyContent: 'center',
        alignItems:'center',
        height: 25,
        flexDirection: 'row',
        paddingTop: 3
    }
})