import React from 'react';
import {View, StyleSheet, SafeAreaView, Text, TouchableOpacity, TextInput} from 'react-native';
import FontStyles from '../../utils/fontsHelper';

const Config = () => {
    return(
        <SafeAreaView style={styles.container}>
            <View>
                <Text style={FontStyles.subTitle}>Please set the values for the following</Text>
            </View>
            <View style={styles.subcontainer}>
                <View style={styles.mainBox}>
                    <View style={styles.dataViews}>
                        <Text>Gyro Response Rate : </Text>
                        <TextInput style={styles.inputBox} placeholder='0 - 2'></TextInput>
                    </View>
                    <View style={styles.dataViews}>
                        <Text style={FontStyles.hintData}>Min = 0</Text>
                        <Text style={FontStyles.hintData}>Max = 2</Text>
                        <Text style={FontStyles.hintData}>Default = 1</Text>
                    </View>
                    <View style={styles.dataViews}>
                        <Text>Battery Cuttoff Limit 1 : </Text>
                        <TextInput style={styles.inputBox} placeholder='0 - 10'></TextInput>
                    </View>
                    <View style={styles.dataViews}>
                        <Text style={FontStyles.hintData}>Min = 0</Text>
                        <Text style={FontStyles.hintData}>Max = 10</Text>
                        <Text style={FontStyles.hintData}>Default = 10</Text>
                    </View>
                    <View style={styles.dataViews}>
                        <Text>Battery Cuttoff Limit 2 : </Text>
                        <TextInput style={styles.inputBox} placeholder='11 - 30'></TextInput>
                    </View>
                    <View style={styles.dataViews}>
                        <Text style={FontStyles.hintData}>Min = 11</Text>
                        <Text style={FontStyles.hintData}>Max = 30</Text>
                        <Text style={FontStyles.hintData}>Default = 30</Text>
                    </View>
                    <View style={styles.dataViews}>
                        <Text>Battery Cuttoff Limit 3 : </Text>
                        <TextInput style={styles.inputBox} placeholder='31 - 99'></TextInput>
                    </View>
                    <View style={styles.dataViews}>
                        <Text style={FontStyles.hintData}>Min = 31 &nbsp;</Text>
                        <Text style={FontStyles.hintData}>Max = 99 &nbsp;</Text>
                        <Text style={FontStyles.hintData}>Default = 99</Text>
                    </View>
                </View>
            </View>
            <View style={styles.btnComponent}>
                <TouchableOpacity style={styles.button}>
                    <Text>Send Data</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

const styles=StyleSheet.create({
    container:{
        height:'100%'
    },
    dataViews:{
        flexDirection:'row',
        padding:'2%',
        justifyContent:'space-evenly'
    },
    inputBox:{
        padding:'0.1%',
        borderWidth:1,
        width:'40%',
        textAlign:'center'
    },
    mainBox:{
        borderWidth:1,
    },
    subcontainer:{
        padding:'5%'
    },
    btnComponent:{
        padding:'5%',
        alignContent:'center',
        alignItems:'center',
        alignSelf:'center'
    },
    button:{
        borderWidth:1,
        padding:'3%'
    }
})

export default Config;