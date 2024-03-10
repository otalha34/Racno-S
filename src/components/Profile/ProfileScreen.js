// src/components/Profile/ProfileScreen.js

import React from 'react';
import { View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const ProfileScreen = () => {
    const navigation = useNavigation();

    // Sample profile information
    const userProfile = {
        username: 'JohnDoe',
        email: 'johndoe@example.com',
        profilePhoto: require('./profile.jpg'), // Placeholder for profile photo
        // Add more profile information as needed
    };

    const handleEditProfile = () => {
        // Navigate to the edit profile screen
        navigation.navigate('EditProfile');
    };

    const handleLogout = () => {
        // Add logic to handle logout
        // For example, clear user session, navigate to the login screen, etc.
        // Here's a sample navigation to the login screen:
        navigation.navigate('Login');
    };

    return (
        <View>
            <Text>Profile Screen</Text>
            <View>
                <Text>Username: {userProfile.username}</Text>
                <Text>Email: {userProfile.email}</Text>
                {/* Add profile photo */}
                <Button title="Edit Profile" onPress={handleEditProfile} />
                <Button title="Logout" onPress={handleLogout} />
            </View>
        </View>
    );
};

export default ProfileScreen;
