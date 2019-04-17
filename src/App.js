import React, { Component } from 'react';
import firebase from 'firebase';
import { View } from 'react-native';
import { Header, Button, Spinner, CardSection, Card } from './components/common';
import LoginForm from './components/LoginForm';
import HomePage from './components/HomePage'


class App extends Component {
    state = { loggedIn: null }

    componentWillMount() {
        firebase.initializeApp({
            apiKey: "AIzaSyBFVFx_WPZzA2uQUP3zYcNp3Wtcn_HJROM",
            authDomain: "auth-523a5.firebaseapp.com",
            databaseURL: "https://auth-523a5.firebaseio.com",
            projectId: "auth-523a5",
            storageBucket: "auth-523a5.appspot.com",
            messagingSenderId: "142504376049"
          });

          firebase.auth().onAuthStateChanged((user) => {
            if (user) {
              this.setState({ loggedIn: true });
            } else {
              this.setState({ loggedIn: false });
            }
          });
        }
      
        renderContent() {
          switch (this.state.loggedIn) {
            case true:
              return (
              <HomePage></HomePage>
              );
            case false:
              return <LoginForm />;
            default:
              return <Spinner size="large" />;
          }
        }
        
      
        render() {
          return (
            <View>
              {/* <Header headerText="Authentication" /> */}
              {this.renderContent()}
            </View>
          );
        }
      }
      
      export default App;