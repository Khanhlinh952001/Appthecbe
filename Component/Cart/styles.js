import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  head: {
    height: 100,
    borderBottomWidth: 1,
    borderBottomColor: "green",
    alignItems: "center",
  },
  head_text: {
    fontSize: 24,
    color: "green",
    marginTop: 50,
  },
  body_View: {
    justifyContent: "space-between",
    flexDirection: "row",
    marginTop: 10,
  },
  body_View_text1: {
    fontSize: 18,
    marginLeft: 4,
    borderBottomWidth: 2,
    height: 30,
    width: 140,
    paddingLeft: 10,
    borderBottomColor: "green",
  },

  body_View_text2: {
    fontSize: 18,
    height: 30,
    width: 90,
    borderBottomWidth: 2,
    paddingLeft: 6,
    borderBottomColor: "green",
  },

  body_View_text3: {
    fontSize: 18,
    marginRight: 4,
    height: 30,
    width: 100,
    borderBottomWidth: 2,
    paddingLeft: 19,
    borderBottomColor: "green",
  },

  list_view_main: {
    fontSize: 18,
    marginTop: 4,
    marginLeft: 8,
    borderBottomWidth: 1,
  },
  list_view_text: {
    fontSize: 18,
    paddingLeft: 4,
    paddingRight: 4,
  },

  footer: {
    justifyContent: "space-around",
    flexDirection: "row",
    marginBottom: 10,
  },
  footer_mony: {
    width: 150,
    borderWidth: 1,
    paddingLeft: 10,
    paddingRight: 10,
    fontSize: 18,
    borderRadius: 4,
    marginTop: 15,
  },
  footer_won: { marginTop: 20, marginLeft: 6, fontSize: 18 },
  footer_end: {
    width: 150,
    paddingLeft: 10,
    paddingRight: 10,
    height: 45,
    fontSize: 18,
    backgroundColor: "red",
    color: "white",
    borderRadius: 15,
    marginTop: 15,
  },
  button: {
    width: 15,
    height: 10,
  },
});
export default styles;
