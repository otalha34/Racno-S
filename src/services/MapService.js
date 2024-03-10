// src/services/MapService.js

import firestore from '@react-native-firebase/firestore';

const MapService = {
    // Function to place an item on the map
    placeItemOnMap: async (itemData) => {
        try {
            // Add the item data to Firestore collection named 'items'
            await firestore().collection('items').add(itemData);
        } catch (error) {
            throw error;
        }
    },

    // Function to retrieve all items from the map
    getAllItemsFromMap: async () => {
        try {
            const snapshot = await firestore().collection('items').get();
            const items = [];
            snapshot.forEach(doc => {
                items.push({ id: doc.id, ...doc.data() });
            });
            return items;
        } catch (error) {
            throw error;
        }
    },

    // Function to retrieve item details by ID
    getItemDetailsById: async (itemId) => {
        try {
            const snapshot = await firestore().collection('items').doc(itemId).get();
            if (snapshot.exists) {
                return { id: snapshot.id, ...snapshot.data() };
            } else {
                throw new Error('Item not found');
            }
        } catch (error) {
            throw error;
        }
    }
};

export default MapService;
