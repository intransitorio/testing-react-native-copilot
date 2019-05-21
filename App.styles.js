import { StyleSheet, Dimensions } from "react-native";

const deviceWidth = Dimensions.get("window").width;

const $purple = "rgb(109,33,119)";

export const styles = StyleSheet.create({
  containerWrapper: {
    flex: 1,
    // backgroundColor: $purple,
    alignItems: "center",
    justifyContent: "flex-end"
  },
  modal: {
    flex: 1,
    margin: 0,
    padding: 0,
    alignItems: "center",
    justifyContent: "flex-end"
  },
  modalContent: {
    flex: 0,
    marginTop: 70,
    width: deviceWidth,
    paddingTop: 20,
    // width: ,
    // alignItems: "flex-end",
    // alignItems: "flex-end",
    alignItems: "center",
    alignSelf: "center",
    borderTopEndRadius: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderTopStartRadius: 20,
    backgroundColor: "#fff"
  },
  paragraph: {
    padding: 20
  },
  button: {
    marginRight: 40,
    marginLeft: 40,
    marginTop: 10,
    marginBottom: 20,
    paddingTop: 10,
    paddingBottom: 10,
    borderWidth: 1,
    borderColor: $purple,
    borderRadius: 4,
    height: 67,
    width: deviceWidth - 40,
    alignItems: "center",
    justifyContent: "center"

    // flex: 1,
    // marginBottom: 20,
    // marginHorizontal: 20,
    // alignItems: "center",
    // width: deviceWidth,
    // backgroundColor: "#f0f"
    // fontSize: 18
    // flex: 1
  },
  buttonText: {
    color: $purple,
    textAlign: "center",
    paddingHorizontal: 20,
    fontSize: 12.8,
    textTransform: "uppercase",
    fontWeight: "bold"
  },

  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    paddingTop: 40
  },
  title: {
    fontSize: 24,
    textAlign: "center"
  },
  profilePhoto: {
    width: 140,
    height: 140,
    borderRadius: 70,
    marginVertical: 20
  },
  middleView: {
    flex: 1,
    alignItems: "center"
  },
  button: {
    backgroundColor: "#2980b9",
    paddingVertical: 10,
    paddingHorizontal: 15
  },
  buttonText: {
    color: "white",
    fontSize: 16
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  tabItem: {
    flex: 1,
    textAlign: "center"
  },
  activeSwitchContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
    alignItems: "center",
    paddingHorizontal: 40
  }
});
