import {
  Text,
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  FlatList,
  SafeAreaView,
  Alert,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import React, { Component } from "react";
import FruitDATA from "./FruitData";

const CuaHang = () => {
  Alert.alert("Thông Báo", "Bạn muốn mua không ??", [
    {
      text: "Cancel",
      onPress: () => console.log("Cancel Pressed"),
      style: "cancel",
    },
    { text: "OK", onPress: () => console.log("OK Pressed") },
  ]);
};

export default class Fruit extends Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
        }}
      >
        <View
          style={{
            height: 120,
            borderBottomWidth: 0.5,
            marginTop: 10,
            paddingBottom: 10,
            justifyContent: "space-around",
            flexDirection: "row",
          }}
        >
          <TouchableOpacity
            style={{
              height: 110,
              width: 80,
              borderWidth: 0.5,
              flex: 1,
              alignItems: "center",
              borderRadius: 10,
              marginLeft: 10,
              marginRight: 10,
            }}
          >
            <Image
              style={{ height: 80, width: 80, marginTop: 4 }}
              source={require("../Img/shopgreen.png")}
            />
            <Text style={{ fontSize: 16 }}>화 가계</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              height: 110,
              width: 100,
              borderWidth: 0.5,
              flex: 1,
              alignItems: "center",
              borderRadius: 10,
              marginLeft: 10,
              marginRight: 10,
            }}
          >
            <Image
              style={{ height: 80, width: 80, marginTop: 4 }}
              source={require("../Img/shopgreen.png")}
            />
            <Text style={{ fontSize: 16 }}>화 가계</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              height: 110,
              width: 100,
              borderWidth: 0.5,
              flex: 1,
              alignItems: "center",
              borderRadius: 10,
              marginLeft: 10,
              marginRight: 10,
            }}
          >
            <Image
              style={{ height: 80, width: 80, marginTop: 4 }}
              source={require("../Img/shopgreen.png")}
            />
            <Text style={{ fontSize: 16, paddingBottom: 10 }}>화 가계</Text>
          </TouchableOpacity>
        </View>

        <View style={{ flex: 1, flexDirection: "row" }}>
          <SafeAreaView style={{ flex: 1 }}>
            <FlatList
              data={FruitDATA}
              horizontal={false}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => {
                return (
                  <View
                    style={{
                      height: 130,
                      borderWidth: 1,
                      marginLeft: 10,
                      marginRight: 10,
                      marginTop: 10,
                      borderRadius: 10,
                      flexDirection: "row",
                    }}
                  >
                    <View>
                      <Image
                        style={{
                          width: 100,
                          height: 110,
                          margin: 10,
                          borderRadius: 10,
                        }}
                        source={{ uri: item.img }}
                      />
                    </View>

                    <View style={{ marginTop: 15, flex: 1 }}>
                      <Text style={{ fontSize: 18 }}>{item.name}</Text>

                      <View style={{ flexDirection: "row" }}>
                        <Text style={{ fontSize: 15, color: "red" }}>
                          {item.Gia}{" "}
                        </Text>
                        <Text style={{ fontSize: 16, color: "red" }}>
                          Giảm còn{" "}
                        </Text>
                        <Text style={{ fontSize: 16, color: "red" }}>
                          {item.sale}
                        </Text>
                      </View>

                      <View style={{ flexDirection: "row" }}>
                        <Text>Đánh giá </Text>
                        <AntDesign name="star" size={18} color="orange" />
                        <AntDesign name="star" size={18} color="orange" />
                        <AntDesign name="star" size={18} color="orange" />
                        <AntDesign name="star" size={18} color="orange" />
                        <AntDesign name="staro" size={18} color="orange" />
                      </View>

                      <View>
                        <Text>Lượt mua :99999</Text>
                      </View>
                    </View>

                    <TouchableOpacity
                      onPress={CuaHang}
                      style={{
                        height: 90,
                        width: 80,
                        backgroundColor: "red",
                        margin: 10,
                        marginTop: 20,
                        alignItems: "center",
                        borderRadius: 30,
                      }}
                    >
                      <Text
                        style={{
                          lineHeight: 90,
                          fontSize: 20,
                          color: "white",
                          fontWeight: "bold",
                        }}
                      >
                        MUA
                      </Text>
                    </TouchableOpacity>
                  </View>
                );
              }}
            />
          </SafeAreaView>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({});
