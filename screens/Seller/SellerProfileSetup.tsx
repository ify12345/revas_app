import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import BackButton from "../../components/BackButton";
import RText from "../../components/RText";
import styles from "../../assets/styles";
import { HInput } from "../../components/HForm";
import { useNavigation } from "@react-navigation/native";
import RTouchableOpacity from "../../components/RTouchableOpacity";
import RDropDown from "../../components/RDropDown";
import FileUpload from "../../components/FileUpload";

export default function SellerProfileSetup({navigation}:any){
  
  const [selectedCountry, setSelectedCountry] = useState<{ label: string; value: string; } | undefined>(undefined);
  const [selectedProduct, setSelectedProduct] = useState<{ label: string; value: string; } | undefined>(undefined);
  const countries = [
    { label: "USA", value: "USA" },
    { label: "Canada", value: "Canada" },
    // Add more countries as needed
  ];
  const products = [
    { label: "Product 1" },
    { label: "Product 2" },
    // Add more products as needed
  ];
  const handleSubmit = ()=>{
    navigation.navigate('BottomTabNavigator', {screen:"DashBoard"})
  }
  return (
    <SafeAreaView
      style={{
        flex: 1,
        flexDirection: "column",
        justifyContent: "space-between",
        paddingHorizontal: 2,
      }}
    >
      <View style={styles.topBar}>
        <BackButton />
        <RText>Back</RText>
      </View>

      <ScrollView style={styles.container1}>
        <View style={styles.container}>
          <View style={styles.started}>
            <RText fontSize="20">Set up your account </RText>
            <RText fontSize="10" width="80%" color="gray">
              To stay connected with us, please login with your personal details
            </RText>
          </View>

          <HInput
          width={"100%"}
            placeholder="Enter your country"
            label="Country"
            type={2}
          />
          <HInput
          width={"100%"}
            placeholder="Enter factory capacity in tonnes"
            label="Factory capacity (monthly)"
            type={2}
          />

          <View
          style={{
            display: 'flex',
            flexDirection:"column",
            gap:2
          }}>

           {/* <RText>Products</RText> 
           <RDropDown         
            options={products}
            placeholder={"Products"}
            label="Products"
            onSelect={setSelectedCountry}
          />  */}
          </View>
         
          <View
          style={{
            display: 'flex',
            flexDirection:"column",
            gap:2
          }}>
         <FileUpload/>
         </View>

        </View>
      </ScrollView>


      <RTouchableOpacity
        style={styles.button}
        backgroundColor="black"
        // disabled={disabled}
        onPress={handleSubmit}
        // loading={loading}
      >
        <RText fontSize="14" color="white" fontWeight="semibold">
          Submit
        </RText>
      </RTouchableOpacity>
    
    </SafeAreaView>
  );
};

