import { Text, StyleSheet, View, TouchableOpacity } from "react-native";
import React, { Component } from "react";

export default class Ok extends Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center" }}>
        <View style={{ marginTop: 300 }}>
          <TouchableOpacity>
            <Text
              style={{
                height: 40,
                width: 250,
                backgroundColor: "red",
                color: "white",
                fontSize: 24,
                marginBottom: 20,
                paddingLeft: 60,
                borderRadius: 10,
              }}
            >
              Mua Hàng
            </Text>
          </TouchableOpacity>

          <TouchableOpacity>
            <Text
              style={{
                height: 40,
                width: 250,
                backgroundColor: "pink",
                color: "red",
                fontSize: 24,
                paddingLeft: 20,
                borderRadius: 10,
              }}
            >
              Thêm Vào Giỏ Hàng
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({});
