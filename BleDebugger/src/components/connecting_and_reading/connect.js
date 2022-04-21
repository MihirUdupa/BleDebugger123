import React, {useState} from 'react';
import {View, Text, SafeAreaView, StyleSheet, TouchableOpacity} from 'react-native';
import Header from '../../utils/header';
import Subtitle from '../../utils/subtitle';
import Actionindicator from './actionIndicator';

const Connect = (props) => {
    const [action, setAction] = useState(null);
    const [screen, setScreen] = useState(null);
    let data = {
        'action':action
    }
    return(
        <SafeAreaView style={styles.container}>
            <Header title='Connected to Device'/>
            <Subtitle subTitle = "select an option"/>
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button} onPress={() => {setAction("Read Data"), setScreen("Read")}}>
                    <Text>Read Data</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => {setAction("One time configuration"), setScreen("Config")}}>
                    <Text>One Time configuration</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => {setAction("Test Components"), setScreen("Test")}}>
                    <Text>Test Components</Text>
                </TouchableOpacity>
            </View>
            <Actionindicator action={data} screen={screen}/>
            <View style={styles.footer}>
                <TouchableOpacity style={styles.footerButton}>
                    <Text>Terminate Connection</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1
    },
    buttonContainer:{
        flexDirection:'row',
        flex:0.1,
        justifyContent:'space-between',
        padding:'1%',
        alignItems:'center',
    },
    button:{
        borderWidth:1,
        padding:'1%',
        borderRadius:5,
        justifyContent:'center',
        alignItems:'center',
    },
    footer:{
        flex:0.1,
        alignContent:'center',
        alignItems:'center',
        paddingTop:'3%'
    },
    footerButton:{
        padding:'3%',
        borderWidth:1,
        borderRadius:15
    }
})

export default Connect;