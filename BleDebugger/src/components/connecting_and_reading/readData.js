import React from 'react';
import {View, Text, StyleSheet, SafeAreaView} from 'react-native';

const Readdata = () => {
    return(
        <SafeAreaView>
            <View>
                <Text>Error Indications Number</Text>
            </View>
            <View>
                <Text>Gyro Response Rate</Text>
            </View>
            <View>
                <Text>Battery Status (%)</Text>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({

})

export default Readdata;