import React from 'react'
import {View, Text, StyleSheet, Button} from 'react-native'

const Screen1 = props => {
        return (
            <View style={styles.container}>
                <Text>Screen 1</Text>
                <Button title="Go to Screen 2" onPress={() => props.navigation.navigate({routeName: 'Screen2'})}/>
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