import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import AnimatedText from './AnimatedText';

const Landingpage = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Travel With Crypto and Save Money
      </Text>
      <AnimatedText />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
});

export default Landingpage;