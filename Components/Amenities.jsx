import React from 'react';
import { StatusBar, View, Text, StyleSheet, Image } from 'react-native';

const Amenities = () => {
    return (
        <View style={styles.container}>
        <Image style={styles.bgi} source={require('../assets/wallpaper-1.jpg')} />
        <StatusBar style="auto" />
      </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    bgi: {
      height: screen.height,
      width: screen.width
    }
  });

export default Amenities;
