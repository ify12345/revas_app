import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';

export default function ProductMore({route}) {
    const { code, title } = route.params;
  return (
    <SafeAreaView style={{flex:1, flexDirection:"column",gap:8}}>
        <View style={styles.container}>
          <Text style={{fontSize:20, fontWeight:"700"}}>{title}</Text>
          <TouchableOpacity style={{flexDirection:'row',gap:4,justifyContent:'center', alignItems:"center", borderRadius: 50, backgroundColor:"#E8DEF8",padding: 6}}>
            <Text style={{fontSize: 10}}>{code}</Text>
            <AntDesign name="infocirlceo" size={14} color="black" />
         </TouchableOpacity>

       
        </View>
        <Image style={{width:"90%", height:150, marginHorizontal:20}} source={require('../assets/recyclates.png')}/>
        
        <View style={styles.container2}>
          <Text style={{fontSize:20, fontWeight:"200"}}>Types of Plastic</Text>
          <Text style={{fontSize:20, fontWeight:"400"}}>rPET Flakes</Text>
        
        </View>
        <View style={styles.container2}>
          <Text style={{fontSize:20, fontWeight:"200"}}>Volume in(Tones)</Text>
          <Text style={{fontSize:20, fontWeight:"400"}}>500</Text>
        
        </View>
        <View style={styles.container2}>
          <Text style={{fontSize:20, fontWeight:"200"}}>Duration</Text>
          <Text style={{fontSize:20, fontWeight:"400"}}>2 weeks</Text>
        
        </View>
        <View style={styles.container2}>
          <Text style={{fontSize:20, fontWeight:"200"}}>Price</Text>
          <Text style={{fontSize:20, fontWeight:"400", color:"#006C1E"}}>$3,334.</Text>
        
        </View>
        <View style={styles.container2}>
          <Text style={{fontSize:20, fontWeight:"200"}}>Location</Text>
          <Text style={{fontSize:20, fontWeight:"400"}}>Kaduna</Text>
        
        </View>
        <View style={styles.container3}>
            <TouchableOpacity style={{backgroundColor: "black", marginHorizontal: 10 , padding: 20,marginVertical:20,width:"100%"}} >
                    <Text style={{color: 'white', textAlign: "center"}}>Proceed to chat</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{backgroundColor:"#FFF0F0", marginHorizontal: 10 , padding: 20,width:"100%"}} >
                    <Text style={{color: 'red', textAlign: "center"}}>Cancel</Text>
            </TouchableOpacity>
     
        </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container:{
        flexDirection: "row",
        alignItems: "center",
        justifyContent:"space-between",
        paddingHorizontal: 20,
        paddingVertical: 10
    },
    container2:{
        flexDirection: "row",
        alignItems: "center",
        justifyContent:"space-between",
        marginHorizontal: 20,
        borderBottomWidth:1,
        borderBottomColor: "gray",
        paddingVertical:20
    },
    container3:{
        flexDirection: "column",
        alignItems: "center",
        justifyContent:"space-between",
        marginHorizontal: 20,       
        paddingVertical:20
    }
})