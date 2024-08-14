import React, {useState} from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

const Slot = () => {
    let [pressed, setPressed] = useState(false)
    return (
        <TouchableOpacity onPress={()=>setPressed(!pressed)}>
            <View style={pressed? styles.clicked:styles.unclicked}>
                        <Text style={pressed?styles.clickedText:styles.unclickedText}>12:00 - 1:00</Text>
            </View>
        </TouchableOpacity>
            
    );
}

const styles = new StyleSheet.create({
    unclicked: {
        borderColor: 'white',
        borderRadius: 8,
        padding: 4,
        borderWidth: 1   
    },
    clicked: {
        borderColor: 'white',
        borderRadius: 8,
        padding: 4,
        borderWidth: 1,
        backgroundColor: 'white'
    },
    unclickedText: {
        fontSize:14,
        fontWeight: 500,
        lineHeight: 28,
        color: 'white'
    },
    clickedText: {
        fontSize:14,
        fontWeight: 500,
        lineHeight: 28,
        color: 'black'
    }
})

export default Slot;
