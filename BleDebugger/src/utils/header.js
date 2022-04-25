import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import FontStyles from './fontsHelper';

const header = (props) =>{
    return(
        <View style={styles.headrercontainer}>
            <Text style={FontStyles.heading}>{props.title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    headrercontainer:{
        flex:0.2,
        alignItems: 'center', 
        justifyContent: 'center'
    }
})

export default header;