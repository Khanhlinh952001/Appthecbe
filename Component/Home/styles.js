import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  head: {
    height: 100,
    borderBottomWidth: 0.5,
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },

  head_left: {
    flexDirection: "row",
  },

  Ship_text: {
    fontSize: 18,
    marginLeft: 10,
    borderBottomWidth: 2,
    width: 330,
    borderBottomColor: "green",
    paddingBottom: 8,
  },

  Ship_item: {
    flexDirection: "row",
    justifyContent: "space-around",
  },

  Ship_item1: {
    height: 150,
    width: 110,
    alignItems: "center",
    borderWidth: 0.5,
    marginTop: 10,
    borderRadius: 10,
  },

  Ship_item1_image: {
    height: 100,
    width: 100,
    borderRadius: 10,
    marginTop: 10,
  },

  Ship_item1_image_text: {
    marginTop: 10,
    fontSize: 18,
  },

  list: {
    width: 25,
    height: 60,
    marginTop: 50,
    marginLeft: 20,
  },
  logo: {
    marginTop: 45,
    fontSize: 24,
    color: "green",
    marginLeft:30,
    fontWeight:'bold'
  },
  search: {
    marginTop: 50,
    flexDirection: "row",
  },
  icon: {
    marginLeft: 4,
    marginRight: 4,
  },
  lists: {
    marginTop:10,
    top: 0,
    height: 180,
  },

  list_img: {
    width: 400,
    height: 170,
  },

  listItem: {
    marginTop: 5,
    height: 240,
    borderWidth: 0.5,
    borderRadius: 10,
    marginBottom: 4,
  },
  listItem_text: {
    marginLeft: 10,
    color: "black",
    fontSize: 18,
    marginTop: 5,
  },

  list_img_icons1: {
    height: 100,
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop:10
  },

  list_img_icons2: {
    height: 50,
    flexDirection: "row",
    justifyContent: "space-around",
  },

  list_img_icon: {
    alignItems: "center",
    width: 70,
    height: 90,
    borderRadius: 10,
    backgroundColor: "#f8f7f1",
    borderWidth:0.5
  },

  list_img_icon1: {
    marginTop: 5,
    height: 50,
    width: 50,
    borderRadius: 10,
    marginBottom: 4,
  },

  Ship: {
    height: 200,
    marginTop: 4,
    marginBottom: 20,
    backgroundColor: "#f7f7f7",
    borderRadius: 10,
  },

  sanpham_background1: {
    height: 300,
    borderWidth: 0.5,
    borderRadius: 10,
    backgroundColor: "green",
    flex: 1,
    justifyContent: "space-around",
    marginTop: 10,
  },

  sanpham_background2: {
    height: 280,
    width: 390,
    backgroundColor: "white",
    marginLeft: 10,
    borderRadius: 10,
  },

  head_view: {
    height: 50,
    flexDirection: "row",
    justifyContent: "space-between",
  },

  head_view_text1: {
    fontSize: 22,
    borderBottomWidth: 2,
    borderBottomColor: "green",
    marginLeft: 10,
    marginTop: 12,
    color: "green",
  },

  head_view_text2: {
    fontSize: 18,
    marginTop: 20,
    marginRight: 14,
    flexDirection: "row",
    color: "green",
  },

  sanpham_body: {
    height: 210,
    marginTop: 10,
    borderRadius: 10,
  },

  Flat_view: {
    width: 150,
    marginLeft: 8,
    borderRadius: 10,
    borderWidth: 0.5,
    alignItems: "center",
  },

  Flat_view_img: {
    width: 110,
    height: 110,
    borderRadius: 10,
    margin:10
  },
  
  ban_flat_view: {
    height: 130,
    borderRadius: 15,
    flexDirection: "row",
    borderWidth: 0.5,
    marginBottom: 6,
  },

  ban_flat_view_img: {
    height: 80,
    width: 80,
    borderRadius: 10,
    margin: 10,
  },

  ban2_flat_text: {
    marginTop: 8,
    fontSize: 20,
    color: "white",
    backgroundColor: "green",
    borderRadius: 10,
    paddingLeft: 10,
  },
  spb_text:{
    fontSize: 24,
              marginLeft: 10,
              marginTop: 10,
              marginBottom: 8,
              color: "green",
              borderBottomColor: "green",
              borderBottomWidth: 4,
              width: 240,
  }
});

export default styles;
