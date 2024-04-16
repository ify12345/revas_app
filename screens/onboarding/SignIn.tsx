import React from "react";

import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  Picker,
  Switch,
  Checkbox,
  Slider,
  TouchableOpacity,
} from "react-native";
import { useState } from "react";
import styles from "./Signup.style";
import { useNavigation } from "@react-navigation/native";
import BackButton from "../../components/BackButton";
import RText from "../../components/RText";
import { HInput } from "../../components/HForm";
import RTouchableOpacity from "../../components/RTouchableOpacity";

const SignIn = () => {
  const navigation: any = useNavigation();

  const [isChecked, setIsChecked] = useState(true);
  const handleToggleCheckbox = () => {
    setIsChecked(!isChecked);
  };
 
  const handleSubmit =()=>{
    navigation.navigate('SellerProfileSetup')
  }
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
            <RText fontSize="20">Welcome </RText>
            <RText fontSize="10" width="80%" color="gray">
              To stay connected with us, please login with your personal details
            </RText>
          </View>

          <HInput
            placeholder="Enter email address"
            label="Email Address"
            type={2}
            textType={"email"}
          />

          <HInput
            placeholder="Enter password"
            label="Password"
            type={2}
            textType={"password"}
          />

          <TouchableOpacity
            style={{ justifyContent: "flex-end", flexDirection: "row" }}
            onPress={() => navigation.navigate("ForgotPasswordScreen1")}
          >
            <RText color="gray" fontSize="10" fontWeight="medium">
              Forgot password?
            </RText>
          </TouchableOpacity>

          <RTouchableOpacity
            style={styles.button}
            backgroundColor="black"
            // disabled={disabled}
            onPress={handleSubmit}
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
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SignIn;
