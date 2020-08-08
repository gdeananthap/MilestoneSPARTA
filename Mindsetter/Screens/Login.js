import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Image, TextInput, TouchableOpacity} from 'react-native';


export default class Login extends Component {
    render() {
        return(
            <View style={styles.container}> 
                <Image style={{width:100,height:140}}
                    source={require('../assets/Logo.png')}/>
                <Text style={styles.logoText}>Welcome to MindSetter</Text>
                <TextInput style={styles.inputBox} 
                    underlineColorAndroid={'transparent'} 
                    placeholder="Email"
                    placeholderTextColor = '#155F69'   
                    /> 
                <TextInput style={styles.inputBox} 
                    underlineColorAndroid='rgba(0,0,0,0)' 
                    placeholder="Password"
                    placeholderTextColor = '#155F69'
                    secureTextEntry={true} 
                    /> 
                <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('HomeArticle')}>
                    <Text style={styles.buttonText}>Log in</Text>
                </TouchableOpacity>
                <Text style={styles.add}>Don`t have an account?</Text>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Register')}>
                    <Text style={styles.signUp} >Sign Up</Text>
                </TouchableOpacity>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#2C94A6',
      alignItems: 'center',
      justifyContent: 'center',
    },
    logoText : {
        marginVertical: 10,
        fontSize:30,
        color:'rgba(255, 255, 255, 1)',
        paddingTop: 10,
        fontWeight: 'bold',
        textAlign:'center'
    },
    inputBox: {
        width: 300,
        backgroundColor:'#40B8CD',
        borderRadius: 20,
        paddingVertical: 14,
        paddingHorizontal: 16,
        fontSize:16,
        fontWeight: 'bold',
        marginVertical: 10
    },
    button: {
        width: 300,
        backgroundColor: 'rgba(255, 178, 65, 1)',
        borderRadius: 20,
        marginVertical: 10,
        paddingVertical: 12
    },
    buttonText: {
        fontSize:25,
        fontWeight: 'bold',
        color: '#ffffff',
        textAlign: 'center'
    },
    signUp: {
        color: '#F9AC40',
        fontWeight: 'bold'
    },
    add: {
       color: '#ffffff',
       fontWeight: 'bold' 
    }    
  });