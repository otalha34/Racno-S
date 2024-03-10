// src/components/Authentication/PhoneInputScreen.js

import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';
import { signInWithPhoneNumber } from '../../services/AuthService';

const PhoneInputScreen = ({ navigation }) => {
    const [phoneNumber, setPhoneNumber] = useState('');

    const handleContinue = async () => {
        try {
            const confirmation = await signInWithPhoneNumber(phoneNumber);
            navigation.navigate('OTPVerification', { confirmation });
        } catch (error) {
            console.error('Error:', error);
            // Handle error (display error message)
        }
    };

    return (
        <View>
            <TextInput
                placeholder="Enter your phone number"
                value={phoneNumber}
                onChangeText={setPhoneNumber}
            />
            <Button title="Continue" onPress={handleContinue} />
        </View>
    );
};

export default PhoneInputScreen;
