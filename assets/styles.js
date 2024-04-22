import { StyleSheet } from "react-native";
import { COLORS, SIZES, width, height } from "./constants";

const styles = StyleSheet.create({
  topBar: {
    flexDirection: "row",
    alignItems: "center",
  },
  container1: {
    flexDirection: "column",
    // justifyContent: "space-between",
    flex: 1,
  },
  started: {
    flexDirection: "column",
    gap: 4,
    marginBottom: SIZES.medium,
  },
  container: {
    flexDirection: "column",
    marginHorizontal: SIZES.medium,
    marginVertical: SIZES.xLarge,
    gap: SIZES.medium,
  },
  button: {
    marginVertical: SIZES.medium,
  },
  checkBox: {
    flexDirection: "row",
    gap: SIZES.large,
    marginVertical: SIZES.small,
  },
  footerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 3,
  },
  footerContainerSignIn: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  home:{
    flexDirection:'row',
    width: '100',
    justifyContent:"space-between",
    marginHorizontal: SIZES.small,
    alignItems:'flex-start',
  },
  home2:{
    flexDirection:'row',
    width: '100',
    justifyContent:"space-between",
    marginHorizontal: SIZES.small,
    alignItems:'center',
    marginTop:SIZES.large,
    marginBottom: 10
  },
  profileContainer:{
    flexDirection: "column",
    gap:SIZES.large,
    paddingVertical:SIZES.large
  },
  profileContainer1:{
    width:'100%',
    flexDirection:"row",
    justifyContent:"space-between",
    

  },
  profileContainer2:{
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"center",
    alignContent:"center"
  },
  userInfo:{
    flexDirection:"column",
    gap:5,
    
  }
});

export default styles;
