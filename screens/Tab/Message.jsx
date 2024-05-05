import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import styles from '../../assets/styles'
import RText from '../../components/RText'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { UserCircleIcon } from 'react-native-heroicons/solid'

export default function Message() {
  return (
    <SafeAreaView
    style={{
         flex: 1,
         flexDirection: "column",
         padding: 10,
         backgroundColor:"white"
       }}
     >
       <View style={styles.profileTopBar}>
         <RText fontSize='14'>Messages</RText>
       </View>

       <View style={styles.profileContainer}>

          <TouchableOpacity style={styles.profileContainer1}
        >
            <View style={styles.profileContainer2}>
               <UserCircleIcon color="gray" size={30} />
               <View style={styles.userInfo}>
                <RText fontSize='12' color='black'>User 123#</RText>
                <RText fontSize='10' color='gray'>When can the products be delivered</RText>
               </View>
            </View>
            <RText>11:00</RText>
          </TouchableOpacity>
          <TouchableOpacity style={styles.profileContainer1}
         >
            <View style={styles.profileContainer2}>
               <UserCircleIcon color="gray" size={30} />
               <View style={styles.userInfo}>
                <RText fontSize='12' color='black'>User 123#</RText>
                <RText fontSize='10' color='gray'>When can the products be delivered</RText>
               </View>
            </View>
            <RText>11:20</RText>
          </TouchableOpacity>

          <TouchableOpacity style={styles.profileContainer1}
        >
            <View style={styles.profileContainer2}>
               <UserCircleIcon color="gray" size={30} />
               <View style={styles.userInfo}>
                <RText fontSize='12' color='black'>User 123#</RText>
                <RText fontSize='10' color='gray'>When can the products be delivered</RText>
               </View>
            </View>
            <RText>11:30</RText>
          </TouchableOpacity>

         

        
        



       </View>
       
    </SafeAreaView>
  )
}