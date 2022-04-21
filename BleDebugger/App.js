/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from "react";
import {View, Text, StyleSheet, SafeAreaView, StatusBar} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from "./Home";
import ScannerScreen from "./src/components/scanning/list";
import ConnectScreen from "./src/components/connecting_and_reading/connect";

const Stack = createNativeStackNavigator();

const App = () => {
  return(
    <NavigationContainer style={styles.container}>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen}/>
        <Stack.Screen name="Scanner" component={ScannerScreen} />
        <Stack.Screen name="Connect" component={ConnectScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container:{
    
  }
})

export default App;