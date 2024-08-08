import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AccessCard from './Components/AccessCard';
import Amenities from './Components/Amenities';
import Home from './Components/Home';
import Profile from './Components/Profile';
import { View, Text, Image, StyleSheet } from 'react-native';
import Entypo from '@expo/vector-icons/Entypo';
import Ionicons from '@expo/vector-icons/Ionicons';
import { BlurView } from 'expo-blur';
import AntDesign from '@expo/vector-icons/AntDesign';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';



const Tab = createBottomTabNavigator();

const BottomTabs = () => {
    return (
        <Tab.Navigator screenOptions={{headerShown: false, tabBarShowLabel: false, tabBarStyle:styles.tabBar,tabBarBackground: () => (
            <BlurView tint="light" intensity={15} style={styles.backgroundImage} />
            ),
            }}  >
            <Tab.Screen name='Home' component={Home} options={{tabBarIcon:({focused})=>(
                <View style={styles.tabs}>
                <Entypo name="home" size={32} color="white" />                   
                 <Text style={styles.tabName}>Home</Text>
                </View>
            )}} />
            <Tab.Screen name='Amenities' component={Amenities} options={{tabBarIcon:({focused})=>(
                <View style={styles.tabs}>
                <Ionicons name="tennisball-outline" size={32} color="white" />                 
                 <Text style={styles.tabName}>Amenities</Text>
                </View>
            )}} />
            <Tab.Screen name='Access Card' component={AccessCard} options={{tabBarIcon:({focused})=>(
                <View style={styles.tabs}>
                <AntDesign name="scan1" size={32} color="white" />                 
                 <Text style={styles.tabName}>Access Card</Text>
                </View>
            )}}/>
            <Tab.Screen name='Profile' component={Profile} options={{tabBarIcon:({focused})=>(
                <View style={styles.tabs}>
                <MaterialCommunityIcons name="account-circle-outline" size={32} color="white" />                 
                 <Text style={styles.tabName}>Profile</Text>
                </View>
            )}} />
        </Tab.Navigator>
    );
}


const styles =  StyleSheet.create({
    tabBar:{
        height:116,
        borderTopLeftRadius: 22,
        borderTopRightRadius: 22,
        position: 'absolute',
    },
    backgroundImage:{
        borderTopLeftRadius: 22,
        borderTopRightRadius: 22,
        height: 116,
        width: screen.width
    },
    tabs: {
        top:2,
        alignItems:'center',
        justifyContent: 'center'
    },
    tabName:{
        color:'white',
        fontSize: 12,
        flex:1,
        top:1
    }
  
    
})

export default BottomTabs;
