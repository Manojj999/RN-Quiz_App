import React from 'react';
import { View, StyleSheet, Button, StatusBar ,ScrollView} from 'react-native';
import spaceQuestions from '../data/space';
import wasternsQuestions from '../data/westerns';
import computerQuestions from '../data/computers';
import { RowItems } from '../Components/RowItems';


export default ({ navigation }) => (
    <ScrollView>
        <StatusBar barStyle="light-content" />
        <Button
            title="Go To Next Screen"
            onPress={() => navigation.navigate('Quiz')}
        // which first screen you want to navigate
        />
        
        <RowItems name='Space' color="#36baf0" onPress={() => navigation.navigate('Quiz')} />
        <RowItems name='westerns' color="#799496" onPress={() => navigation.navigate('Quiz')} />
        <RowItems name='computers' color="#49475b"  onPress={() => navigation.navigate('Quiz')} />
        

    </ScrollView>
)