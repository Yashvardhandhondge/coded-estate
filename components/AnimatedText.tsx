import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Svg, { Rect, Defs, LinearGradient, Stop } from 'react-native-svg';

const AnimatedText = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Unlock Real Estate <Text style={styles.hiddenText}>&</Text>
      </Text>
      <Text style={styles.text}>
        <Text style={styles.inlineText}>&</Text> RWA on the{' '}
        <Text style={styles.animatedText}>
          Blockchain
          <Svg
            style={styles.svg}
            width="352"
            height="32"
            viewBox="0 0 352 32"
            fill="none"
          >
            <Rect
              width="352"
              height="32"
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
        </Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  } as const,
  text: {
    fontSize: 30,
    textAlign: 'center',
  },
  hiddenText: {
    display: 'none',
  },
  inlineText: {
  },
  animatedText: {
    position: 'relative',
  },
  svg: {
    position: 'absolute',
    top: 24,
    left: 0,
    height: 16,
    width: '100%',
  },
});

export default AnimatedText;
