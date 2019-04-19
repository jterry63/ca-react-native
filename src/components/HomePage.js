import React, { Component } from 'react';
import { Card, CardSection, Button, Header, Footer } from './common';
import { View } from 'react-native';
import firebase from 'firebase';





class HomePage extends Component {

    render() {
        return(
            
        <View>
            <Header />
<CardSection>
    <Button onPress={() => firebase.auth().signOut()}>
    Log Out
    </Button>
</CardSection>
<Footer />
</View>

       );
    }
}



export default HomePage;



