// src/components/Profile/EditProfileScreen.js

import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';

const EditProfileScreen = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');

    const handleSaveChanges = () => {
        saveProfileChanges(username, email);
    };

    const saveProfileChanges = async (username, email) => {
        try {
            const response = await fetch('https://example.com/api/profile', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    username: username,
                    email: email,
                }),
            });

            if (!response.ok) {
                throw new Error('Failed to save profile changes');
            }

            Alert.alert('Success', 'Profile changes saved successfully');
        } catch (error) {
            Alert.alert('Error', error.message);
        }
    };

    return (
        <View>
            <Text>Edit Profile</Text>
            <TextInput
                placeholder="Username"
                value={username}
                onChangeText={setUsername}
            />
            <TextInput
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
            />
            <Button title="Save Changes" onPress={handleSaveChanges} />
        </View>
    );
};

export default EditProfileScreen;
