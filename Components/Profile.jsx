import React from 'react';
import { StatusBar, View, Text, StyleSheet, Image } from 'react-native';


const Profile = () => {
    return (
        <View style={styles.container}>
        <Image style={styles.bgi} source={require('../assets/wallpaper-3.jpg')} />
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

export default Profile;