import React from 'react'
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native'

import { useNavigation } from '@react-navigation/native'
import Feather from 'react-native-vector-icons/Feather'

export default function Login(){
    const navigation = useNavigation()

    return(
        <View style={styles.container}>
            <View style={styles.navArea}>
                <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                    <Feather
                        name='chevron-left'
                        size={70}
                        color='#000'
                    />
                </TouchableOpacity>

                <Image
                source={require('../../images/logo.png')}
                style={styles.logo}
                />

                <View style={{flex:1}}></View>
            </View>

            <View style={styles.inputs}>
                <Text style={styles.title}>Recuperação de senha</Text>
                <Text style={styles.subtitle}>Coloque seu e-mail</Text>
                <View style={styles.inputArea}>
                    <Feather
                        name='at-sign'
                        size={30}
                        color='#000'
                    />
                    <TextInput
                        style={styles.input}
                        placeholder='Digite seu e-mail'
                    />
                </View>
                <Text style={styles.text}>
                  Iremos enviar um e-mail contendo instruções para o seu correio eletrônico. Caso o e-mail não chegue, verifique sua caixa de spam ou lixo eletrônico.
                </Text>
            </View>
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
    },
    navArea:{
        flex:1,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        marginTop:'10%',
    },
    logo:{
        width:100,
        height:100,
        position:'absolute',
        top: '50%',
        left: '50%',
        transform: [{ translateX: -50 }, { translateY: -50 }],
    },
    inputs:{
        width:'100%',
        flex:2,
        justifyContent:'flex-start',
    },
    title:{
        color:'#000',
        fontWeight:'bold',
        fontSize:28,
        alignSelf:'center'
    },
    subtitle:{
      color:'#000',
      fontWeight:'500',
      fontSize:24,
      marginTop:'10%'
    },
    inputArea:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    },
    input:{
        color:'#000',
        width:'90%',
        borderBottomWidth: 1,
        borderColor: '#000',
    },
    text:{
      color:'#000',
      textAlign:'center',
      marginTop:'10%',
      fontSize:14,
    }
})