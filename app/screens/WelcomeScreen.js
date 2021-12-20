import React from 'react';
import { Image, ImageBackground, StyleSheet, View } from 'react-native';


import AppButton from '../components/AppButton';
import AppText from '../components/AppText';

function WelcomeScreen(props) {
    return (
        <ImageBackground 
            blurRadius={5}
            style={styles.background}
            source={require("../assets/background.jpg")}
            >
            <View style={styles.logoContainer}>
                <Image style={styles.logo} source={require("../assets/logo.png")} />
                <AppText>Join the community of innovations</AppText>
            </View>
            <View style={styles.buttonsContainer}>
                <AppButton title="Login" onPress={() => console.log("Login clicked")}></AppButton>
                <AppButton title="Register" color="secondary" onPress={() => console.log("Register clicked")}></AppButton> 
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1, // this image screen takes entire screen
        justifyContent: "flex-end",
        alignItems: "center"
    },
    buttonsContainer: {
        padding: 20,
        width: '100%'
    },
    logoContainer:{
        position:"absolute",
        top: 70,
        alignItems:'center'
    },
    logo:{
        width: 180,
        height: 180,
    },
    loginButton:{
        width: "100%",
        height: 70,
        backgroundColor: "#fc5c65",
        marginBottom: 50
    },
    
    resgisterButton:{
        width: "100%",
        height: 70,
        backgroundColor: "#4ecdcf",
        marginBottom: 50
    }
})

export default WelcomeScreen;