// app/underdevelopment.tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const UnderDevelopment = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>The app is still under development</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    color: '#333',
  },
});

export default UnderDevelopment;
