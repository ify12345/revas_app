import {
  SafeAreaView,
  Text,
  FlatList,
  Image,
  View,
} from "react-native";

import React, { useState } from "react"
import { width} from "../../assets/constants";
import styles from "./onboarding.style"
import RTouchableOpacity from "../../components/RTouchableOpacity";
import RText from "../../components/RText";


const slides = [
  {
    id: "1",
    image: require("../../assets/global.png"),
    title: "Global trading platform for recycled plastic",
    subtitle:
      "We enable buyers and sell to efficiently trade recycled plastics with confidence, bringing increased opportunity for both party.",
  },

  {
    id: "2",
    image: require("../../assets/plasticbales.png"),
    title: "Plastic Bales",
    subtitle:
      "Bales trading on the RPX are primarily any whole polyethylene terephthalate (PET)bottle with a screws-neck top that contains",
  },
  {
    id: "3",
    image: require("../../assets/sustainable.png"),
    title: "Sustainable Global Hub for Recycled Plastics",
    subtitle:
      "We are a global marketplace for recycled plastic, with a wide range of plastic types and grades available",
  },
];

export function OnboardingScreen({ navigation }:any){
  const [currentSlide, setCurentSlide] = useState(0);

  const ref = React.useRef(null);

  function Header(){
    return (
      <View style={styles.bars}>
        <View style={{ justifyContent: "space-between" }}>
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {slides.map((_, index) => (
              <View
                key={index}
                style={[
                  styles.indicator,
                  currentSlide === index && {
                    backgroundColor: "black",
                  },
                ]}
              />
            ))}
          </View>
        </View>
      </View>
    );
  };
  const updateSlide = (e) => {
    const contentOffsetX = e.nativeEvent.contentOffset.x;
    const currentIndex = Math.round(contentOffsetX / width);
    setCurentSlide(currentIndex);
  };
  const goNext = () => {
    const nextSlide = currentSlide + 1;
    if (nextSlide !== slides.length) {
      const offset = nextSlide * width;
      ref?.current?.scrollToOffset({ offset });
      setCurentSlide(nextSlide);
    }
  };

  function Slide({ item }:any){
    return (
      <View
        style={styles.imgContainer}
      >
      
          <View
            style={
              styles.container1
          }
          >
            <Image style={styles.img} source={item.image}  />
          </View>
          <View style={{ flexDirection: "column",gap:20, }}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.subtitle}>{item.subtitle}</Text>
          </View>


        {currentSlide === slides.length - 1 ? (
          <RTouchableOpacity
            backgroundColor = "black"
            width="90%"
            onPress={() => navigation.navigate("Home")}
          >
            <RText
                color="#fff"
                fontSize="14"
                fontWeight="medium"
            >
              Get started
            </RText>
          </RTouchableOpacity>
        ) : (

          <RTouchableOpacity
           onPress={goNext}
           backgroundColor = "black"
           width="90%"
           
           >
             <RText
                color="#fff"
                fontSize="14"
                fontWeight="medium"
              >
                Next 
             </RText>
           
          </RTouchableOpacity>

        )
        }
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.generalContainer}>
    
      <Header />
    
        <FlatList
          data={slides}
          horizontal
          ref={ref}
          onMomentumScrollEnd={updateSlide}
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => <Slide item={item} />}
        />
     
      
    </SafeAreaView>
  );
};


export default OnboardingScreen;
