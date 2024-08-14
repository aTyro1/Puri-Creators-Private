import React, { useMemo, useState } from "react";
import BottomSheet from "@gorhom/bottom-sheet";
import { StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import Calender from "./Calender";

const BookingSuccess = ({navigation, route}) => {
    const snapPoints = useMemo(()=> ['40%','40%'],[])
   

    return (
        <View>
        <BottomSheet snapPoints={snapPoints} handleIndicatorStyle = {styles.indicator} style={styles.bottomSheet} handleStyle={styles.handle} backgroundStyle={{backgroundColor:'#151515'}}> 
            <View style={styles.container}>
                <Text style={{fontSize: 24, lineHeight: 32, fontWeight: 600, color: 'white'}}>Success</Text>
                <Text style={{fontSize: 18, lineHeight: 24, fontWeight: 400, color: 'white'}}>Your slot is reserved</Text>
            </View>        
        </BottomSheet>

       </View>
    );
}


const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        padding: 30
    }

  });
  

export default BookingSuccess;
