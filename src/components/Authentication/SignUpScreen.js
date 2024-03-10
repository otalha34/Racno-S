// src/components/Authentication/SignUpScreen.js

import React from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const SignUpScreen = ({ navigation }) => {
    const handleSignUp = () => {
        // Implement sign up logic
        navigation.navigate('OTPVerificationScreen');
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Sign Up</Text>
            <TextInput style={styles.input} placeholder="Enter your phone number" keyboardType="phone-pad" />
            <Button title="Sign Up" onPress={handleSignUp} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    input: {
        width: '100%',
        borderWidth: 1,
        borderColor: '#CCCCCC',
        borderRadius: 5,
        paddingHorizontal: 10,
        marginBottom: 20,
    },
});

export default SignUpScreen;
