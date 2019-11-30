import React,{Component} from 'react'
import MapView from 'react-native-maps'
import {View, SafeAreaView, Button} from 'react-native'

const Maps = props => {
    return (
            <SafeAreaView style={{flex:1}}>
            <Button title="Go to Home" onPress={()=> props.navigation.navigate('Screen1')}/>
            <MapView style={{paddingTop: 500}}
            region={{latitude: 42.882004, longitude: 74.582748, latitudeDelta: 0.0922, longitudeDelta: 0.0421}}
            showsUserLocation={true} />
            </SafeAreaView>
            )
          }

export default Maps