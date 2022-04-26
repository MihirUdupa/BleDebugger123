import React, {useState} from 'react';
import {View, StyleSheet, SafeAreaView, Text, TouchableOpacity, TextInput, ScrollView} from 'react-native';
import FontStyles from '../../utils/fontsHelper';
import RNBluetoothClassic, { BluetoothEventType, BluetoothDevice } from 'react-native-bluetooth-classic';
import base64 from 'react-native-base64';

const Config = (props) => {
    const [Gyro, setGyro] = useState('');
    const [Bat1, Batcut1] = useState('');
    const [Bat2, Batcut2] = useState('');
    const [Bat3, Batcut3] = useState('');

    const sendData = async (props) => {
        // if(){

        // }
        let json_data = {
            "Gyro":Gyro,
            "Battery1_Cut-off":Bat1,
            "Battery2_Cut-off":Bat2,
            "Battery3_Cut-off":Bat3
        }

        let encoded = JSON.stringify(json_data);
        let enc64 = Buffer.from(encoded).toString('base64');

        try{
            let connected = await RNBluetoothClassic.getConnectedDevice(props.data.id)
            if(connected){
                let written = await connected.write(enc64,"base64");
                if(written){
                    setGyro('');
                    Batcut1('');
                    Batcut2('');
                    Batcut3('');
                }
            }
        }catch(err){
            console.log(err)
        }
    }

    return(
        <SafeAreaView style={styles.container}>
            <View>
                <Text style={FontStyles.subTitle}>Please set the values for the following</Text>
            </View>
            <ScrollView>
                <View style={styles.subcontainer}>
                    <View style={styles.mainBox}>
                        <View style={styles.dataViews}>
                            <Text>Gyro Response Rate : </Text>
                            <TextInput style={styles.inputBox} placeholder='0 - 2'
                            onChangeText={newText => setGyro(newText)}
                            defaultValue={Gyro}></TextInput>
                        </View>
                        <View style={styles.dataViews}>
                            <Text style={FontStyles.hintData}>Min = 0</Text>
                            <Text style={FontStyles.hintData}>Max = 2</Text>
                            <Text style={FontStyles.hintData}>Default = 1</Text>
                        </View>
                        <View style={styles.dataViews}>
                            <Text>Battery Cuttoff Limit 1 : </Text>
                            <TextInput style={styles.inputBox} placeholder='0 - 10'
                            onChangeText={newText => Batcut1(newText)}
                            defaultValue={Bat1}></TextInput>
                        </View>
                        <View style={styles.dataViews}>
                            <Text style={FontStyles.hintData}>Min = 0</Text>
                            <Text style={FontStyles.hintData}>Max = 10</Text>
                            <Text style={FontStyles.hintData}>Default = 10</Text>
                        </View>
                        <View style={styles.dataViews}>
                            <Text>Battery Cuttoff Limit 2 : </Text>
                            <TextInput style={styles.inputBox} placeholder='11 - 30'
                            onChangeText={newText => Batcut2(newText)}
                            defaultValue={Bat2}></TextInput>
                        </View>
                        <View style={styles.dataViews}>
                            <Text style={FontStyles.hintData}>Min = 11</Text>
                            <Text style={FontStyles.hintData}>Max = 30</Text>
                            <Text style={FontStyles.hintData}>Default = 30</Text>
                        </View>
                        <View style={styles.dataViews}>
                            <Text>Battery Cuttoff Limit 3 : </Text>
                            <TextInput style={styles.inputBox} placeholder='31 - 99'
                            onChangeText={newText => Batcut3(newText)}
                            defaultValue={Bat3}></TextInput>
                        </View>
                        <View style={styles.dataViews}>
                            <Text style={FontStyles.hintData}>Min = 31 &nbsp;</Text>
                            <Text style={FontStyles.hintData}>Max = 99 &nbsp;</Text>
                            <Text style={FontStyles.hintData}>Default = 99</Text>
                        </View>
                    </View>
                </View>
            </ScrollView>
            <View style={styles.btnComponent}>
                <TouchableOpacity style={styles.button} onPress={() => sendData(props)}>
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