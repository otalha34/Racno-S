// MapScreen.js

import React, { useEffect, useState } from 'react';
import { View, Text, Button } from 'react-native';
import GeolocationUtils from '../../utils/GeolocationUtils';
import MapView, { Marker } from 'react-native-maps';
import MapService from '../../services/MapService';
import SearchBar from '../SearchBar';

const MapScreen = () => {
    const [userLocation, setUserLocation] = useState(null);
    const [items, setItems] = useState([]);
    const [filteredItems, setFilteredItems] = useState([]);

    useEffect(() => {
        GeolocationUtils.getCurrentLocation()
            .then(location => setUserLocation(location))
            .catch(error => console.error('Error getting user location:', error));

        MapService.getAllItemsFromMap()
            .then(items => {
                setItems(items);
                setFilteredItems(items); // Initialize filtered items with all items
            })
            .catch(error => console.error('Error fetching items:', error));
    }, []);

    const handlePickUpItem = (itemId) => {
        console.log('Picked up item with ID:', itemId);
    };

    const handleSearch = (query) => {
        const filtered = items.filter(item => {
            // Match against item name and description
            const nameMatch = item.name.toLowerCase().includes(query.toLowerCase());
            const descriptionMatch = item.description.toLowerCase().includes(query.toLowerCase());

            return nameMatch || descriptionMatch;
        });
        setFilteredItems(filtered);
    };

    return (
        <View style={{ flex: 1 }}>
            <SearchBar onSearch={handleSearch} /> {/* Display search bar */}
            {userLocation && (
                <MapView
                    style={{ flex: 1 }}
                    initialRegion={{
                        latitude: userLocation.latitude,
                        longitude: userLocation.longitude,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421,
                    }}
                >
                    {filteredItems.map(item => ({/* Display filtered items */ }
                        < Marker
                            key = { item.id }
                            coordinate = {{ latitude: item.latitude, longitude: item.longitude }}
                    title={item.name}
                    description={item.description}
                        >
                    {userLocation &&
                        GeolocationUtils.calculateDistance(userLocation.latitude, userLocation.longitude, item.latitude, item.longitude) <= 20 && (
                            <View>
                                <Button title="Pick Up" onPress={() => handlePickUpItem(item.id)} />
                            </View>
                        )}
                </Marker>
            ))}
        </MapView>
    )
}
        </View >
    );
};

export default MapScreen;
