import React from 'react'
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native'

import { useNavigation } from '@react-navigation/native'
import Feather from 'react-native-vector-icons/Feather'

export default function Login(){
    const navigation = useNavigation()

    return(
        <View style={styles.container}>
            <View style={styles.navArea}>
                <TouchableOpacity onPress={() => navigation.navigate('Welcome')}>
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
                <Text style={styles.title}>Registrar</Text>
                <View style={styles.inputArea}>
                    <Feather
                        name='user'
                        size={30}
                        color='#000'
                    />
                    <TextInput
                        style={styles.input}
                        placeholder='Digite seu nome de exibição'
                    />
                </View>
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
                <View style={styles.inputArea}>
                    <Feather
                        name='lock'
                        size={30}
                        color='#000'
                    />
                    <TextInput
                        style={styles.input}
                        placeholder='Digite sua senha'
                    />
                </View>
            </View>

            <View style={styles.buttons}>
               <TouchableOpacity style={styles.loginBtn} onPress={() => navigation.navigate('Home')}>
                    <Text style={styles.loginText}>Acessar</Text>
               </TouchableOpacity>
               <View style={styles.registerArea}>
                    <Text style={styles.registerText}>Já possui uma conta?</Text>
                    <TouchableOpacity style={{marginLeft:'2%'}} onPress={() => navigation.navigate('Login')}>
                        <Text style={[styles.registerText, styles.registerBtnText]}>Faça o login!</Text>
                    </TouchableOpacity>
                </View>
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
        flex:1,
        justifyContent:'space-between',
    },
    title:{
        color:'#000',
        fontWeight:'bold',
        fontSize:40
    },
    inputArea:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        marginBottom:'5%'
    },
    input:{
        color:'#000',
        width:'90%',
        borderBottomWidth: 1,
        borderColor: '#000',
    },
    forgotText:{
        color:'#656565',
        fontWeight:'300',
        alignSelf:'flex-end'
    },
    buttons:{
        flex:1,
        width:'100%',
        justifyContent:'space-evenly',
        alignItems:'center',
    },
    loginBtn:{
        width:'100%',
        backgroundColor:'#1f3e47',
        height:50,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:50
    },
    loginText:{
        color:'#fff',
        fontSize:16,
        fontWeight:'700'
    },
    registerArea:{
        flexDirection:'row',
    },
    registerText:{
        fontSize:16,
        color:'#000'
    },
    registerBtn:{

    },
    registerBtnText:{
        fontWeight:'bold',
        textDecorationLine:'underline'
    }
})