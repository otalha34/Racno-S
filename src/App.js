import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import WelcomeScreen from './src/components/Authentication/WelcomeScreen';
import SignUpScreen from './src/components/Authentication/SignUpScreen';
import OTPVerificationScreen from './src/components/Authentication/OTPVerificationScreen';
import MapScreen from './src/components/Map/MapScreen';
import ItemDetailScreen from './src/components/Map/ItemDetailScreen';
import ProfileScreen from './src/components/Profile/ProfileScreen';
import EditProfileScreen from './src/components/Profile/EditProfileScreen';
import SearchBar from './src/components/SearchBar';
import ItemListingScreen from './src/components/ItemListingScreen';

const Stack = createStackNavigator();

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="WelcomeScreen">
                <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} options={{ headerShown: false }} />
                <Stack.Screen name="SignUpScreen" component={SignUpScreen} options={{ title: 'Sign Up' }} />
                <Stack.Screen name="OTPVerificationScreen" component={OTPVerificationScreen} options={{ title: 'OTP Verification' }} />
                <Stack.Screen
                    name="MapScreen"
                    component={MapScreen}
                    options={{
                        title: 'Map',
                        headerTitle: () => <SearchBar />,
                    }}
                />
                <Stack.Screen name="ItemDetailScreen" component={ItemDetailScreen} options={{ title: 'Item Detail' }} />
                <Stack.Screen name="ProfileScreen" component={ProfileScreen} options={{ title: 'Profile' }} />
                <Stack.Screen name="EditProfileScreen" component={EditProfileScreen} options={{ title: 'Edit Profile' }} />
                <Stack.Screen name="ItemListingScreen" component={ItemListingScreen} options={{ title: 'Item Listing' }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default App;
