import { Text, StyleSheet, View,TextInput } from 'react-native'
import React, { Component } from 'react'
import { FontAwesome } from "@expo/vector-icons";



export default class Search extends Component {
  render() {
    return (
      <View style={{flex:1}}>
        <View style={{height:100,backgroundColor:'green'}}>
            <View  style={{borderWidth:1,marginTop:40,backgroundColor:'white',marginBottom:10
            ,marginLeft:20,borderRadius:15,flex:1,marginRight:20,flexDirection:'row'}}>
              <TextInput placeholder='Bạn muốn tìm gì ?' style={{flex:1,paddingLeft:10}} />

                <FontAwesome
                style={{borderLeftWidth:1,paddingLeft:10,paddingRight:10,paddingTop:10}}
                name="search"
                size={24}
                color="black"
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