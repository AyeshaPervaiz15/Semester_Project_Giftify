import React, { useEffect } from 'react';
import { View, Image, StyleSheet, Dimensions } from 'react-native';

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate('Login'); // Navigate to the Home screen after 5 seconds
    }, 2000);

    return () => clearTimeout(timer); // Clear the timer when the component unmounts
  }, [navigation]);

  const screenWidth = Dimensions.get('window').width;
  const screenHeight = Dimensions.get('window').height;

  return (
    <View style={[styles.container, { width: screenWidth, height: screenHeight }]}>
      <Image
        source={require('./assets/splash.png')} // Path to your splash image
        resizeMode="cover"
        style={styles.logo}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'orange',
  },
  logo: {
    width: '100%',
    height: '100%',
  },
});

export default SplashScreen;
