import React from 'react';
import { View, StyleSheet, StatusBar, Text, SafeAreaView } from 'react-native';
import Temp_Questions from '../data/computers';
import { Button, ButtonContainer } from '../Components/Button';

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#36B1F0',
        flex: 1,
        paddingHorizontal: 20
    },
    text: {
        color: '#fff',
        fontSize: 25,
        textAlign: 'center',
        letterSpacing: -0.02,
        fontWeight: "600"
    },
    safeArea: {
        flex: 1,
        marginTop: 100,
        justifyContent: 'space-between'
    }
})

class Quiz extends React.Component {

    render() {
        const question = Temp_Questions[0];
        return (

            <View style={styles.container}>
                <StatusBar barStyle="light-content" />
                <SafeAreaView style={styles.safeArea}>
                    <View>

                        <Text style={styles.text}>{question.question}</Text>

                        <ButtonContainer>
                            {question.answers.map((answer) => (
                                <Button
                                    key={answer.id}
                                    text={answer.text}
                                    onPress={() => alert('hello')}
                                />
                            ))}
                        </ButtonContainer>
                    </View>

                    <Text style={styles.text}>0/3</Text>

                </SafeAreaView>

            </View>
        );
    }
}

export default Quiz;