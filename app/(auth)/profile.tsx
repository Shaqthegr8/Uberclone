import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useUser } from '@clerk/clerk-expo';
import { useRouter } from 'expo-router'; // useRouter for navigation

const Profile = () => {
  const { user } = useUser();
  const [firstName, setFirstName] = useState(user.firstName);
  const [lastName, setLastName] = useState(user.lastName);
  const router = useRouter(); // Initialize the router
  const [loading, setLoading] = useState(false);

  const navigateToDevelopmentPage = () => {
    router.push('/Underdevelopment'); // Navigate to the UnderDevelopment page
  };

  

  return (
    <View style={styles.container}>
      <Text style={{ textAlign: 'center' }}>
        Good morning {user.firstName} {user.lastName}!
      </Text>

      {/* Navigation Buttons */}
      <TouchableOpacity onPress={navigateToDevelopmentPage} style={styles.button}>
        <Text style={styles.buttonText}>My Account</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={navigateToDevelopmentPage} style={styles.button}>
        <Text style={styles.buttonText}>Make Payment</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={navigateToDevelopmentPage} style={styles.button}>
        <Text style={styles.buttonText}>Activity</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={navigateToDevelopmentPage} style={styles.button}>
        <Text style={styles.buttonText}>Settings</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={navigateToDevelopmentPage} style={styles.button}>
        <Text style={styles.buttonText}>Earn by Driving or Delivering</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 40,
  },
  button: {
    backgroundColor: '#6c47ff',
    padding: 15,
    marginVertical: 8,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 16,
  },
});

export default Profile;
