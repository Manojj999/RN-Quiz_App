import { View,Text,StyleSheet,TouchableOpacity } from 'react-native';
import React from 'react';

const styles = StyleSheet.create({
    row:{
        paddingHorizontal:15,
        paddingVertical:20,
        backgroundColor:'#36b1f0',
        marginBottom:1
    },
    text:{
        fontSize:18,
        color:'#fff',
        fontWeight:'600',

    }
})
export const RowItems = ({onPress = () => {},name,color }) => (
    <TouchableOpacity onPress={onPress} activeOpacity={0.8}>
        <View style={[styles.row,{backgroundColor:color}]}>
            <Text style={styles.text}>
                {name}
            </Text>
        </View>
    </TouchableOpacity>
)
