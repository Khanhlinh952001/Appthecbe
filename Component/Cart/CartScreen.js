import {
  Text,
  StyleSheet,
  View,
  FlatList,
  SafeAreaView,
  Button,
} from "react-native";
import React, { Component } from "react";
import styles from "./styles";
import Data from "./Data.js";



export default class CartScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.head}>
          <Text style={styles.head_text}>Giỏ Hàng</Text>
        </View>
        {/* body */}
        <View style={{ flex: 1 }}>
          <View style={styles.body_View}>
            <Text style={styles.body_View_text1}>Tên sản phẩm</Text>
            <Text style={styles.body_View_text2}>Số Lượng</Text>
            <Text style={styles.body_View_text3}>Tiền</Text>
          </View>

          <View style={{ marginTop: 18 }}>
            <SafeAreaView>
              <FlatList
                data={Data}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => {
                  return (
                    <View
                      style={{
                        flex: 1,
                        justifyContent: "space-between",
                        flexDirection: "row",
                        flex: 1,
                      }}
                    >
                      <View style={{ width: 180, height: 40, marginRight: 20 }}>
                        <Text style={styles.list_view_main}>{item.monan}</Text>
                      </View>

                      <View style={{ flexDirection: "row", width: 70 }}>
                        <Text style={{ fontSize: 18 }}>-</Text>
                        <Text style={styles.list_view_text}>1</Text>
                        <Text style={{ fontSize: 18 }}>+</Text>
                      </View>

                      <View
                        style={{
                          width: 100,
                        }}
                      >
                        <Text style={{ fontSize: 16 }}>{item.gia}</Text>
                      </View>
                    </View>
                  );
                }}
              />
            </SafeAreaView>
          </View>

          <View style={{ flex: 1, justifyContent: "space-between" }}>
            <View style={{ width: 100, height: 50, marginLeft: 280 }}>
              <View style={{ flexDirection: "row" }}>
                <Text style={{ fontSize: 18 }}>Ship :</Text>
                <Text style={{ fontSize: 18 }}>0000</Text>
              </View>

              <View style={{ flexDirection: "row" }}>
                <Text style={{ fontSize: 18 }}>Tổng :</Text>
                <Text style={{ fontSize: 18, marginRight: 10 }}>0000</Text>
              </View>
            </View>
          </View>
        </View>

        {/* footer */}
        <View style={styles.footer}>
          <View style={{ flexDirection: "row" }}>
            <Text style={styles.footer_mony}>000.000</Text>
            <Text style={styles.footer_won}> : WON</Text>
          </View>

          <Text style={styles.footer_end}>Thanh Toán</Text>
        </View>
      </View>
    );
  }
}
