import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import RText from '../../components/RText'
import BackButton from '../../components/BackButton'
import styles from '../../assets/styles'
import { ChevronLeftIcon } from 'react-native-heroicons/solid'

const CreateListing = () => {
  return (
   <SafeAreaView
   style={{
        flex: 1,
        flexDirection: "column",
        justifyContent: "space-between",
        padding: 5
      }}
    >
      <View style={styles.topBar}>
        <ChevronLeftIcon color="black" size={15} />
        <RText fontSize='14'>Create Listing</RText>
      </View>



   </SafeAreaView>
  )
}

export default CreateListing
