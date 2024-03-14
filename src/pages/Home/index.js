import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

import { useNavigation } from '@react-navigation/native'
import Feather from 'react-native-vector-icons/Feather'

export default function Register(){
    const navigation = useNavigation()

    return(
        <View style={styles.container}>
            <Text>Tela Home</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'space-between',
        alignItems:'center',
        paddingHorizontal:'10%',
        backgroundColor: '#F8FFE8'
    }
})