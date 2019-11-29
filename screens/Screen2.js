import React from 'react'
import {View, Text, Button, StyleSheet} from 'react-native'

const Screen2 = props => {
        return (
            <View style={styles.container}>
                <Text>Screen 2</Text>
                <Button title ="Go to Screen 1" onPress={() => props.navigation.navigate({routeName: 'Screen1'})} />
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

export default Screen2