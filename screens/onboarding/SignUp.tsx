import styles from "./Signup.style";
import { View, SafeAreaView } from "react-native";
import React,{ useState,useEffect } from "react";
import BackButton from "../../components/BackButton";
import RText from "../../components/RText";
import { HCheckbox, HInput } from "../../components/HForm";
import RTouchableOpacity from "../../components/RTouchableOpacity";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { devInstance } from "../../store/devInstance";
import Toast from "react-native-toast-message";
import { useNavigation } from "@react-navigation/native";

const SignUp = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [disabled, setDisabled] = useState(true);
  const navigation = useNavigation()

  const handleToggleCheckbox = (val: Boolean) => {
    setIsChecked(!val);
  };
  const [formData, setFormData] = React.useState({
      firstname: "",
      lastname: "",
      email: "",
      password: "",
      // confirmPassword: "",
      phonenumber: "",
  });

  useEffect(() => {
    if (formData.password && formData.confirmPassword) {
        if (formData.password !== formData.confirmPassword) {
            setError("Passwords do not match");
        } else {
            setError("");
        }
    } else {
        setError("");
    }
}, [formData.password, formData.confirmPassword]);

useEffect(() => {
  // Disable button if any required field is empty or checkbox is unchecked
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

const handleSubmit = () => {
  setDisabled(true);
  setLoading(true);
  devInstance
    .post("/signup", formData)
    .then(() => {
      Toast.show({
        type: "success",
        text1: "You have successfully signed up",
        text2: "Please login to continue",
      });
      navigation.navigate("Verification", { email: formData.email });
    })
    .catch((error) => {
      console.error("Error occurred during signup:", error);
      const errorMessage =
        error.response?.data?.message || "An unexpected error occurred";
      Toast.show({
        type: "error",
        text1: "Signup failed",
        text2: errorMessage,
      });
    })
    .finally(() => {
      setLoading(false);
      setDisabled(false);
    });
};




  return (
    <SafeAreaView style={{ flex: 1,flexDirection:"column", justifyContent:"space-between", height: "100%" }}>
      <ScrollView showsVerticalScrollIndicator={false} >
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
            width={'100%'}
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
            width={'100%'}
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
            width={'100%'}
            type={2}
            placeholder="Enter comapny email"
            onChangeText={(text: any) =>
              setFormData({
                ...formData,
                email: text.toLowerCase(),
              })
            }
            value={formData.email}
          />

          <HInput
            width={'100%'}
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
            width={'100%'}
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
            <HCheckbox checked={isChecked} setChecked={handleToggleCheckbox}
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
