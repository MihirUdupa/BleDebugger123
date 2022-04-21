import React from "react";
import {View, Text, Switch, StyleSheet} from 'react-native';
import FontStyles from "../../utils/fontsHelper";

const Toggle = (props) => {
    return(
        <View style={styles.togglecontainer}>
            <Text style={[styles.switchText, FontStyles.subHeading]}>{props.value?'ON':'OFF'}</Text>
            <Switch style={styles.switch} value={props.value}
            onValueChange={props.onValueChange}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    togglecontainer:{
        flexDirection:'row',
        paddingVertical:'3%',
    },
    switch:{
        width:'50%',
    },
    switchText:{
        flex:1,
        marginLeft:10
    }
})

export default Toggle;