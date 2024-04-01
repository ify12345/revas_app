import { StyleSheet } from "react-native";
import {
  COLORS,
  SIZES,
  SHADOWS,
  width,
  height,
} from "../../assets/constants/index";

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: "700",
    maxWidth: 270,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 14,
    fontWeight: "400",
    maxWidth: 270,
    textAlign: "center",
    lineHeight: 20,
  },
  bars: {
    paddingVertical: SIZES.large,
  },
  indicator: {
    height: 2,
    width: "30%",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
  },
  btnContainer: {
    backgroundColor: "black",
    borderRadius: 3,
    width: "90%",
    padding: 20,
    color: "white",
  },
  imgContainer: {
    alignItems: "center",
    width,
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
    gap: SIZES.large
  },
  container1: {
    paddingVertical: SIZES.large,
    marginTop: 5,
    width,
    alignItems: "center",
  },
  generalContainer: {
    height,
    flex: 1,
  },
});

export default styles;
