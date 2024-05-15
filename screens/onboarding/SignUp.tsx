import styles from "./Signup.style";
import React, { useState, useEffect } from "react";
import { View, SafeAreaView, ScrollView, TouchableOpacity } from "react-native";
import BackButton from "../../components/BackButton";
import RText from "../../components/RText";
import { HCheckbox, HInput } from "../../components/HForm";
import RTouchableOpacity from "../../components/RTouchableOpacity";
import Toast from "react-native-toast-message";



const SignUp = ({ navigation }: any) => {
  const [isChecked, setIsChecked] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [disabled, setDisabled] = useState(true);
  const [inputDisabled, setInputDisabled] = useState(false);
  const [userData, setUserData] = useState<SIGNUPFROMDATA | any>({
    firstname: "",
    lastname: "",
    email: "",
    phonenumber: "",
    password: "",
  });
  const dispatch = useAppDispatch();

  const handleToggleCheckbox = () => {
    setIsChecked(!isChecked);
  };

  useEffect(() => {
    setDisabled(
      !(
        userData.firstname &&
        userData.lastname &&
        userData.email &&
        userData.password &&
        userData.phonenumber &&
        isChecked
      )
    );
  }, [userData, isChecked]);

  const handleSubmit = async () => {
    console.log(userData);
    try {
        setDisabled(true);
        setLoading(true);
        setInputDisabled(true);
        let res: any = await dispatch(registerUser(userData));
        let errors =
            res.meta.rejectedWithValue === true ||
            res.meta.requestStatus === "rejected";
  
        if (!errors) {
            navigation.navigate("Verification");
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
        height: "100%",
      }}
    >
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
              width={"100%"}
              placeholder="Enter full name"
              onChangeText={(text: any) =>
                setUserData({
                  ...userData,
                  firstname: text,
                })
              }
              value={userData.firstname}
            />
            <HInput
              width={"100%"}
              label="Company Name"
              type={2}
              placeholder="Enter Company name"
              onChangeText={(text: any) =>
                setUserData({
                  ...userData,
                  lastname: text,
                })
              }
              value={userData.lastname}
            />
            {/* <HInput
            label="Role"
            type={2}
            placeholder="Enter your role"
            onChangeText={(text: any) =>
              setFormData({
                ...formData,
                role: text,
              })
            }
            value={formData.role}
          /> */}

            <HInput
              label="Company Email"
              width={"100%"}
              type={2}
              placeholder="Enter comapny email"
              onChangeText={(text: any) =>
                setUserData({
                  ...userData,
                  email: text.toLowerCase(),
                })
              }
              value={userData.email}
            />

            <HInput
              width={"100%"}
              label="Phone number"
              type={2}
              placeholder="Enter your Phone number"
              onChangeText={(text: any) =>
                setUserData({
                  ...userData,
                  phonenumber: text,
                })
              }
              value={userData.phonenumber}
            />

            <HInput
              label="Password"
              width={"100%"}
              type={2}
              textType="password"
              placeholder="Enter your password"
              onChangeText={(text: any) =>
                setUserData({
                  ...userData,
                  password: text,
                })
              }
              value={userData.password}
            />

            {/* <HInput
            label="Confirm password"
            width={'100%'}
            type={2}
            textType="password"
            placeholder="Enter your password"
            onChangeText={(text: any) =>
              setFormData({
                ...formData,
                confirmPassword: text,
              })
            }
            value={formData.confirmPassword}
          /> */}

            <View style={styles.checkBox}>
              <HCheckbox
                checked={isChecked}
                setChecked={handleToggleCheckbox}
                //  label={
                //   <RText width="80%" fontSize={10} fontWeight="medium" color="#777777">
                //     I have read and accept the company's Terms & Conditions and Privacy Policy.
                //   </RText>
                // }
              />
              <RText
                width="80%"
                fontSize="10"
                fontWeight="medium"
                color="#777777"
              >
                I have read and accept the company's Terms & Conditions and
                Privacy Policy.
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

export default SignUp;
