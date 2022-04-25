import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, SafeAreaView} from 'react-native';
import base64 from 'react-native-base64';
import FontStyles from '../../utils/fontsHelper';
import Toggle from '../../utils/toggler';
import RNBluetoothClassic, { BluetoothEventType, BluetoothDevice } from 'react-native-bluetooth-classic';

const TestDevice = (props) => {
    // console.log(props)
    let[Power, setPower] = useState(false);
    let[IndicatorLeft, setIndicatorLeft] = useState(false);
    let[IndicatorRight, setIndicatorRight] = useState(false);
    let[Headlamp, setHeadlamp] = useState(false);
    let[Buzzer, setBuzzer] = useState(false);

    const togglePower = value => {
        if(value){
            PowerOn(props);
        }else{
            PowerOff(props);
        }
    }

    const toggleIndicatorL = value => {
        if(value){
            IndicatorsLeftOn(props);
        }else{
            IndicatorsLeftOff(props);
        }
    }

    const toggleIndicatorR = value => {
        if(value){
            IndicatorsRightOn(props);
        }else{
            IndicatorsRightOff(props);
        }
    }

    const toggleHeadlamp = value => {
        if(value){
            HeadlampOn(props);
        }else{
            HeadlampOff(props);
        }
    }

    const toggleBuzzer = value => {
        if(value){
            BuzzerOn(props);
        }else{
            BuzzerOff(props);
        }
    }

    async function PowerOn(props){
        setPower(true);
        let val = Number(!Power);
        SendData(val,"Power",props)
    }

    async function PowerOff(props){
        setPower(false)
        let val = Number(!Power);
        SendData(val,"Power",props);
    }

    async function IndicatorsLeftOn(props){
        if(!Power){
            console.log("Power not on")
        }else{
            setIndicatorLeft(true);
            let val = Number(!IndicatorLeft);
            SendData(val,"IL",props);
        }
    }

    async function IndicatorsLeftOff(props){
        if(!Power){
            console.log("Power not on")
        }else{
            setIndicatorLeft(false);
            let val = Number(!IndicatorLeft);
            SendData(val,"IL",props);
        }
    }

    async function IndicatorsRightOn(props){
        if(!Power){
            console.log("Power not on")
        }else{
            setIndicatorRight(true);
            let val = Number(!IndicatorRight);
            SendData(val,"IR",props);
        }
    }

    async function IndicatorsRightOff(props){
        if(!Power){
            console.log("Power not on")
        }else{
            setIndicatorRight(false);
            let val = Number(!IndicatorRight);
            SendData(val,"IR",props);
        }
    }

    async function HeadlampOn(props){
        if(!Power){
            console.log("Power not on")
        }else{
            setHeadlamp(true);
            let val = Number(!Headlamp);
            SendData(val,"Headlamp",props);
        }
    }

    async function HeadlampOff(props){
        if(!Power){
            console.log("Power not on")
        }else{
            setHeadlamp(false);
            let val = Number(!Headlamp);
            SendData(val,"Headlamp",props);
        }
    }

    async function BuzzerOn(props){
        if(!Power){
            console.log("Power not on")
        }else{
            setBuzzer(true);
            let val = Number(!Buzzer);
            SendData(val,"Buzzer",props);
        }
    }

    async function BuzzerOff(props){
        if(!Power){
            console.log("Power not on")
        }else{
            setBuzzer(false);
            let val = Number(!Buzzer);
            SendData(val,"Buzzer",props);
        }
    }

    useEffect(() =>{
        // SendData(val)
    },[Power, IndicatorLeft, IndicatorRight, Headlamp, Buzzer]);

    const SendData = async (value,deviceComponent,props) => {
        let data;
        if(deviceComponent === "Power"){
            data = "Setting "+deviceComponent+" to state "+value+" ";
            // data={
            //     'Start':'0xFF',
            //     'index':'0x01',
            //     'id':'0x01',
            //     'Power':value,
            //     'END':'0xFF'
            // }
        }
        if(deviceComponent === "IL"){
            data = "setting "+deviceComponent+" to state "+value+" ";
        }
        if(deviceComponent === "IR"){
            data = "setting "+deviceComponent+" to state "+value+" ";
        }
        if(deviceComponent === "Headlamp"){
            data = "setting "+deviceComponent+" to state "+value+" ";
        }
        if(deviceComponent === "Buzzer"){
            data = "setting "+deviceComponent+" to state "+value+" ";
        }
        // -- for a JSON Object --
        // let encoded = JSON.stringify(data)
        // let encodedb64 = Buffer.from(encoded).toString("base64");
        // -- for a simple string --
        let encoded = base64.encode(data);
        // console.log(encodedb64);
        try{
            let connected = await RNBluetoothClassic.getConnectedDevice(props.data.id);
            if(connected){
                written = await connected.write(encoded,"base64");
            }
        }catch(err){
            console.log(err)
        }
    }

    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.dataContainers}>
                <Text style={FontStyles.paragraph}>Power :</Text>
                <Toggle value={Power} onValueChange={togglePower}/>
            </View>
            <View style={styles.dataContainers}>
                <Text style={FontStyles.paragraph}>Indicator(L) Status :</Text>
                <Toggle value={IndicatorLeft} onValueChange={toggleIndicatorL}/>
            </View>
            <View style={styles.dataContainers}>
                <Text style={FontStyles.paragraph}>Indicator(R) Status : </Text>
                <Toggle value={IndicatorRight} onValueChange={toggleIndicatorR}/>
            </View>
            <View style={styles.dataContainers}>
                <Text style={FontStyles.paragraph}>Headlamp status :</Text>
                <Toggle value={Headlamp} onValueChange={toggleHeadlamp}/>
            </View>
            <View style={styles.dataContainers}>
                <Text style={FontStyles.paragraph}>Buzzer : </Text>
                <Toggle value={Buzzer} onValueChange={toggleBuzzer}/>
            </View>
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