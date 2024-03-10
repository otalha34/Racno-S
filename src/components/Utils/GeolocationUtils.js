// src/utils/GeolocationUtils.js

import Geolocation from '@react-native-community/geolocation';

const GeolocationUtils = {
    // Function to get the user's current location
    getCurrentLocation: () => {
        return new Promise((resolve, reject) => {
            Geolocation.getCurrentPosition(
                position => {
                    const { latitude, longitude } = position.coords;
                    resolve({ latitude, longitude });
                },
                error => {
                    reject(error);
                },
                { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
            );
        });
    },

    // Function to watch for changes in user's location
    watchLocation: (successCallback, errorCallback) => {
        return Geolocation.watchPosition(
            position => {
                const { latitude, longitude } = position.coords;
                successCallback({ latitude, longitude });
            },
            error => {
                errorCallback(error);
            },
            { enableHighAccuracy: true, distanceFilter: 10 }
        );
    },

    // Function to clear the geolocation watcher
    clearWatch: (watchId) => {
        Geolocation.clearWatch(watchId);
    }
};

export default GeolocationUtils;
