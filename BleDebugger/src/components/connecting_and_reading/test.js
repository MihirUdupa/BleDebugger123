import React from 'react';
import {View, Text, StyleSheet, SafeAreaView} from 'react-native';
import FontStyles from '../../utils/fontsHelper';
import Toggler from '../../utils/toggler';

const TestDevice = (props) => {
    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.dataContainers}>
                <Text style={FontStyles.paragraph}>Power :</Text>
                <Toggler />
            </View>
            <View style={styles.dataContainers}>
                <Text style={FontStyles.paragraph}>Indicator(L) Status :</Text>
                <Toggler />
            </View>
            <View style={styles.dataContainers}>
                <Text style={FontStyles.paragraph}>Indicator(R) Status : </Text>
                <Toggler />
            </View>
            <View style={styles.dataContainers}>
                <Text style={FontStyles.paragraph}>Headlamp status :</Text>
                <Toggler />
            </View>
            <View style={styles.dataContainers}>
                <Text style={FontStyles.paragraph}>Buzzer : </Text>
                <Toggler />
            </View>
            {/* <View>
                <Text>Additional Data</Text>
            </View> */}
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        height:'100%'
    },
    dataContainers:{
        flexDirection:'row',
        justifyContent:'space-between',
    },
    adjustments1:{
        paddingLeft:'2%'
    }
})

export default TestDevice;