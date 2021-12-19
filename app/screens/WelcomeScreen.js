import React from 'react';
import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native';

function WelcomeScreen(props) {
    return (
        <ImageBackground 
            style={styles.background}
            source={require("../assets/background.jpg")}
            >
        <View style={styles.logoContainer}>
            <Image style={styles.logo} source={require("../assets/logo-red.png")} />  
            <Text>Join the community of innovations</Text>   
        </View>  
        <View style={styles.loginButton}></View>
        <View style={styles.resgisterButton}></View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1, // this image screen takes entire screen
        justifyContent: "flex-end",
        alignItems: "center"
    },
    loginButton:{
        width: "100%",
        height: 70,
        backgroundColor: "#fc5c65"
    },

    logoContainer:{
        position:"absolute",
        top: 70,
        alignItems:'center'
    },
    logo:{
        width: 100,
        height: 100,
    },
    
    resgisterButton:{
        width: "100%",
        height: 70,
        backgroundColor: "#4ecdcf"
    }
})

export default WelcomeScreen;