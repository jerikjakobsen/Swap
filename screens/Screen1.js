import React from 'react'
import {View, Text, StyleSheet, Button} from 'react-native'
import MapView from 'react-native-maps'

const Screen1 = props => {
        return (
            <View style={styles.container}>
                <Text>Screen 1</Text>
                <Button title="Go to Maps" onPress={() => props.navigation.navigate({routeName: 'Maps'})}/>
            </View>
        )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default Screen1