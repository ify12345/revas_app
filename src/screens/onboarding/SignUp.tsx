import { useAppDispatch } from "~redux/store";
import { register } from "~api/auth";
import { View, SafeAreaView } from "react-native";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import React, { useState, useEffect } from "react";
import Toast from "react-native-toast-message";
import { RootStackScreenProps } from "~types/navigation";
import styles from "./Signup.style";
import BackButton from "../../components/BackButton";
import RText from "../../components/RText";
import { HCheckbox, HInput } from "../../components/HForm";
import RTouchableOpacity from "../../components/RTouchableOpacity";

export default function SignUp({ navigation }: RootStackScreenProps<'SignupOne'>) {
  const [isChecked, setIsChecked] = useState(false);
  const [loading, setLoading] = useState(false);
  const [disabled, setDisabled] = useState(true);

  const handleToggleCheckbox = (val: Boolean) => {
    setIsChecked(!val);
  };

  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    phonenumber: ""
  });

  useEffect(() => {
    setDisabled(
      !(
        formData.firstname &&
        formData.lastname &&
        formData.email &&
        formData.password &&
        formData.phonenumber &&
        isChecked
      )
    );
  }, [formData, isChecked]);

  const dispatch = useAppDispatch();

  const handleSubmit = () => {
    setDisabled(true);
    setLoading(true);
    console.log("Form Data:", formData);

    dispatch(register(formData))
      .then(() => {
        Toast.show({
          type: "success",
          text1: "You have successfully signed up",
          text2: "Please login to continue"
        });
        navigation.navigate("Verification");
      })
      .catch((error) => {
        console.error("Error occurred during signup:", error);

        let errorMessage;
        if (error.response) {
          console.error("Response data:", error.response.data);
          errorMessage = error.response.data.message || "An unexpected error occurred";
        } else if (error.request) {
          console.error("Request data:", error.request);
          errorMessage = "No response received from server. Please try again.";
        } else {
          console.error("Error message:", error.message);
          errorMessage = error.message;
        }

        Toast.show({
          type: "error",
          text1: "Signup failed",
          text2: errorMessage
        });
      })
      .finally(() => {
        setLoading(false);
        setDisabled(false);
      });
  };

  return (
    <SafeAreaView style={{ flex: 1, flexDirection: "column", justifyContent: "space-between", height: "100%" }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.topBar}>
          <BackButton />
          <RText>Back</RText>
        </View>

        <View style={styles.container1}>
          <View style={styles.container}>
            <View style={styles.started}>
              <RText>Sign up for free</RText>
              <RText fontSize="20">Get Started</RText>
            </View>

            <HInput
              label="Full Name"
              type={2}
              width='100%'
              placeholder="Enter full name"
              onChangeText={(text: any) =>
                setFormData({
                  ...formData,
                  firstname: text,
                })
              }
              value={formData.firstname}
            />
            <HInput
              width='100%'
              label="Company Name"
              type={2}
              placeholder="Enter Company name"
              onChangeText={(text: any) =>
                setFormData({
                  ...formData,
                  lastname: text,
                })
              }
              value={formData.lastname}
            />
            <HInput
              label="Company Email"
              width='100%'
              type={2}
              placeholder="Enter company email"
              onChangeText={(text: any) =>
                setFormData({
                  ...formData,
                  email: text.toLowerCase(),
                })
              }
              value={formData.email}
            />
            <HInput
              width='100%'
              label="Phone number"
              type={2}
              placeholder="Enter your Phone number"
              onChangeText={(text: any) =>
                setFormData({
                  ...formData,
                  phonenumber: text,
                })
              }
              value={formData.phonenumber}
            />
            <HInput
              label="Password"
              width='100%'
              type={2}
              textType="password"
              placeholder="Enter your password"
              onChangeText={(text: any) =>
                setFormData({
                  ...formData,
                  password: text,
                })
              }
              value={formData.password}
            />

            <View style={styles.checkBox}>
              <HCheckbox checked={isChecked} setChecked={handleToggleCheckbox} />
              <RText width="80%" fontSize="10" fontWeight="medium" color="#777777">
                I have read and accept the company’s Terms & Conditions and Privacy Policy.
              </RText>
            </View>

            <RTouchableOpacity
              backgroundColor="black"
              disabled={disabled}
              onPress={handleSubmit}
              loading={loading}
              style={styles.button}
            >
              <RText color="white">Create an account</RText>
            </RTouchableOpacity>
          </View>

          <View style={styles.footerContainer}>
            <RText>Already have an account?</RText>
            <TouchableOpacity onPress={() => navigation.navigate("SignIn")}>
              <RText color="black" fontSize="10" fontWeight="medium">
                Sign In
              </RText>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
