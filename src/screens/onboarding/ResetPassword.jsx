import { StyleSheet, Text, View } from "react-native";
import React from "react";
import RText from "../../components/RText";
import { HInput } from "../../components/HForm";
import { SafeAreaView } from "react-native-safe-area-context";
import BackButton from "../../components/BackButton";
import { TouchableOpacity } from "react-native-gesture-handler";
import styles from "../../assets/styles";
import RTouchableOpacity from "../../components/RTouchableOpacity";
import { useNavigation } from "@react-navigation/native";

const ResetPassword = () => {

  const navigation = useNavigation();
  
  const handleSubmit = () => {
    navigation.navigate("CreateNewPassword");
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <View style={styles.topBar}>
        <BackButton />
        <RText>Back</RText>
      </View>

      <View style={styles.container1}>
        <View style={styles.container}>
          <View style={styles.started}>
            <RText fontSize="20">Reset your Password </RText>
            <RText fontSize="10" width="80%" color="gray">
              Enter your email address, and we will send you a link to reset
              your password.
            </RText>
          </View>

          <HInput
            placeholder="Enter email address"
            label="Email Address"
            type={2}
            textType={"email"}
          />

          <RTouchableOpacity
            style={styles.button}
            backgroundColor="black"
            // disabled={disabled}
            onPress={handleSubmit}
            // loading={loading}
          >
            <RText fontSize="12" color="white" fontWeight="semibold">
              Submit email
            </RText>
          </RTouchableOpacity>

        </View>
      </View>
          <View style={styles.footerContainerSignIn}>
            <RText>Don't have an account?</RText>
            <TouchableOpacity
              onPress={() => navigation.navigate("SignUp")}
            >
              <RText color="black" fontSize="14" fontWeight="bold">
                Sign Up
              </RText>
            </TouchableOpacity>
          </View>
    </SafeAreaView>
  );
};

export default ResetPassword;
