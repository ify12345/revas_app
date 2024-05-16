import React from "react";
import { Image, TouchableOpacity,SafeAreaView, View, Text  } from "react-native";
import styles from "./Home.styles";
import RText from "../../components/RText";
import BackButton from "../../components/BackButton";
import RTouchableOpacity from "../../components/RTouchableOpacity";

export default function Home({ navigation }:any){
  const [selectedOption, setSelectedOption] = React.useState(null);

  const options = [
    {
      id: "1",
      text: "For buyer",
      detail: "Let us know how you want to use Revas, you can customize",
      image: require("../../assets/Images/buyer.png"),
    },
    {
      id: "2",
      text: "For seller",
      detail: "Let us know how you want to use Revas, you can customize",
      image: require("../../assets/Images/seller.png"),
    },
  ];

  const handleOptionSelect = (id) => {
    setSelectedOption(id);
  };

  const handleContinue = () => {
    if (selectedOption === "1") {
      navigation.navigate("SignIn");
    } else if (selectedOption === "2") {
      navigation.navigate("SignIn");
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.topBar}>
        <BackButton />
        <RText>Back</RText>
      </View>

      <View
        style={{
          flexDirection: "column",
          justifyContent: "space-between",
          flex: 1,
          paddingHorizontal: 15,
        }}
      >
        <View style={{ flexDirection: "column", gap: 35 }}>
          <View style={{ flexDirection: "column", gap: 10 }}>
            <RText fontSize="22" fontWeight="semibold" textStyle={styles.text}>
              How would you like to use Revas?
            </RText>
            <RText fontSize="10" color="gray" textStyle={styles.text2}>
              Let us know how you want to use Revas, you can customize this
              later or make changes.
            </RText>
          </View>

          {/* options */}
          <View style={{ flexDirection: "column", gap: 10, marginVertical: 6 }}>
            {options.map((option) => (
              <TouchableOpacity
                key={option.id}
                style={[
                  styles.buttonFlex,
                  selectedOption === option.id && { backgroundColor: "purple", borderWidth:0 },
                ]}
                onPress={() => handleOptionSelect(option.id)}
              >
                <Image source={option.image} />
                <View style={styles.buttonFlex2}>
                  <Text style={[selectedOption === option.id && {color:'white'}]}>{option.text}</Text>
                  <Text style={[styles.inner, selectedOption === option.id && {color:'white'} ]}>{option.detail}</Text>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </View>
        

        {/* button */}
        <RTouchableOpacity backgroundColor="black" onPress={handleContinue}>
          <RText color="#fff" fontSize="14" fontWeight="medium">
            Continue
          </RText>
        </RTouchableOpacity>
      </View>
    </SafeAreaView>
  )};


