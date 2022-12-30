import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        flex:1,
        
    },

    head:{   
        height:110,
        borderBottomWidth:6,
        flexDirection:'row',
        justifyContent:'space-between',
        borderBottomColor:'green',
      },

      head_text:{
        marginTop:50,
        marginLeft:20,
        fontSize:28,
        color:'green'
      },

      head_bell:{
        marginTop:60,
        marginRight:20
      },

      body:{
        width:400,
        flex:1,
        marginLeft:5,
      },

      body_text:{
        backgroundColor:'#07a243',
        width:200,
        fontSize:16,
        marginLeft:195,
        borderRadius:10,
        padding:8,
        paddingLeft:10,
        color:'white',
        marginTop:10
      },

      footer:{
        height:80,
        flexDirection:'row',
        paddingTop:30
      },

      footer_input:{
         borderWidth:1,
         marginLeft:10,
         borderRadius:20,
         padding:8,
         width:330,
         borderColor:'green',
      },

      footer_input_icon:{
        width:50,
        marginLeft:10,
        borderWidth:1,
        padding:10,
        borderRadius:40,  
        borderColor:'green',

       }
});

export default styles;