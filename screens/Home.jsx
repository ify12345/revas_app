import React from 'react'
import { Image, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native'
import { View , Dimensions,TextInput } from 'react-native'
import { Text } from 'react-native'
const {width, height} = Dimensions.get("window");
const options = [
    {
       id: "1",
       image: require("../assets/elipse.svg"),
       text1: "For buyer",
       text2: "Let’s us know how you want to use Revas, you can customize"
    },
    {
       id: "2",
       image: require("../assets/elipse.svg"),
       text1: "For sellers",
       text2: "Let’s us know how you want to use Revas, you can customize"
    },
]
const Home = ({navigation}) => {
  return (
    <SafeAreaView style={{flex:1, flexDirection: "column" , gap: 4, width, height }}>
        <View style={{flexDirection: "column" ,  justifyContent:"space-between", flex:1, paddingVertical:50}} >
        <View style={{flexDirection: "column", gap: 20}}>
            <Text style={{fontSize: 20, fontWeight: "700",paddingHorizontal:10}} >How would you like to use Revas?</Text>
            <Text style={{fontSize: 14, fontWeight: "400", paddingHorizontal:10, lineHeight: 19 }} >Let’s us know how you want to use Revas, you can customize this later or make changes.</Text>
            
            <View style={{flexDirection: "column" , gap: 10, marginVertical: 60}} >
                   {
                    options.map((item,idx)=>(
                        <View key={idx} style={{borderWidth:1, padding:10, height:98, marginHorizontal: 10,flexDirection:"row", maxWidth:width,alignItems:"center",borderRadius: 7 , gap:20 }}>
                            <Image style={{backgroundColor:"#D9D9D9", borderRadius: 100,}} source={item.image}/>
                            <View style={{flexDirection:'column', gap: 14}}>
                                <Text style={{fontWeight: "700", fontSize: 16,}}>{item.text1}</Text>
                                <Text style={{maxWidth: 237,  fontSize: 14}}>{item.text2}</Text>
                            </View>
                        </View>
                    ))
                   }
            </View>

        </View>
           
           

            <TouchableOpacity style={{backgroundColor: "black", marginHorizontal: 10 ,borderRadius: 50 ,  padding: 20}} >
                <Text style={{color: 'white', textAlign: "center"}}  onPress={()=>navigation.replace("Form")}>Continue</Text>
            </TouchableOpacity>
        </View>
   </SafeAreaView>
  )
}

export default Home
