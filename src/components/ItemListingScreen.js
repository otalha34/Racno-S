import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Highlighter from 'react-native-highlight-words';

const ItemListingScreen = ({ items, searchQuery }) => {
    return (
        <View style={styles.container}>
            {items.map(item => (
                <View key={item.id} style={styles.itemContainer}>
                    <Highlighter
                        highlightStyle={styles.highlight}
                        searchWords={[searchQuery]}
                        textToHighlight={item.name}
                    />
                    <Text>{item.description}</Text>
                    {/* Add other item details as needed */}
                </View>
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
    },
    itemContainer: {
        marginBottom: 20,
    },
    highlight: {
        fontWeight: 'bold',
        backgroundColor: 'yellow',
    },
});

export default ItemListingScreen;
