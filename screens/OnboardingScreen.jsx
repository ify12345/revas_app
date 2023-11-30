import { Dimensions, SafeAreaView, Text, StatusBar, FlatList, Image, View, StyleSheet, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import React from 'react';
const {width, height} = Dimensions.get("window");
const COLORS = {white: "green" }

const slides = [
    {
       id: "1",
       image: require('../assets/global.png'),
       title: "Global trading platform for recycled plastic",
       subtitle: "We enable buyers and sell to efficiently trade recycled plastics with confidence, bringing increased opportunity for both party."
},
   
    {
       id: "2",
       image: require('../assets/plasticbales.png'),
       title: "Plastic Bales",
       subtitle: "Bales trading on the RPX are primarily any whole polyethylene terephthalate (PET)bottle with a screws-neck top that contains"
    }, 
    {
       id: "3",
       image: require('../assets/sustainable.png'),
       title: "Sustainable Global Hub for Recycled Plastics",
       subtitle: "We are a global marketplace for recycled plastic, with a wide range of plastic types and grades available"
    }, 
   
]


const OnboardingScreen = ({navigation}) => {
    const [currentSlide,setCurentSlide] = React.useState(0)
    const ref = React.useRef(null)
    const Header = ()=>{
       
        return(
            <View>
              <View style={{justifyContent:'space-between'}}>
              <View style={{flex:1, flexDirection:'row', justifyContent: 'center',alignItems: "center" }}>
               {
                slides.map((_, index)=>(
                    <View key={index} style={[styles.indicator, currentSlide == index && {
                        backgroundColor: 'black'
                    }]}/>
                    ))
                }
              </View>  
            </View>
        </View>
        )
    }
    const updateSlide = e =>{
        const contentOffsetX = e.nativeEvent.contentOffset.x;
        const currentIndex = Math.round(contentOffsetX/width)
        setCurentSlide(currentIndex)
    }
    const goNext = ()=>{
       const nextSlide = currentSlide + 1;
       if(nextSlide != slides.length){
        const offset = nextSlide * width
        ref?.current?.scrollToOffset({offset})
        setCurentSlide(nextSlide)
       }
     
    } 

    const Slide =({item})=>{
         return (


            <View style={{alignItems: "center", width,  flex:1, flexDirection: 'column'}}>
                    <View style={{paddingVertical:37 , marginTop: 5, width , alignItems: 'center'}}>
                        <Image source={item.image} style={{width: 380 , height:380  }} />
                    </View>
            
                        <Text style={styles.title}>{item.title}</Text>
                        <Text style={styles.subtitle}>{item.subtitle}</Text>
            
                    {
                        currentSlide ==  slides.length -1?
                        <TouchableOpacity style={[styles.btnContainer]} onPress={()=>navigation.replace("Home")} >
                           <Text style={{color: 'white', textAlign: "center"}} >Get started</Text>
                        </TouchableOpacity> :

                         <TouchableOpacity style={[styles.btnContainer]} onPress={goNext} >
                         <Text style={{color: 'white', textAlign: "center"}}>Next</Text>
                         </TouchableOpacity>
                    }
                        
                    
                        
             </View>
         )
    }

  return (
    <SafeAreaView style={{flex: 1,backgroundColor:"white"}}>
        <Header/>
       <FlatList data={slides} contentContainerStyle={{height:height * 0.75}} 
       horizontal
       ref={ref}
       onMomentumScrollEnd={updateSlide}
       pagingEnabled
       showsHorizontalScrollIndicator={false}
       renderItem= {({item})=> <Slide item={item} />}/> 
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
    title:{
        fontSize: 24,
        fontWeight: '700',
        maxWidth: 270,
        textAlign: "center",
       
    },
    subtitle:{
        fontSize: 14,
        fontWeight: '400',
        maxWidth: 270,
        textAlign: "center",
        lineHeight: 20,
        marginTop: 10,
    },
    indicator:{
        height: 2,
        width: '30%',
        alignItems: 'center',
        backgroundColor: '#f5f5f5'

    },
    btnContainer:{
        borderRadius: 50,
        marginTop: 140,
        backgroundColor: 'black',
        width: '90%',
        padding: 20,
        color: 'white'
    }
})

export default OnboardingScreen
