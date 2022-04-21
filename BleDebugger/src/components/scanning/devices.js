import React, {useState} from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Modal} from 'react-native';
import FontStyles from '../../utils/fontsHelper';


const startScanner = () => {
    const [modalVisible, setModalVisible] = useState(false);
    return(
        <View>
        </View>
    )
}

const Device = (props) => {
    return(
        <>
            <TouchableOpacity style={styles.wrapper} onPress={() => props.props.navigation.navigate('Connect')}>
                <View style={styles.wrapperLeft}>
                    <Image style={styles.iconLeft} source={props.iconLeft}/>
                </View>
                <View style={styles.wrapperName}>
                    <Text style={FontStyles.paragraph}>{props.name}</Text>
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