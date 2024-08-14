import React, { useMemo, useState } from "react";
import BottomSheet from "@gorhom/bottom-sheet";
import { StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import Calender from "./Calender";

const TicketBooking = ({navigation}) => {
    const snapPoints = useMemo(()=> ['90%','100%'],[])


    return (
        <View style={styles.container}>
        <BottomSheet snapPoints={snapPoints} handleIndicatorStyle = {styles.indicator} style={styles.bottomSheet} handleStyle={styles.handle} backgroundStyle={{backgroundColor:'#151515'}}>
            <View style={styles.contentContainer}>
            <AntDesign name="leftcircleo" size={28} style={styles.circle} color="white" />
            <Text style={{fontSize: 24, fontWeight: 500, lineHeight: 30, color: 'white', position: 'absolute', top: 20}}>Check availability</Text>
            <Text style={{fontSize: 18, fontWeight:500, lineHeight: 24, color: 'white', position: 'absolute', top: 90, left: 30}}>Select Date</Text>
            <Text style={{top:435, left: 30,position:'absolute', color:'white', fontSize: 18, fontWeight:500, lineHeight: 24}}>Select Slot</Text>
            <Calender style={styles.calender} navigation={navigation} />
            
            </View>
          
        </BottomSheet>

       </View>
    );
}


const styles = StyleSheet.create({
    indicator: {
      width: 48,
      backgroundColor: '#070707'
    },
    container: {
      flex: 1,
      padding: 24,
      backgroundColor: '#070707'
    },
    contentContainer: {
      alignItems: 'center',
      backgroundColor:'#151515',
    },
    bottomSheet: {
        backgroundColor:'#151515', 
        borderRadius: 22,
    },
    handle: {
        backgroundColor: '#151515', 
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
    },
    circle:{
        left:30,
        position:'absolute',
        top: 20
    },
    calender: {
        position: 'absolute',
        top: 50
    },
   
   

  });
  

export default TicketBooking;
