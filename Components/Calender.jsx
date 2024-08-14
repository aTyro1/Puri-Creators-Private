import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';
import { Calendar } from 'react-native-calendars';
import AntDesign from '@expo/vector-icons/AntDesign';
import { useState } from 'react';
import Slot from './Slot';

function Calender(props) {
     const [markeddates, setMarkedDates] = useState({})   
     const [clearAll, styleClearAll] = useState(false)
     const [submit, styleSubmit] = useState(false) 
  return (
    <SafeAreaView style={styles.container}>
      <Calendar
       markedDates={markeddates}
        style= {{backgroundColor: '#151515', width: screen.width * 0.85}}
        onDayPress={day => {
            var date = day.dateString
            var newMark = {[date]: {selected: true, selectedColor: 'white'}}
            setMarkedDates(newMark)
          }}
        theme={{
            backgroundColor: '#ffffff',
            calendarBackground: '#151515',
            textSectionTitleColor: '#b6c1cd',
            textSectionTitleDisabledColor: '#d9e1e8',
            selectedDayBackgroundColor: 'white',
            selectedDayTextColor: 'black',
            todayTextColor: 'white',
            dayTextColor: 'white',
            textDisabledColor: 'grey',
            dotColor: '#00adf5',
            selectedDotColor: '#ffffff',
            arrowColor: 'white',
            disabledArrowColor: '#d9e1e8',
            monthTextColor: 'white',
            indicatorColor: 'white',
            textDayFontWeight: '500',
            textMonthFontWeight: '500',
            textDayHeaderFontWeight: '500',
            textDayFontSize: 14,
            textMonthFontSize: 18,
            textDayHeaderFontSize: 14
          }}
        
      />
            <View>
            </View>
            <View style={styles.slots}>
                <View style={{flexDirection: 'row', gap: 20}}>
                   <Slot />
                   <Slot />
                   <Slot />
                </View>
                <View style={{flexDirection: 'row', gap: 20}}>
                   <Slot />
                   <Slot />
                   <Slot />
                </View>
                <View style={{flexDirection: 'row', gap: 20}}>
                  <Slot />
                  <Slot />
                  <Slot />
                </View>
            </View>
            <View style={styles.buttons}>
          <TouchableOpacity style={clearAll?{...styles.button, backgroundColor: 'white'}:{...styles.button, backgroundColor: '#151515'}} onPress={()=>{
            styleClearAll(!clearAll)
            if(submit)
            {
              styleSubmit(!submit)
            }
            }
            }>
                <Text style={clearAll?{color:'black'}:{color:'white'}}>Clear all</Text>
            </TouchableOpacity>
            <TouchableOpacity style={submit?{...styles.button, backgroundColor: 'white'}:{...styles.button, backgroundColor: '#151515'}} onPress={()=>{
              styleSubmit(!submit)
              if(clearAll)
              {
                styleClearAll(!clearAll)
              }
              props.navigation.navigate('Success')

            }}>
                <Text style={submit?{color:'black'}:{color:'white'}}>Book now</Text>
            </TouchableOpacity>
          </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    position: 'absolute',
    top: 120,
    width: screen.width,
    alignItems: 'center'
  },
  slot: {
    flex: 1,
    top: 10
  },
  slots: {
    flexDirection: 'column',
    textAlign: 'center',
    justifyContent: 'center',
    top: 35,
    alignItems: 'center',
    gap: 10
  },
  buttons: {
    flexDirection: 'row',
    padding: 20,
    top:screen.height*0.60,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 40,
    borderColor: 'grey',
    borderWidth: 0.5,
    width: screen.width,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderBottomWidth: 0,
    position:'absolute'
    
},
button: {
    backgroundColor: '#151515',
    borderRadius: 10,
    padding: 15,
    width: 120,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'white'
}
});

export default Calender;