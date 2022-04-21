import React, {useState} from 'react';
import {View, StyleSheet, Text, SafeAreaView, FlatList} from 'react-native';
import Header from '../../utils/header';
import Toggle from './toggle';
import Device from './devices';
import Empty from './empty';

const Scanner = (props) =>{
    const [bolEnable, setBolEnable] = useState(false);
    const listData = ['mihir']
    const renderEmpty = () => <Empty text='No Devices Available'/>
    const renderItem = (item) => {
        return <Device {...item} iconLeft={require('../../assets/images/ic_laptop.png')} iconRight={require('../../assets/images/ic_settings.png')} props={props}/>
    }

    const toggleBluetooth = value =>{
        if(value){
            return enableBluetooth();
        }
        disableBluetooth();
    }

    const enableBluetooth = () => {
        setBolEnable(true);
        return(
            <Text>Bluetooth Enabled</Text>
        )
    }

    const disableBluetooth = () => {
        setBolEnable(false);
        return(
            <Text>Bluetooth Disabled</Text>
        )
    }

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