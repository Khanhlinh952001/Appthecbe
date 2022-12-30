import { Text, View, TextInput ,TouchableOpacity} from "react-native";
import React, { Component } from "react";
import styles from "./styles.js";
import { FontAwesome } from "@expo/vector-icons";

export default class MessengerScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        {/* header */}
        <View style={styles.head}>
          <View>
            <Text style={styles.head_text}>Messenger</Text>
          </View>
          <View>
            <FontAwesome
              style={styles.head_bell}
              name="bell"
              size={24}
              color="green"
            />
          </View>
        </View>
        {/* body */}
        <View style={styles.body}>
          <Text style={styles.body_text}>Hi,Chào Vgo</Text>
        </View>
        {/*  */}
        <View style={styles.footer}>
          <View>
            <TextInput 
            style={styles.footer_input} 
            placeholder="Hi,Chào Vgo" />
          </View>
           <TouchableOpacity>
           <FontAwesome style={styles.footer_input_icon} name="send-o" size={24} color="green" />
           </TouchableOpacity>

        </View>
      </View>
    );
  }
}
