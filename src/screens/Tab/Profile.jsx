import { View, Text, Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import RText from '../../components/RText'
import { BuildingOfficeIcon, ChevronLeftIcon, ChevronRightIcon, CreditCardIcon, DocumentIcon, DocumentTextIcon, UserCircleIcon } from 'react-native-heroicons/solid'
import styles from '../../assets/styles'
import RTouchableOpacity from '../../components/RTouchableOpacity';
import { useNavigation } from '@react-navigation/native'
import { useSelector } from 'react-redux'
import { TouchableOpacity } from 'react-native-gesture-handler'

export default function Profile() {
  const navigation = useNavigation();
  const user = useSelector((state) => state.auth.user);
  const handleReset =()=>{
    navigation.navigate('ResetPassword')
  }

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
         <RText fontSize='14'>My Account</RText>
       </View>

       <View style={styles.profileContainer}>

          <TouchableOpacity style={styles.profileContainer1}
          onPress={handleReset}>
            <View style={styles.profileContainer2}>
               <UserCircleIcon color="gray" size={30} />
               <View style={styles.userInfo}>
                <RText fontSize='12' color='black'>{user.firstname} {user.lastname}</RText>
                <RText fontSize='10' color='gray'>Profile details </RText>
               </View>
            </View>
            <ChevronRightIcon size={15} color="black"/>
          </TouchableOpacity>

          <View style={styles.profileContainer1}>
            <View style={styles.profileContainer2}>
               <CreditCardIcon color={"green"}  size={30}/>
               <View style={styles.userInfo}>
                <RText fontSize='12' color='black'>Bank details</RText>
                <RText fontSize='10' color='gray'>Add/Update Bank details</RText>
               </View>
            </View>
            <ChevronRightIcon size={15} color="black"/>
          </View>

          <View style={styles.profileContainer1}>
            <View style={styles.profileContainer2}>
               <BuildingOfficeIcon size={30} color={'blue'}/>
               <View style={styles.userInfo}>
                <RText fontSize='12' color='black'>Manage Company</RText>
                <RText fontSize='10' color='gray'>Company management</RText>
               </View>
            </View>
            <ChevronRightIcon size={15} color="black"/>
          </View>

          <View style={styles.profileContainer1}>
            <View style={styles.profileContainer2}>
               <DocumentTextIcon size={30}  color={'purple'}/>
               <View style={styles.userInfo}>
                <RText fontSize='12' color='black'>Uploaded Documents</RText>
                <RText fontSize='10' color='gray'>View uplloaded documents</RText>
               </View>
            </View>
            <ChevronRightIcon size={15} color="black"/>
          </View>
        



       </View>
        <RTouchableOpacity
         backgroundColor='#'
         onPress={()=>navigation.navigate('SignIn')}
         >
          <RText 
          color='red'
          >
          Sign out
          </RText>

        </RTouchableOpacity>
 
    </SafeAreaView>
  )
}