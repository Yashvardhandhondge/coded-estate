import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Svg, { Rect, Defs, LinearGradient, Stop } from 'react-native-svg';

const AnimatedText = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Travel With</Text>
      <View style={styles.row}>
        <View style={styles.textWrapper}>
          <Text style={styles.text}>Crypto</Text>
          <Svg
            style={styles.svg}
            width="100%"
            height="4"
            viewBox="0 0 100 4"
            preserveAspectRatio="none"
          >
            <Rect
              width="100%"
              height="4"
              fill="url(#paint0_linear)"
              fillOpacity="0.12"
            />
            <Defs>
              <LinearGradient
                id="paint0_linear"
                x1="101.689"
                y1="16"
                x2="107.865"
                y2="-22.8301"
                gradientUnits="userSpaceOnUse"
              >
                <Stop offset="0" stopColor="#6317F7" />
                <Stop offset="1" stopColor="#18FFFF" />
              </LinearGradient>
            </Defs>
          </Svg>
        </View>
        <Text style={styles.text}> And</Text>
      </View>
      <View style={[styles.textWrapper, styles.saveMoneyWrapper]}>
        <Text style={styles.text}>Save Money</Text>
        <View style={styles.svgContainer}>
          <Svg
            style={styles.svg}
            width="100%"
            height="4"
            viewBox="0 0 100 4"
            preserveAspectRatio="none"
          >
            <Rect
              width="100%"
              height="4"
              fill="url(#paint0_linear)"
              fillOpacity="0.12"
            />
            <Defs>
              <LinearGradient
                id="paint0_linear"
                x1="101.689"
                y1="16"
                x2="107.865"
                y2="-22.8301"
                gradientUnits="userSpaceOnUse"
              >
                <Stop offset="0" stopColor="#6317F7" />
                <Stop offset="1" stopColor="#18FFFF" />
              </LinearGradient>
            </Defs>
          </Svg>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    gap: 16,
    paddingVertical: 20,
    paddingHorizontal: 16,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textWrapper: {
    position: 'relative',
    alignSelf: 'flex-start',
  },
  saveMoneyWrapper: {
    alignSelf: 'center',
    position: 'relative',
  },
  svgContainer: {
    position: 'absolute',
    bottom: -4,
    left: 0,
    width: '100%',
  },
  text: {
    fontSize: 38,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  svg: {
    position: 'absolute',
    bottom: -4,
    left: 0,
    right: 0,
    height: 4,
  },
});

export default AnimatedText;
