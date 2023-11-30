import { View, Text, TextInput, StyleSheet, TouchableOpacity,Button } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Image } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';

import ProductMore from './ProductMore';
const Stack = createStackNavigator()

const marketPlace = [
  {
    id: "1",
    image: require("../assets/recycle.png"),
    topic: "Plastic Recycling Waste",
    types: "Recyclates",
    volume: "Recyclates",
    Duration: "2 weeks",
    Price: "$2,300",
    code: "DQL1+"
  },
  {
    id: "2",
    image: require("../assets/recycle.png"),
    topic: "Plastic Recycling Waste",
    types: "Recyclates",
    volume: "Recyclates",
    Duration: "DSS3",
    Price: "On Request",
    code: "DQL1+"
  },
  {
    id: "3",
    image: require("../assets/recycle.png"),
    topic: "Plastic Recycling Waste",
    types: "Recyclates",
    volume: "Recyclates",
    Duration: "DSS3",
    Price: "On Request",
    code: "DQL1+"
  },
]

// first page
const Offer = ({navigation})=>{
    return(
      <SafeAreaView  style={{flex:1,width:"100%",paddingHorizontal:20 ,backgroundColor:"#fff"}}>
         <View style={{flexDirection:"column",gap:30,marginTop:10,paddingHorizontal:20 ,backgroundColor:"#fff" }}>
           
          <View>
            <Text>Good Evening</Text>
            <View style={{flexDirection:"row", justifyContent: "space-between"}}>
              <Text style={{fontSize:29}}>Daniel Eloma</Text>
              <MaterialCommunityIcons name="bell" size={24} color="black" />
           </View>
          </View>
         

           <View style={styles.searchContainer}>
              <Ionicons name="search-outline" size={16} color="black" />
              <TextInput style={styles.input} placeholder="Search for material and commodity" />
            </View>

           <View style={{flexDirection:"row", justifyContent: "space-between", alignItems:"center"}}>
             <Text style={{fontSize:16, fontWeight:"600"}}>Marketplace</Text>
             <View style={{flexDirection:"row", justifyContent: "space-between",alignItems:"center"}}>
                  <Text style={{fontSize:18}}>See all</Text>
                  <Ionicons name="chevron-forward-outline" size={14} color="black" />
             </View>
           </View>

           <View style={{flexDirection:"gap",gap: 6 }}  >
              {
                marketPlace.map((item,id)=>{
                  return(
                    <View key={id} style={{flexDirection:"column", borderWidth:1, borderColor:"#BEC0CA",borderRadius:5, gap:5 , padding: 10}}>
                    <View style={{flexDirection:"row", justifyContent: "space-between", alignItems:"center"}}>
                       <Text>{item.topic}</Text>
                       <TouchableOpacity onPress={()=>navigation.replace("Product",{ code: item.code, title: item.topic })} style={{flexDirection:'row',gap:4,justifyContent:'center', alignItems:"center", borderRadius: 50, backgroundColor:"#E8DEF8",padding: 6}}>
                          <Text style={{fontSize: 10}}>{item.code}</Text>
                          <AntDesign name="infocirlceo" size={14} color="black" />
                       </TouchableOpacity>
                    </View>
                      

                      <View style={{flexDirection:"row", alignItems:"center"}}>
                         <Image source={item.image} style={{width: 80 , height:80  }} />

                          <View style={{flexDirection:"column", gap: 8, marginHorizontal: 20}}>
                            <View style={{flexDirection:"column", gap: 2}} >
                              <Text style={{color: '#79747e', fontSize:10}}>Type of plastics</Text>
                              <Text style={{fontSize: 14, fontWeight: "600"}}>{item.types}</Text>
                            </View>
                            <View style={{flexDirection:"column", gap:2}}>
                              <Text style={{color: '#79747e', fontSize:10}}>Duration</Text>
                              <Text style={{fontSize: 14, fontWeight: "600"}}>{item.Duration}</Text>
                            </View>
                          </View>

                          <View style={{flexDirection:"column", gap: 8, marginHorizontal: 20}}>
                            <View style={{flexDirection:"column", gap: 2}} >
                              <Text style={{color: '#79747e', fontSize:10}}>Volume(In tones)</Text>
                              <Text style={{fontSize: 14, fontWeight: "600"}}>{item.volume}</Text>
                            </View>
                            <View style={{flexDirection:"column", gap:2}}>
                              <Text style={{color: '#79747e', fontSize:10}}>Price(in USD)</Text>
                              <Text style={{fontSize: 14, fontWeight: "600"}}>{item.Price}</Text>
                            </View>
                          </View>

                      </View>
                    </View>
                  )
                })
              }
           </View>



         </View>


    </SafeAreaView>
    )
}





// main component
const DashBoard = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS, // Slide animation
      }}
    >
      <Stack.Screen name="Offer" component={Offer} />
      <Stack.Screen
        name="Product"
        component={ProductMore}
        options={{
          gestureEnabled: true, // Enable swipe gesture
          gestureDirection: 'horizontal', // Set the swipe direction to horizontal
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS, // Slide animation
        }}
      />
    </Stack.Navigator>
  );
};






const styles = StyleSheet.create({
  searchContainer:{
    flexDirection:"row", 
    justifyContent: "space-between", 
    borderWidth: 2, 
    borderColor: '#f6f6f6',
    borderRadius: 8,
    backgroundColor: '#f5f5f5' ,
    width:"100%",
    paddingVertical: 20,
    paddingHorizontal: 10, 
    alignItems: 'center', 
  },
  input: {
    flex: 1, 
    marginLeft: 10, 
    backgroundColor: 'transparent', 
  },
})

export default DashBoard