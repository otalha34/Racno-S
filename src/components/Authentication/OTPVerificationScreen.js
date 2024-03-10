// src/components/Authentication/OTPVerificationScreen.js

import React from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';

const OTPVerificationScreen = ({ navigation }) => {
    const handleVerifyOTP = () => {
        // Implement OTP verification logic
        navigation.navigate('MapScreen');
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>OTP Verification</Text>
            <Text style={styles.subtitle}>Enter the OTP sent to your phone</Text>
            <TextInput style={styles.input} placeholder="OTP" keyboardType="number-pad" />
            <Button title="Verify OTP" onPress={handleVerifyOTP} />
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
        marginBottom: 10,
    },
    subtitle: {
        fontSize: 16,
        marginBottom: 20,
    },
    input: {
        width: '100%',
        borderWidth: 1,
        borderColor: '#CCCCCC',
        borderRadius: 5,
        padding: 10,
        marginBottom: 20,
    },
});

export default OTPVerificationScreen;
