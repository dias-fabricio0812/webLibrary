import React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'

import { useNavigation } from '@react-navigation/native'
import Feather from 'react-native-vector-icons/Feather'

export default function Home(){
    const navigation = useNavigation()
    
    return(
        <View style={styles.container}>
            <View style={styles.logoArea}>
                <Image
                    source={require('../../images/logo.png')}
                />
                <Text style={styles.appName}>WEB LIBRARY</Text>
                <Text style={styles.title}>Vamos Começar?</Text>
            </View>

            <View style={styles.buttonsArea}>
                <Text style={styles.text}>Faça login com</Text>

                <TouchableOpacity style={styles.loginBtn} onPress={() => navigation.navigate('Login')}>
                    <Feather
                        name = 'mail'
                        size={40}
                        color='#fff'
                    />
                    <Text style={styles.loginText}>E-mail</Text>
                </TouchableOpacity>

                <Text style={styles.text}>Ou</Text>

                <TouchableOpacity style={[styles.loginBtn, styles.googleBtn]}>
                    <Image
                        source={require('../../images/google.png')}
                        style={styles.googleIcon}
                    />
                    <Text style={[styles.loginText, styles.googleText]}>Entrar com o Google</Text>
                </TouchableOpacity>

                <View style={styles.registerArea}>
                    <Text style={styles.registerText}>Ainda não possui uma conta?</Text>
                    <TouchableOpacity style={{marginLeft:'2%'}} onPress={() => navigation.navigate('Register')}>
                        <Text style={[styles.registerText, styles.registerBtnText]}>Cadastre-se</Text>
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
        padding:'10%',
        backgroundColor: '#F8FFE8'
    },
    logoArea:{
        flex:1,
        width:'100%',
        justifyContent:'space-between',
        alignItems:'center', 
    },
    appName:{
        fontSize: 40,
        fontWeight:'bold',
        color:'#000'
    },
    title:{
        fontSize: 24,
        fontWeight:'bold',
        color:'#000'
    },
    buttonsArea:{
        flex:1,
        width:'100%',
        justifyContent:'space-evenly',
        alignItems:'center',
        marginTop:'10%',
        paddingVertical:'5%',
    },
    text:{
        fontSize:14,
        color:'#656565'
    },
    loginBtn:{
        width:'100%',
        height:50,
        backgroundColor:'#1f3e48',
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:50
    },
    loginText:{
        color: '#fff',
        fontWeight:'700',
        fontSize:16,
        marginLeft:'4%'
    },
    googleBtn:{
        backgroundColor:'#b8b8b8',
    },
    googleIcon:{
        width:35,
        height:35
    },
    googleText:{
        color: '#000',
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