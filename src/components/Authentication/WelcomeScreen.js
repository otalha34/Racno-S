// src/components/Authentication/WelcomeScreen.js

import React from 'react';
import { View, Text, ImageBackground, StyleSheet, TouchableOpacity } from 'react-native';
import Swiper from 'react-native-swiper';

const WelcomeScreen = ({ navigation }) => {
    const handleGetStarted = () => {
        navigation.navigate('SignUpScreen');
    };

    return (
        <Swiper style={styles.wrapper} loop={false}>
            <View style={styles.slide}>
                <ImageBackground
                    source={require('../../assets/welcome_slide1.jpg')}
                    style={styles.background}
                    blurRadius={5}
                >
                    <View style={styles.container}>
                        <Text style={styles.title}>Welcome to Racno</Text>
                        <Text style={styles.subtitle}>Find hidden treasures around you</Text>
                    </View>
                </ImageBackground>
            </View>
            <View style={styles.slide}>
                <ImageBackground
                    source={require('../../assets/welcome_slide2.jpg')}
                    style={styles.background}
                    blurRadius={5}
                >
                    <View style={styles.container}>
                        <Text style={styles.title}>Join Us Now</Text>
                        <Text style={styles.subtitle}>Sign up to start discovering</Text>
                        <TouchableOpacity style={styles.getStartedButton} onPress={handleGetStarted}>
                            <Text style={styles.getStartedButtonText}>Get Started</Text>
                        </TouchableOpacity>
                    </View>
                </ImageBackground>
            </View>
        </Swiper>
    );
};

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
    },
    slide: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    background: {
        flex: 1,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    container: {
        alignItems: 'center',
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        color: '#FFFFFF',
        marginBottom: 20,
    },
    subtitle: {
        fontSize: 18,
        color: '#FFFFFF',
        textAlign: 'center',
        marginBottom: 40,
    },
    getStartedButton: {
        backgroundColor: '#FFFFFF',
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 25,
    },
    getStartedButtonText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#000000',
    },
});

export default WelcomeScreen;
