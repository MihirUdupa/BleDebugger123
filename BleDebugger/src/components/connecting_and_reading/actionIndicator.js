import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import FontStyles from '../../utils/fontsHelper';
import TestDevice from './test';
import Readdata from './readData';

const read = (props) => {
    let data = {
        'id':props.id,
        'name':props.name
    }
    return(
        <>
            <View style={[styles.container, FontStyles.paragraph]}>
                <Text>The Selected action is : {props.action}</Text>
            </View>
            <View style={styles.readDataContainer}>
                <Readdata data={data}/>
            </View>
        </>
    )
}

const Config = (props) => {
    let data = {
        'id':props.id,
        'name':props.name
    }
    return(
        <>
            <View style={[styles.container, FontStyles.paragraph]}>
                <Text>The Selected action is : {props.action}</Text>
            </View>
            <View style={styles.configDataContainer}>
                {/* <TestDevice data={data}/> */}
            </View>
        </>
    )
}

const Testdevice = (props) => {
    let data = {
        'id':props.id,
        'name':props.name
    }
    return(
        <>
            <View style={[styles.container, FontStyles.paragraph]}>
                <Text>The Selected action is : {props.action}</Text>
            </View>
            <View style={styles.configDataContainer}>
                <TestDevice data={data}/>
            </View>
        </>
    )
}

const defaultData = () => {
    return(
        <>
            <View style={[styles.container, FontStyles.paragraph]}>
                <Text>The Selected action is :</Text>
            </View>
            <View style={styles.defaultDataContainer}>

            </View>
        </>
    )
}

const Actionindicator = (props) => {
    if(props.screen == 'Test'){
        return (Testdevice(props.action));
   } else if(props.screen == 'Read'){
       return (read(props.action));
   } else if(props.screen == 'Config'){
       return (Config(props.action));
   }else{
       return (defaultData());
   }
}

const styles=StyleSheet.create({
    container:{
        padding:'2%'
    },
    terminalContainer:{
        flex:0.8,
        padding:'5%',
    },
    readDataContainer:{
        flex:0.8,
        padding:'2%'
    },
    configDataContainer:{
        flex:0.8,
        padding:'2%'
    },
    defaultDataContainer:{
        flex:0.8,
        padding:'5%'
    }
})

export default Actionindicator;