import React, { useCallback, useState } from "react";
import {  Text, StyleSheet, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import * as DocumentPicker from "expo-document-picker";
import {  ArrowUpTrayIcon } from "react-native-heroicons/solid";

import RTouchableOpacity from "./RTouchableOpacity";
import RText from "./RText";

export default function FileUpload() {
  const [fileResponse, setFileResponse] = useState([]);

  const handleDocumentSelection = useCallback(async () => {
    try {
      const response = await DocumentPicker.getDocumentAsync({
        type: "*/*",
        multiple: true,
      });
      if (response.type === "success") {
        setFileResponse([response]);
      }
    } catch (err) {
      console.warn(err);
    }
  }, []);

  return (
    <View>
       
      <StatusBar style="auto" />
      {fileResponse.map((file, index) => (
        <Text key={index.toString()}>
          {file?.uri}
        </Text>
      ))}
       <View
       style={styles.containerInput}>
        <RText>Upload  document </RText>

      <RTouchableOpacity backgroundColor="black" style={{borderRadius:32, paddingHorizontal:15,paddingVertical:8}} onPress={handleDocumentSelection}> 
       <ArrowUpTrayIcon color="white"/>
       <RText color="white">Attatch</RText>
      </RTouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
    containerInput:{
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        paddingHorizontal: 10,
        height: 50,
        flexGrow: 1,
        // padding: 16,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: "gray",
        zIndex:0,
    },
  container: {
   
    
  },
 
});
