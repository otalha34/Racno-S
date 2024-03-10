// src/navigation/AppNavigator.js

import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import PhoneInputScreen from '../components/Authentication/PhoneInputScreen';
import OTPVerificationScreen from '../components/Authentication/OTPVerificationScreen';
import MapScreen from '../components/Map/MapScreen';
import ItemDetailScreen from '../components/Map/ItemDetailScreen';
import ProfileScreen from '../components/Profile/ProfileScreen';
import EditProfileScreen from '../components/Profile/EditProfileScreen';
import ChatScreen from '../components/Chat/ChatScreen';

const Stack = createStackNavigator();

const AppNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="PhoneInput">
                <Stack.Screen name="PhoneInput" component={PhoneInputScreen} />
                <Stack.Screen name="OTPVerification" component={OTPVerificationScreen} />
                <Stack.Screen name="Map" component={MapScreen} />
                <Stack.Screen name="ItemDetail" component={ItemDetailScreen} />
                <Stack.Screen name="Profile" component={ProfileScreen} />
                <Stack.Screen name="EditProfile" component={EditProfileScreen} />
                <Stack.Screen name="Chat" component={ChatScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default AppNavigator;
