import React from "react";
import { View, Text, StyleSheet } from "react-native";
import FontStyles from "./fontsHelper";

const Subtitle = (props) =>{
    return (
        <View style={styles.container}>
            <Text style={[styles.subTitleText, FontStyles.subTitle]}>{props.subTitle}</Text>
            <View style={styles.line}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        marginVertical:15,
        alignItems:'center'
    },
    line:{
        borderWidth:1,
        width:'50%',
        marginLeft:'2%',
        flex:1,
        marginTop:'3%',
        borderColor:'#eceff3'
    },
    subTitleText:{
        color:'#808080'
    }
})

export default Subtitle;