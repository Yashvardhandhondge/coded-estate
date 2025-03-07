import React, { Component } from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';

export class Navbar extends Component {
  render() {
    return (
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.container}>
          <View style={styles.logoContainer}>
            <Image 
              source={require('../assets/Logo.png')} 
              style={styles.logo} 
            />
            <Image 
              source={require('../assets/images/Line.png')} 
              style={[styles.logo, { width: 2, marginHorizontal: 8 }]} 
            />
            <Image 
              source={require('../assets/images/Hotels.png')} 
              style={styles.logo} 
            />
          </View>
          <Feather name="menu" size={24} color="black" />
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: '#f8f8f8',
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 10,
    backgroundColor: '#f8f8f8',
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logo: {
    width: 100, 
    height: 30, 
    resizeMode: 'contain',
  },
  hotelsText: {
    fontSize: 24,
    fontWeight: 'normal',
    marginLeft: 5,
  },
});

export default Navbar;