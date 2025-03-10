import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import AnimatedText from './AnimatedText';
import TravelCard from './TravelCard';

const Landingpage = () => {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        {/* <Text style={styles.title}>Travel With</Text> */}
        <AnimatedText />
        
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  titleContainer: {
    alignItems: 'center',
    paddingVertical: 24,
    width: '100%',
  },
  title: {
    fontSize: 38,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default Landingpage;