import React, {useState} from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Modal} from 'react-native';
import FontStyles from '../../utils/fontsHelper';
import RNBluetoothClassic, { BluetoothEventType, BluetoothDevice } from 'react-native-bluetooth-classic';

const Device = (props) => {
    let data = {
        "id":props.item.id,
        "name":props.item.name,
        "navigation":props.navigation
    }

    const checkbonded = async (id) => {
        let paired = false;
        let devices = await RNBluetoothClassic.getBondedDevices();
        for(let i=0;i<devices.length;i++){
            if(devices[i]._nativeDevice.id == id){
                paired = true
            }
        }
        return paired
    }

    const connectionToDevice = async (id,props,device) => {
        let conectionOpts = {
            CONNECTOR_TYPE: "rfcomm",
            DELIMITER: "\n",
            DEVICE_CHARSET: Platform.OS === "ios" ? 1536 : "utf-8",
        }
        try{
            let connected = await device.connect(conectionOpts)
            if(connected){
                props.props.navigation.navigate('Connect',{data})
            }
        }catch(err){
            console.log(err)
        }
    }

    const cancelScan = async () => {
        try{
            let cancelled = await RNBluetoothClassic.cancelDiscovery();
            console.log(cancelled);
        }catch(err){
            console.log(err)
        }
    }
    
    const connectToDevice = async (props) => {
        await cancelScan()
        let Devicedata = data.id
        let device = props.item.device;
        let isPaired = await checkbonded(Devicedata);
        if(!isPaired){
            pairing = await RNBluetoothClassic.pairDevice(Devicedata);
            if(pairing._nativeDevice.bonded == true){
                connectionToDevice(Devicedata,props,device)
            }else{
                console.log('pairing failed');
            }
        }else{
            connectionToDevice(Devicedata,props,device);
        }
    }

    return(
        <>
            <TouchableOpacity style={styles.wrapper} onPress={() => connectToDevice(props)}>
                <View style={styles.wrapperLeft}>
                    <Image style={styles.iconLeft} source={props.iconLeft}/>
                </View>
                <View style={styles.wrapperName}>
                    <Text style={FontStyles.paragraph}>{props.item.name}</Text>
                </View>
                <Image style={styles.iconRight} source={props.iconRight}/>
            </TouchableOpacity>
        </>
    )
}

const styles = StyleSheet.create({
    wrapper:{
        flexDirection:'row',
        alignItems:'center',
        padding:'2%',
        justifyContent:'space-between'
    },
    wrapperLeft:{
        width:60,
        height:60,
        borderRadius:30,
        borderWidth:1,
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center'
    },
    wrapperName:{

    },
    iconLeft:{
        width:30,
        height:20
    },
    iconRight:{
        width:30,
        height:30
    }
})

export default Device;