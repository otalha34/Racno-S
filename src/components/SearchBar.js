// SearchBar.js

import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const SearchBar = ({ onSearch }) => {
    const [query, setQuery] = useState('');

    const handleSearch = () => {
        onSearch(query);
    };

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="Search for items..."
                value={query}
                onChangeText={setQuery}
                onSubmitEditing={handleSearch}
            />
            <TouchableOpacity style={styles.button} onPress={handleSearch}>
                <Ionicons name="search" size={24} color="white" />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderRadius: 10,
        paddingHorizontal: 10,
        marginVertical: 10,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    input: {
        flex: 1,
        paddingVertical: 12,
        fontSize: 16,
    },
    button: {
        backgroundColor: '#007bff',
        borderRadius: 10,
        padding: 10,
        marginLeft: 10,
    },
});

export default SearchBar;
