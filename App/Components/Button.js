import React from 'react';
import { View, StyleSheet,  Text, TouchableOpacity } from 'react-native';

const styles = StyleSheet.create({
    button:{
        backgroundColor:'rgba(255,255,255,0.3)',
        borderRadius:10,
        paddingVertical:15,
        alignItems:'center',
        justifyContent:'center',
        width:'46%',
        marginTop:20

    },
    text:{
        color:'#fff',
        fontSize:20,
        textAlign:'center'
    },
    ButtonContainer:{
        flexDirection:'row',
        flexWrap:"wrap",
        marginTop:20,
        justifyContent:'space-between'
    }
})

export const Button = ({text,onPress = () => {}}) => {
    <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
}

export const ButtonContainer = ({children}) => (
    <View style={styles.ButtonContainer}>
        {children}
    </View>
)