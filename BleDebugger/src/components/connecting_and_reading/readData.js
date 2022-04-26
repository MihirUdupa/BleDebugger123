import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, SafeAreaView} from 'react-native';
import FontStyles from '../../utils/fontsHelper';
import RNBluetoothClassic, { BluetoothEventType, BluetoothDevice } from 'react-native-bluetooth-classic';
import Serial from 'react-native-bluetooth-serial-next';

const Readdata = (props) => {
    const [Error, setError] = useState('');
    const [Gyro, setGyro] = useState('');
    const [Battery, setBattery] = useState('');
    const [Speed, setSpeed] = useState('');
    const [Trip, setTrip] = useState('');
    let propsData = props;

    useEffect(() => {
        const getData = async () => {
            try{
                let connected = await RNBluetoothClassic.getConnectedDevice(propsData.data.id);
                if(connected){
                    console.log(propsData.data.id);
                    // let message = await Serial.readFromDevice(propsData.data.id);
                    // console.log('Reading Data '+message);
                    // Serial.readEvery((data,intervalId) => {
                    //     console.log(data,intervalId)
                    // },3000,"",propsData.data.id)
                    let message = await connected.read();
                    console.log('Reading data '+message);
                }
            }catch(err){
                console.log(err);
            }
        }


        const interval = setInterval(() => {
            getData()
          }, 2000);
          return () => clearInterval(interval);
        // getData()
    },[])
    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.dataViews}>
                <Text style={FontStyles.paragraph}>Error Indications Number : </Text>
                <Text style={[FontStyles.paragraph, styles.resultViews]}> 0 - 10</Text>
            </View>
            <View style={styles.dataViews}>
                <Text style={FontStyles.paragraph}>Error Description : </Text>
                <Text style={FontStyles.paragraph}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce quis sapien nibh. Praesent lobortis tortor vitae eros molestie aliquam. Nunc quis mattis lacus, nec varius tortor. Sed finibus diam justo, sed mollis elit mollis quis</Text>
            </View>
            <View style={styles.dataViews}>
                <Text style={FontStyles.paragraph}>Gyro Response Rate : </Text>
                <Text style={[FontStyles.paragraph, styles.resultViews]}> 0 - 2</Text>
            </View>
            <View style={styles.dataViews}>
                <Text style={FontStyles.paragraph}>Battery Status (%) : </Text>
                <Text style={[FontStyles.paragraph, styles.resultViews]}>50.0 %</Text>
            </View>
            <View style={styles.dataViews}>
                <Text style={FontStyles.paragraph}>Current Speed : </Text>
                <Text style={[FontStyles.paragraph, styles.resultViews]}>15 kph</Text>
            </View>
            <View style={styles.dataViews}>
                <Text style={FontStyles.paragraph}>Trip : </Text>
                <Text style={[FontStyles.paragraph, styles.resultViews]}>45 Km</Text>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        height:'100%'
    },
    dataViews:{
        flexDirection:'row',
        justifyContent:'space-between',
        padding:'2%'
    },
    resultViews:{
        paddingRight:'20%'
    }
})

export default Readdata;