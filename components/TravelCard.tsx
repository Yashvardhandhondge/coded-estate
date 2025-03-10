import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput } from 'react-native';

const TravelCard = () => {
  const [location, setLocation] = useState('');
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [guests, setGuests] = useState('');

  const handleSearch = () => {
    console.log({
      location,
      checkIn,
      checkOut,
      guests
    });
  };

  return (
    <View style={styles.card}>
      {/* Location Section */}
      <View style={styles.section}>
        <Text style={styles.label}>LOCATION</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter destination"
          value={location}
          onChangeText={setLocation}
        />
      </View>

      <View style={styles.divider} />

      {/* Date Selection Section */}
      <View style={styles.dateContainer}>
        {/* Check In */}
        <View style={styles.dateSection}>
          <Text style={styles.label}>CHECK IN</Text>
          <TextInput
            style={styles.input}
            placeholder="DD MMM YYYY"
            value={checkIn}
            onChangeText={setCheckIn}
          />
        </View>

        {/* Dot Separator */}
        <View style={styles.dotContainer}>
          <View style={styles.dot} />
        </View>

        {/* Check Out */}
        <View style={styles.dateSection}>
          <Text style={styles.label}>CHECK OUT</Text>
          <TextInput
            style={styles.input}
            placeholder="DD MMM YYYY"
            value={checkOut}
            onChangeText={setCheckOut}
          />
        </View>
      </View>

      <View style={styles.divider} />

      {/* Guests Section */}
      <View style={styles.section}>
        <Text style={styles.label}>GUESTS</Text>
        <TextInput
          style={styles.input}
          placeholder="Rooms / Adults / Children"
          value={guests}
          onChangeText={setGuests}
        />
      </View>

      {/* Search Button */}
      <TouchableOpacity 
        style={styles.searchButton}
        onPress={handleSearch}
      >
        <Text style={styles.searchButtonText}>Search</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    borderRadius: 16,
    padding: 20,
    width: '90%',
    maxWidth: 400,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  section: {
    marginVertical: 10,
  },
  dateContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  dateSection: {
    flex: 1,
  },
  dotContainer: {
    width: 20,
    alignItems: 'center',
  },
  dot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#ccc',
  },
  label: {
    fontSize: 12,
    color: '#9e9e9e',
    marginBottom: 6,
  },
  input: {
    fontSize: 16,
    color: '#212121',
    padding: 0,
    height: 30,
  },
  divider: {
    height: 1,
    backgroundColor: '#f0f0f0',
    marginVertical: 10,
  },
  searchButton: {
    backgroundColor: '#7c4dff', // Purple color similar to the image
    borderRadius: 25,
    padding: 14,
    alignItems: 'center',
    marginTop: 10,
  },
  searchButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '500',
  },
});

export default TravelCard;