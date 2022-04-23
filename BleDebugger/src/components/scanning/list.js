import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Text, SafeAreaView, FlatList, PermissionsAndroid} from 'react-native';
import Header from '../../utils/header';
import Toggle from './toggle';
import Device from './devices';
import Empty from './empty';
import RNBluetoothClassic from 'react-native-bluetooth-classic';
// import BluetoothStateManager from 'react-native-bluetooth-state-manager';

const Scanner = (props) =>{
    let [bolEnable, setBolEnable] = useState(Boolean);
    let [listData, setListData] = useState([])
    const renderEmpty = () => <Empty text='No Devices Available'/>
    const renderItem = (item) => {
        return <Device {...item} iconLeft={require('../../assets/images/ic_laptop.png')} iconRight={require('../../assets/images/ic_settings.png')} props={props}/>
    }

    const toggleBluetooth = value =>{
        if(value){
            enableBluetooth();
        }
        disableBluetooth();
    }
    
    const enableBluetooth = async () => {
        try{
            let enable = await RNBluetoothClassic.isBluetoothEnabled();
            if(!enable){
                await grantPermission()
                await grantBlPermission()
                setBolEnable(true)
            }else{
                setBolEnable(enable)
            }
        } catch(err) {
            console.log(err);
        }
        return(
            <Text>Bluetooth Enabled</Text>
        )
    }

    const disableBluetooth = () => {
        setBolEnable(false)
        return(
            <Text>Bluetooth Disabled</Text>
        )
    }

    const grantPermission = async () => {
        try{
            const granted = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,{
                title:'Allow Location Permission',
                message:'Requesting to access your location',
                buttonNeutral: "Ask Me Later",
                buttonNegative: "Cancel",
                buttonPositive: "OK"
            })
            if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                console.log("Location permission enabled");
            } else {
                console.log("Location permission denied");
            }
        }catch(err){
            console.log(err)
        }
    }

    const grantBlPermission = async() => {
        // BluetoothStateManager.getState().then((bluetoothState) => {
        //     switch (bluetoothState) {
        //       case 'PoweredOff':
        //         BluetoothStateManager.requestToEnable().then((result) => {
        //             if(result != null){
        //                 console.log(result)
        //             }
        //         });
        //       default:
        //         break;
        //     }
        // });
        let result = await RNBluetoothClassic.requestBluetoothEnabled()
        console.log(result)
    }

    const scanDevices = async() => {
        try{
            if(bolEnable == true){
                console.log('scanning Devices')
                let devices = await RNBluetoothClassic.startDiscovery();
                console.log(devices)
                let availableDevices = []
                for(let i=0;i<devices.length;i++){
                    availableDevices.push({"id":devices[i]._nativeDevice.id,"name":devices[i]._nativeDevice.name,"device":devices[i]})
                }
                // console.log(availableDevices)
                setListData(availableDevices)
            }
        } catch(err) {
            console.log(err)
        }
    }

    useEffect(() =>{
        scanDevices()
    },[bolEnable]);

    return(
        <SafeAreaView style={styles.container}>
            <Header title='Scanning Devices'>
                
            </Header>
            <Toggle value={bolEnable} onValueChange={toggleBluetooth}/>
            <FlatList 
                data={listData}
                ListEmptyComponent={renderEmpty}
                renderItem={renderItem}
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1
    }
})

export default Scanner;

