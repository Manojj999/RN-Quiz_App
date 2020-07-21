import React from 'react';
import { View, StyleSheet, Button, StatusBar ,ScrollView} from 'react-native';
import spaceQuestions from '../data/space';
import wasternsQuestions from '../data/westerns';
import computerQuestions from '../data/computers';
import { RowItems } from '../Components/RowItems';


export default ({ navigation }) => (
    <ScrollView>
        <StatusBar barStyle="light-content" />
        
         {/* navigation.navigate('Quiz') => which first screen you want to navigate */}
        
        <RowItems name='Space' color="#36baf0" onPress={() => navigation.navigate('Quiz',{title:'Space',questions:spaceQuestions , color:'#36baf0'})} />
        <RowItems name='Westerns' color="#799496" onPress={() => navigation.navigate('Quiz',{title:'Westerns',questions:wasternsQuestions,color:'#799496'})} />
        <RowItems name='Computers' color="#49475b"  onPress={() => navigation.navigate('Quiz',{title:'Computers',questions:computerQuestions,color:'#49475b'})} />
        

    </ScrollView>
)