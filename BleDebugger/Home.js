import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import FontStyles from './src/utils/fontsHelper';
import colorSheet from './src/utils/colors';

const Home = (props) => {
    return(
        <View style={[styles.container,colorSheet.mainBg]}>
            <Text style={[styles.header,FontStyles.heading,colorSheet.texts]}>A Simple Bluetooth Debugger App</Text>
            <Image source={require('./src/assets/images/de.png')} />
            <TouchableOpacity style={styles.button} onPress={() => props.navigation.navigate('Scanner')}>
                <Text style={colorSheet.texts}>Scan for Bluetooth Devices</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems: 'center', 
        justifyContent: 'center' 
    },
    header:{
        textAlign:'center',
        paddingBottom:'15%'
    },
    button:{
        padding:'5%',
        borderWidth:1,
        borderRadius:25,
        borderColor:'#0000A0'
    }
})

export default Home;