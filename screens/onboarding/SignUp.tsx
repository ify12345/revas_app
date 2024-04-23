import React from "react";
import styles from "./Signup.style";
import { View, SafeAreaView } from "react-native";
import { useState } from "react";
import BackButton from "../../components/BackButton";
import RText from "../../components/RText";
import { HCheckbox, HInput } from "../../components/HForm";
import RTouchableOpacity from "../../components/RTouchableOpacity";
import { TouchableOpacity } from "react-native-gesture-handler";

const SignUp = ({ navigation }: any) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleToggleCheckbox = () => {
    setIsChecked(!isChecked);
  };

  const [formData, setFormData] = React.useState({
    // user_id: "",
    full_name: "",
    company_name: "",
    role: "",
    company_email:"",
    password: "",
    phone:""
    // confirmPassword: "",
  });

  const handleSubmit = () => {
    navigation.navigate("Verification");
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
            <RText>Sign up for free</RText>
            <RText fontSize="20">Get Started</RText>
          </View>

          <HInput
            label="Full Name"
            type={2}
            placeholder="Enter full name"
            onChangeText={(text: any) =>
              setFormData({
                ...formData,
                full_name: text,
              })
            }
            value={formData.full_name}
          />
          <HInput
            label="Company Name"
            type={2}
            placeholder="Enter Company name"
            onChangeText={(text: any) =>
              setFormData({
                ...formData,
                company_name: text,
              })
            }
            value={formData.company_name}
          />
          <HInput
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
          />

          <HInput
            label="Company Email"
            type={2}
            placeholder="Enter comapny email"
            onChangeText={(text: any) =>
              setFormData({
                ...formData,
                company_email: text,
              })
            }
            value={formData.company_email}
          />

          <HInput
            label="Phone number"
            type={2}
            placeholder="Enter your Phone number"
            onChangeText={(text: any) =>
              setFormData({
                ...formData,
                phone: text,
              })
            }
            value={formData.phone}
          />

          <HInput
            label="Password"
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
            <HCheckbox checked={isChecked} setChecked={handleToggleCheckbox}/>
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
            //  disabled={disabled}
            onPress={handleSubmit}
            //  loading={loading}
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
    </SafeAreaView>
  );
};

export default SignUp;
