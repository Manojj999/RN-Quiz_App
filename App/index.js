import QuizIndex from './Screen/QuizIndex' 
import React from 'react';
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
// import { StyleSheet, Text, View } from 'react-native';
import Quiz from  './Screen/Quiz';

const MainStack = createStackNavigator({
    QuizIndex: {
    screen: QuizIndex,
    navigationOptions: {
      headerTitle: "Quizzes"
    }
  },
    Quiz:{
        screen:Quiz,
        navigationOptions:({navigation}) => ({
          headerTitle: navigation.getParam("title"),
          headerTintColor:'#fff',
          headerStyle:{
            backgroundColor: navigation.getParam("color"),
            borderBottomColor:navigation.getParam("color"),
          },
          
        })
    }

})

export default createAppContainer(MainStack);

