import * as React from 'react';
import TicketBooking from './Components/TicketBooking';
import { View, StyleSheet } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import BookingSuccess from './Components/BookingSuccess';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
<NavigationContainer >
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name="Booking" component={TicketBooking} />
        <Stack.Screen name="Success" component={BookingSuccess}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = new StyleSheet.create({
  container: {
    flex:1,
  }
})


