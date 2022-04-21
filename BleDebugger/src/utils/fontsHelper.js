import React from "react";
import {StyleSheet} from 'react-native';

const FontStyles = StyleSheet.create({
    heading:{
        fontSize:30,
        fontWeight:'bold',
        textDecorationLine:'underline',
    },
    subHeading:{
        fontSize:20,
        fontWeight:'500'
    },
    paragraph:{
        fontSize:16,
        paddingTop:'2%'
    },
    subTitle:{
        fontSize:18,
        fontWeight:'400'
    },
    terminal:{
        fontSize:16,
    },
    RespHeading:{
        fontSize:18,
        padding:'2%',
        fontWeight:'400',
        textDecorationLine: 'underline'
    },
    RespParagraph:{
        fontSize:16,
    },
    hintData:{
        fontSize:10,
        fontStyle:'italic'
    }
})

export default FontStyles;