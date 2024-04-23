import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import RText from "../../components/RText";
import BackButton from "../../components/BackButton";
import styles from "../../assets/styles";
import { SafeAreaView } from "react-native-safe-area-context";
import OtpInput from "../../components/OtpInput";
import RTouchableOpacity from "../../components/RTouchableOpacity";
import { useNavigation } from "@react-navigation/native";

const Verification = () => {
  const navigation = useNavigation();
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const mergedOtp = otp[0] + otp[1] + otp[2] + otp[3] + otp[4] + otp[5];
  const inputs: any = [];

  const handleChange = (value: string, index: number) => {
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
    value && index < newOtp.length - 1 && inputs[index + 1].focus();
    console.log(mergedOtp);
  };
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.topBar}>
        <BackButton />
        <RText>Back</RText>
      </View>

      <View style={styles.container1}>
        <View style={styles.container}>
          <View style={styles.started}>
            <RText fontSize="20">Account Verification </RText>
            <RText fontSize="10" width="80%" color="gray">
              Enter the 6-digit code sent to your email
            </RText>
          </View>
          <OtpInput otp={otp} handleChange={handleChange} inputs={inputs} />
       

        <RTouchableOpacity
          backgroundColor="white"
          // onPress={sentOtp}
          // loading={loading}
          disabled={mergedOtp.length < 4 ? true : false}
        >
          <RText fontSize="12" fontWeight="semibold"
             onPress={()=>navigation.navigate('SignIn')}>
            Continue
          </RText>
        </RTouchableOpacity>

        <RTouchableOpacity

          backgroundColor="black"
       
          // loading={loading}
          // disabled={!email ? true : false}
        >
          <RText color="white" fontSize="12" fontWeight="semibold">
            Resend code
          </RText>
        </RTouchableOpacity>
      </View>
      </View>
    </SafeAreaView>
  );
};

export default Verification;
