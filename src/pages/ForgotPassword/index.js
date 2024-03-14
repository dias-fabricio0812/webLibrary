import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default function ForgotPassword(){
    return(
        <View style={styles.container}>
            <Text>Recuperação de senha</Text>
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