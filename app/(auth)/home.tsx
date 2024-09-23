import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { useUser } from '@clerk/clerk-expo';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { Input } from 'react-native-elements';

const Home = () => {
  const { user } = useUser();
  const [pickupLocation, setPickupLocation] = useState('');
  const [rideModes] = useState([
    { id: '1', title: 'Car' },
    { id: '2', title: 'Bike' },
    { id: '3', title: 'Package Delivery' },
  ]);

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Text style={{ marginBottom: 10 }}>
        Welcome, {user?.emailAddresses[0].emailAddress} 🎉
      </Text>

      {/* Google Places Autocomplete for Pickup Location */}
      <GooglePlacesAutocomplete
        placeholder="Enter Pickup Location"
        onPress={(data, details = null) => {
          setPickupLocation(data.description);
        }}
        query={{
          key: 'YOUR_GOOGLE_API_KEY',
          language: 'en',
        }}
        styles={{
          textInput: {
            height: 40,
            color: '#5d5d5d',
            fontSize: 16,
          },
        }}
      />

      {/* Available Ride Modes */}
      <Text style={{ marginVertical: 10 }}>Select Ride Mode:</Text>
      <FlatList
        data={rideModes}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={{
              padding: 15,
              backgroundColor: '#f2f2f2',
              marginVertical: 5,
              borderRadius: 5,
            }}
          >
            <Text>{item.title}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default Home;
