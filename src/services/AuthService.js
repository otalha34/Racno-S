// src/services/AuthService.js

import auth from '@react-native-firebase/auth';

const AuthService = {
    // Function to authenticate user with phone number
    authenticateWithPhoneNumber: async (phoneNumber) => {
        try {
            const confirmationResult = await auth().signInWithPhoneNumber(phoneNumber);
            return confirmationResult;
        } catch (error) {
            throw error;
        }
    },

    // Function to verify OTP
    verifyOTP: async (confirmationResult, otp) => {
        try {
            const userCredential = await confirmationResult.confirm(otp);
            return userCredential.user;
        } catch (error) {
            throw error;
        }
    },

    // Function to sign out user
    signOut: async () => {
        try {
            await auth().signOut();
        } catch (error) {
            throw error;
        }
    },

    // Function to get current user
    getCurrentUser: () => {
        return auth().currentUser;
    }
};

export default AuthService;
