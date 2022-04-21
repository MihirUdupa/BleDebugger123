import React from "react";
import { View, Text } from "react-native";
import FontStyles from "../../utils/fontsHelper";

function Empty(props){
    return(
        <View>
            <Text style={FontStyles.paragraph}>{props.text}</Text>
        </View>
    )
}

export default Empty;