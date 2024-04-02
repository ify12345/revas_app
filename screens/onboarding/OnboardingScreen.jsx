import {
  Dimensions,
  SafeAreaView,
  Text,
  StatusBar,
  FlatList,
  Image,
  View,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { useState } from "react";
import React from "react"
import { width,height } from "../../assets/constants";
import styles from "./onboarding.style"
const COLORS = { white: "green" };

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

const OnboardingScreen = ({ navigation }) => {
  const [currentSlide, setCurentSlide] = React.useState(0);

  const ref = React.useRef(null);

  const Header = () => {
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
                  currentSlide == index && {
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
    if (nextSlide != slides.length) {
      const offset = nextSlide * width;
      ref?.current?.scrollToOffset({ offset });
      setCurentSlide(nextSlide);
    }
  };

  const Slide = ({ item }) => {
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


        {currentSlide == slides.length - 1 ? (
          <TouchableOpacity
            style={[styles.btnContainer]}
            onPress={() => navigation.replace("Home")}
          >
            <Text style={{ color: "white", textAlign: "center" }}>
              Get started
            </Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity style={[styles.btnContainer]} onPress={goNext}>
            <Text style={{ color: "white", textAlign: "center" }}>Next</Text>
          </TouchableOpacity>
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
