import React, { Component } from 'react';
import firebase from 'firebase';
import { View, Text } from 'react-native';
import { Header } from './components/common';


class App extends Component {
    componentWillMount() {
        firebase.initializeApp({
            apiKey: "AIzaSyBFVFx_WPZzA2uQUP3zYcNp3Wtcn_HJROM",
            authDomain: "auth-523a5.firebaseapp.com",
            databaseURL: "https://auth-523a5.firebaseio.com",
            projectId: "auth-523a5",
            storageBucket: "auth-523a5.appspot.com",
            messagingSenderId: "142504376049"
          });
    }
    render() {
        return (
            <View>
                <Header headerText='authentication' />
                <Text>An app</Text>
            </View>
        );
    }
}

export default App;