import React, { useEffect } from "react";
import {
  View,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import { useState } from "react";
import styles from "./Signup.style";
import { useNavigation } from "@react-navigation/native";
import BackButton from "../../components/BackButton";
import RText from "../../components/RText";
import { HInput } from "../../components/HForm";
import RTouchableOpacity from "../../components/RTouchableOpacity";
import ImageUploadInput from "../../components/FileUpload";
import { useAppDispatch } from "../../store/hooks";
import { loginUser } from "../../store/authSlice";


const SignIn = () => {
  const navigation: any = useNavigation();
  const dispatch = useAppDispatch();

  const [isChecked, setIsChecked] = useState(true);

  const [inputDisabled, setInputDisabled] = useState(false);

  const setCheckboxVal = (val: Boolean) => {
     setIsChecked(!val);
  };

  const handleToggleCheckbox = () => {
    setIsChecked(!isChecked);
  };

  const [loading, setLoading] = useState(false);
  const [disabled, setDisabled] = useState(true);
  const [userData, setUserData] = React.useState({
    email: "",
    password: "",
});

useEffect(() => {
  if (userData.email && userData.password) {
      setDisabled(false);
  } else {
      setDisabled(true);
  }
}, [userData]);
 
const handleSubmit = async () => {
  console.log(userData);
  try {
      setDisabled(true);
      setLoading(true);
      setInputDisabled(true);
      let res: any = await dispatch(loginUser(userData));
      let errors =
          res.meta.rejectedWithValue === true ||
          res.meta.requestStatus === "rejected";

      if (!errors) {
          navigation.navigate("BottomTabNavigator");
      }
  } catch (error: any) {
      setDisabled(false);
  } finally {
      setLoading(false);
      setDisabled(false);
      setInputDisabled(false);
  }
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
            <RText fontSize="20">Welcome </RText>
            <RText fontSize="10" width="80%" color="gray">
              To stay connected with us, please login with your personal details
            </RText>
          </View>

          <HInput
          width={'100%'}
            placeholder="Enter email address"
            label="Email Address"
            type={2}
            textType={"email"}
            onChangeText={(text: any) =>
              setUserData({
                  ...userData,
                  email: text.toLowerCase(),
              })
          }
          value={userData.email}
          />

          <HInput
            width={'100%'}
            placeholder="Enter password"
            label="Password"
            type={2}
            textType={"password"}
            onChangeText={(text: any) =>
              setUserData({
                  ...userData,
                  password: text,
              })
          }
          value={userData.password}
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
            disabled={disabled}
            onPress={handleSubmit}
            loading={loading}
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
