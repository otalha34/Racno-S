// src/components/Map/ItemDetailScreen.js

import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const ItemDetailScreen = ({ route, navigation }) => {
    const { itemId, itemName, itemDescription } = route.params;

    const handlePickUp = () => {
        console.log(`Picked up item with ID: ${itemId}`);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.itemName}>{itemName}</Text>
            <Text style={styles.itemDescription}>{itemDescription}</Text>
            <View style={styles.buttonContainer}>
                <Button title="Pick Up" onPress={handlePickUp} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    itemName: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    itemDescription: {
        fontSize: 16,
        marginBottom: 20,
    },
    buttonContainer: {
        marginTop: 20,
    },
});

export default ItemDetailScreen;
