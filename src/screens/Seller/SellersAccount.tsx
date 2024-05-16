import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import BackButton from '../../components/BackButton'
import RText from '../../components/RText';
import styles from '../../assets/styles';

export default function SellersAccount() {
  return (
    <SafeAreaView style={{
        flex: 1,
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <View style={styles.topBar}>
        <BackButton />
        <RText>Back</RText>
      </View>
    </SafeAreaView>
  )
}