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
import { HDropdownInput, HInput } from "../../components/HForm";
import { useNavigation } from "@react-navigation/native";
import RTouchableOpacity from "../../components/RTouchableOpacity";

const SellerProfileSetup = () => {
  const navigation: any = useNavigation();
  const [selectedCountry, setSelectedCountry] = useState<{ label: string; value: string; } | undefined>(undefined);
  const [selectedProduct, setSelectedProduct] = useState<{ label: string; value: string; } | undefined>(undefined);
  const countries = [
    { label: "USA", value: "USA" },
    { label: "Canada", value: "Canada" },
    // Add more countries as needed
  ];
  const products = [
    { label: "Product 1", value: "Product 1" },
    { label: "Product 2", value: "Product 2" },
    // Add more products as needed
  ];
  return (
    <SafeAreaView
      style={{
        flex: 1,
        flexDirection: "column",
        justifyContent: "space-between",
        paddingHorizontal: 10,
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
            placeholder="Enter your company name"
            label="Company name"
            type={2}
          />
          <HInput
            placeholder="Enter your business email address"
            label="Business email address"
            type={2}
            textType={"email"}
          />

          <HInput
            placeholder="Enter your phone number"
            label="Phone number"
            type={2}
          />
          <HInput placeholder="Enter your Job role" label="Job role" type={2} />

          <HDropdownInput
            label={"Country"}
            data={countries}
            onSelect={setSelectedCountry}
          />

          <HInput
            placeholder="Enter your Factory Capacity in tonnes"
            label="Factory Capacity(monthly)"
            type={2}
          />
          <HInput placeholder="Enter your " label="Factory Capacity" type={2} />

          <HDropdownInput
            label="Products"
            data={products}
            onSelect={setSelectedProduct}
          />
        </View>
      </ScrollView>


      <RTouchableOpacity
        style={styles.button}
        backgroundColor="black"
        // disabled={disabled}
        // onPress={handleSubmit}
        // loading={loading}
      >
        <RText fontSize="14" color="white" fontWeight="semibold">
          Sign in
        </RText>
      </RTouchableOpacity>
      <View style={styles.footerContainerSignIn}>
        <RText>Don't have an account?</RText>
        <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
          <RText color="black" fontSize="10" fontWeight="bold">
            Sign Up
          </RText>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default SellerProfileSetup;
