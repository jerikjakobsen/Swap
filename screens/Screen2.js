import React from 'react'
import {View, Text, Button, StyleSheet, TextInput} from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

const Screen2 = props => {
        return (
            <View style={styles.container}>
                <TextInput style={{width: 120, height: 90}} placeholder="Email" />
                <TextInput style={{width: 120, height: 90}} placeholder="Password" />
                <Button title ="Sign In" onPress={()=> props.navigation.navigate("Screen1")}/>
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