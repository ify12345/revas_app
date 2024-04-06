import { StyleSheet } from "react-native";
import { COLORS, SIZES, width, height } from "../assets/constants";

const styles = StyleSheet.create({
  topBar: {
    // width,
    flexDirection: "row",
    // borderWidth: 2,
    // paddingHorizontal: SIZES.medium,
    alignItems: "center",
      
  },
  safeArea: {
    flex: 1,
    flexDirection: "column",
    justifyContent:'space-between',
    paddingHorizontal: SIZES.large,
    gap: 4,
    width,
    height,
    gap: 25
  },
  text:{
    width: '70%',
    fontWeight: '600'
  },
  text2:{
    width: '90%',
    fontWeight: '400'
  },
  buttonFlex:{
    flexDirection: 'row',
    borderWidth:1,
    borderRadius: 8,
    gap: SIZES.small,
    paddingVertical: 30,
    paddingHorizontal:SIZES.large
  },
  buttonFlex2:{
    flexDirection: 'column',
     gap:  4

  },
  inner:{
    width: '70%',
    fontSize: 14
  }

});

export default styles;
