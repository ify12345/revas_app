import { View, Text, Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import RText from '../../components/RText'
import { ChevronLeftIcon, ChevronRightIcon } from 'react-native-heroicons/solid'
import styles from '../../assets/styles'
import RTouchableOpacity from '../../components/RTouchableOpacity'

export default function Profile() {
  return (
    <SafeAreaView
    style={{
         flex: 1,
         flexDirection: "column",
         padding: 10,
         backgroundColor:"white"
       }}
     >
       <View style={styles.topBar}>
         <RText fontSize='14'>My Account</RText>
       </View>

       <View style={styles.profileContainer}>

          <View style={styles.profileContainer1}>
            <View style={styles.profileContainer2}>
               <Image/>
               <View style={styles.userInfo}>
                <RText fontSize='14' color='black'>Daniel Eloma</RText>
                <RText fontSize='12' color='gray'>Profile details</RText>
               </View>
            </View>
            <ChevronRightIcon size={15} color="black"/>
          </View>

          <View style={styles.profileContainer1}>
            <View style={styles.profileContainer2}>
               <Image/>
               <View style={styles.userInfo}>
                <RText fontSize='14' color='black'>Bank details</RText>
                <RText fontSize='12' color='gray'>Add/Update Bank details</RText>
               </View>
            </View>
            <ChevronRightIcon size={15} color="black"/>
          </View>

          <View style={styles.profileContainer1}>
            <View style={styles.profileContainer2}>
               <Image/>
               <View style={styles.userInfo}>
                <RText fontSize='14' color='black'>Manage Company</RText>
                <RText fontSize='12' color='gray'>Company management</RText>
               </View>
            </View>
            <ChevronRightIcon size={15} color="black"/>
          </View>

          <View style={styles.profileContainer1}>
            <View style={styles.profileContainer2}>
               <Image/>
               <View style={styles.userInfo}>
                <RText fontSize='14' color='black'>Uploaded Documents</RText>
                <RText fontSize='12' color='gray'>View uplloaded documents</RText>
               </View>
            </View>
            <ChevronRightIcon size={15} color="black"/>
          </View>
        



       </View>
        <RTouchableOpacity>
          <RText 
          color='red'
          >Sign out</RText>
        </RTouchableOpacity>
 
    </SafeAreaView>
  )
}