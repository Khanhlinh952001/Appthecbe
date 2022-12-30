import {
  Text,
  Image,
  View,
  TouchableOpacity,
  ScrollView,
  FlatList,
  SafeAreaView,
  Alert,
} from "react-native";
import React from "react";
import styles from "./styles";
import { FontAwesome } from "@expo/vector-icons";
import Swiper from "react-native-swiper";
import Data from "./Data";
import { AntDesign } from "@expo/vector-icons";



const CuaHang = () => {
  Alert.alert("Thông Báo", "Bạn muốn đến cữa hàng ??", [
    {
      text: "Cancel",
      onPress: () => console.log("Cancel Pressed"),
      style: "cancel",
    },
    { text: "OK", onPress: () => console.log("OK Pressed") },
  ]);
};

export default function HomeScreen({navigation}) {
    return (
      <ScrollView style={styles.container}>

        {/* head */}
        <View style={styles.head}>
          {/* left view */}
          <View style={styles.head_left}>
            {/* Logo */}
            <Text style={styles.logo}>Vgo_Delivery</Text>
          </View>

          {/* view right */}
          <View style={styles.search}>
            <TouchableOpacity onPress={()=>navigation.navigate("Search")}>
              <FontAwesome
                style={styles.icon}
                name="search"
                size={24}
                color="green"
              />
            </TouchableOpacity>

            <TouchableOpacity onPress={()=>navigation.navigate('Bell')} >
                 <FontAwesome
                style={styles.icon}
                name="bell"
                size={24}
                color="green"
              />
            </TouchableOpacity>

            <TouchableOpacity onPress={()=>navigation.navigate('GioHang')}>
              <FontAwesome
                style={{marginRight:10}}
                name="shopping-cart"
                size={24}
                color="green"
              />
            </TouchableOpacity>
          </View>
        </View>


        {/* chuc nang giao hang */}
        {/* <View style={styles.Ship}>
          <Text  style={styles.Ship_text}>
            Hãy chọn cách giao hàng cho bạn ?
          </Text>
          <View style={styles.Ship_item}>
            <TouchableOpacity onPress={()=>navigation.navigate('Shipper')} style={styles.Ship_item1}>
              <Image
                style={styles.Ship_item1_image}
                source={require("./Img/shipper.png")}
              />
              <Text style={styles.Ship_item1_image_text}>Shipper</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={VanChuyen} style={styles.Ship_item1}>
              <Image
                style={styles.Ship_item1_image}
                source={require("./Img/donggoi.png")}
              />
              <Text style={styles.Ship_item1_image_text}>Đóng gói</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={VanChuyen} style={styles.Ship_item1}>
              <Image
                style={styles.Ship_item1_image}
                source={require("./Img/thecbe.png")}
              />
              <Text style={styles.Ship_item1_image_text}>Vận chuyển</Text>
            </TouchableOpacity>
          </View>
        </View> */}

        {/* sale */}
        <View style={styles.lists}>
          <Swiper>
            <View>
              <Image
                style={styles.list_img}
                source={require("./Img/sale.png")}
              />
            </View>
            <View>
              <Image
                style={styles.list_img}
                source={require("./Img/sale1.png")}
              />
            </View>
            <View>
              <Image
                style={styles.list_img}
                source={require("./Img/sale2.png")}
              />
            </View>
            <View>
              <Image
                style={styles.list_img}
                source={require("./Img/sale.png")}
              />
            </View>
          </Swiper>
        </View>

        {/* tim kiem trong cua hang  */}
        <View style={styles.listItem}>
          <Text style={styles.listItem_text}>Tìm kiếm cữa hàng</Text>
          <View style={styles.list_img_icons1}>
           

            <TouchableOpacity onPress={() => navigation.navigate('Thit')} style={styles.list_img_icon}>
              <Image
                style={styles.list_img_icon1}
                source={require("./Img/thit.png")}
              />
              <Text>Thịt</Text>
            </TouchableOpacity>
            
            <TouchableOpacity onPress={() => navigation.navigate('Ca')} style={styles.list_img_icon}>
              <Image
                style={styles.list_img_icon1}
                source={require("./Img/ca.png")}
              />
              <Text>Cá</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={()=>navigation.navigate('Rau')} style={styles.list_img_icon}>
              <Image
                style={styles.list_img_icon1}
                source={require("./Img/rau.jpeg")}
              />
              <Text>Rau-củ</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={()=>navigation.navigate('TraiCay')} style={styles.list_img_icon}>
              <Image
                style={styles.list_img_icon1}
                source={require("./Img/traicay.png")}
              />
              <Text>Trái cây</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={()=>navigation.navigate('Thuoc')} style={styles.list_img_icon}>
              <Image
                style={styles.list_img_icon1}
                source={require("./Img/thuoc.png")}
              />
              <Text>Thuốc</Text>
            </TouchableOpacity>

            
          </View>

          <View style={styles.list_img_icons2}>
            <TouchableOpacity onPress={()=>navigation.navigate("Kho")} style={styles.list_img_icon}>
              <Image
                style={styles.list_img_icon1}
                source={require("./Img/dokho.png")}
              />
              <Text>Khô</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={()=>navigation.navigate('GiaVi')} style={styles.list_img_icon}>
              <Image
                style={styles.list_img_icon1}
                source={require("./Img/giavi.png")}
              />
              <Text>Gia vị</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={()=>navigation.navigate('BanhKeo')} style={styles.list_img_icon}>
              <Image
                style={styles.list_img_icon1}
                source={require("./Img/banhkeo.png")}
              />
              <Text>Bánh kẹo</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={()=>navigation.navigate('DoUong')} style={styles.list_img_icon}>
              <Image
                style={styles.list_img_icon1}
                source={require("./Img/trasua.png")}
              />
              <Text>Đồ uống</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={CuaHang} style={styles.list_img_icon}>
              <Image
                style={styles.list_img_icon1}
                source={require("./Img/saleoff.png")}
              />
              <Text>Săn sale</Text>
            </TouchableOpacity>

            
          </View>
        </View>

        {/* san pham hot */}
        <View style={styles.sanpham_background1}>
          <View style={styles.sanpham_background2}>
            {/* Header */}
            <View style={styles.head_view}>
              <Text style={styles.head_view_text1}>SẢN PHẨM HOT</Text>
              <Text style={styles.head_view_text2}>
                xem thêm
                <AntDesign name="doubleright" size={18} color="green" />
              </Text>
            </View>
            {/* body */}
            <View style={styles.sanpham_body}>
              <SafeAreaView style={{ flex: 1 }}>
                <FlatList
                  data={Data}
                  horizontal={true}
                  keyExtractor={(item) => item.id}
                  renderItem={({ item }) => {
                    return (
                      <TouchableOpacity onPress={()=>navigation.navigate('Ok')} style={styles.Flat_view}>
                        <Image
                          source={{ uri: item.img }}
                          style={styles.Flat_view_img}
                        />
                        <Text style={{ fontSize: 16 }}>{item.monan}</Text>
                        <Text style={{ fontSize: 18 }}>{item.gia}</Text>
                      </TouchableOpacity>
                    );
                  }}
                />
              </SafeAreaView>
            </View>
          </View>
        </View>

        {/* san pham ban */}

        <View style={{ flex: 1, marginTop: 10 }}>
          <Text
            style={styles.spb_text}
          >
            Đề xuất hôm nay
          </Text>
            {
              Data.map((item)=>{
                return (
                  <TouchableOpacity 
                  key={item.id}
                  onPress={()=>navigation.navigate('Ok')} style={styles.ban_flat_view}>
                    {/* Img */}
                    <View >
                      <Image
                        style={styles.Flat_view_img}
                        source={{ uri: item.img }}
                      />
                    </View>

                    <View>
                      <Text style={styles.ban2_flat_text}>{item.name}</Text>
                      <Text style={{ fontSize: 18 }}>{item.monan}</Text>
                      <Text style={{ fontSize: 18 }}>{item.address}</Text>
                      <View style={{ flexDirection: "row" }}>
                        <Text style={{ fontSize: 16, paddingRight: 10 }}>
                          {item.gia}
                        </Text>
                        <Text
                          style={{
                            fontSize: 16,
                            backgroundColor: "pink",
                            borderRadius: 10,
                            paddingLeft: 8,
                            paddingRight: 8,
                            color: "red",
                          }}
                        >
                          Cách đây {item.km1}
                        </Text>
                      </View>
                    </View>
                  </TouchableOpacity>
                );
              })
            }
           
        </View>
      </ScrollView>
    );
  
}
