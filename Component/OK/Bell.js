import { Text, StyleSheet, View,TouchableOpacity } from 'react-native'
import React, { Component } from 'react'
import { FontAwesome } from "@expo/vector-icons";



export default class Bell extends Component {
  render() {
    return (
        <View style={{flex:1}}>
        <View style={{height:80,backgroundColor:'green',justifyContent:'space-between',flexDirection:'row'}}>
            <View>

            </View>
            <View style={{marginTop:20,marginRight:20,flexDirection:'row'}}>
                <Text style={{fontSize:28,color:'white',marginRight:90}} >
                    Thông Báo 
                </Text>
                <FontAwesome
                style={{}}
                name="bell"
                size={32}
                color="white"
              />
            </View>
                
         </View>

        <View style={{flex:1,backgroundColor:'#9999'}}>

        </View>
        
      </View>
    )
  }
}

const styles = StyleSheet.create({})