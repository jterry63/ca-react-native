import React, { Component } from 'react';
import { Text, ImageBackground, TouchableOpacity } from 'react-native';
import firebase from 'firebase';
import FontAwesome, { Icons } from 'react-native-fontawesome';
import { Button, Card, CardSection, Input, Spinner } from './common'

class LoginForm extends Component {
    state = { 
        email: '', 
        password: '', 
        error: '', 
        loading: false, 
        loginBtn: 'Log In',
        forgotPassword: 'Forgot Password?', 
        haveAccount: "Don't have an account yet?",
        signUp: 'Sign Up'
     };

    onButtonPress() {
        const { email, password } = this.state;

        this.setState({ error: '', loading: true});

        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(this.onLoginSuccess.bind(this))
            .catch(() => {
                firebase.auth().createUserWithEmailAndPassword(email, password)
                    .then(this.onLoginSuccess.bind(this))
                    .catch(this.onLoginFail.bind(this)) 
            });
    }

    onLoginFail() {
        this.setState({
            error: 'Authentication Failed',
            loading: false
        })
    }

    onLoginSuccess() {
        this.setState({ 
            email: '',
            password: '',
            loading: false,
            error: ''
        })
    }

    onSignUpClick() {
        this.setState({
            loginBtn: 'Sign Up',
            forgotPassword: '',
            haveAccount: '',
            signUp: ''
        })
    }

    renderButton() {
        if (this.state.loading) {
            return <Spinner size='small' />
        }

        return (<Button onPress={this.onButtonPress.bind(this)}>
                    {this.state.loginBtn}
                </Button>
        );
    }

    render() {
        return (
            <ImageBackground source={{ uri: 'https://i.imgur.com/HH3twbC.png'}} style={{width: '100%', height: '100%'}}>
            <Card>
           
                <CardSection>
                <Text style={{ fontSize: 20, color: 'rgba(255,255,255, 0.6)', marginRight: 10, marginTop: 10}}><FontAwesome>{Icons.user}</FontAwesome></Text>
                    
                    <Input
                        autoCapitalize='none'
                        label="Email"
                        placeholder="Email"
                        value={this.state.email} 
                        onChangeText={email => this.setState({ email })}
                    />
                </CardSection>

                <CardSection>
                <Text style={{ fontSize: 20, color: 'rgba(255,255,255, 0.6)', marginRight: 10, marginTop: 10}}><FontAwesome>{Icons.lock}</FontAwesome></Text>
                    <Input 
                        secureTextEntry
                        label="Password"
                        placeholder="Password"
                        value={this.state.password}
                        onChangeText={password => this.setState({ password })}
                    />
                </CardSection>
                
                <Text style={styles.errorTextStyle}>
               
                    {this.state.error}
                </Text>
               
                <CardSection>
                    {this.renderButton()}
                </CardSection>

            </Card>
            <CardSection>
                <TouchableOpacity style={{ marginLeft: 125, marginTop: 10}}><Text style={{color: 'white', fontWeight: 'bold'}}>{this.state.forgotPassword}</Text></TouchableOpacity>
            </CardSection>

            <CardSection>
                <Text style={{color: 'white', marginTop: 100, marginLeft: 100}}>{this.state.haveAccount}</Text>
            </CardSection>

            <CardSection>
            <TouchableOpacity onPress={this.onSignUpClick.bind(this)} style={{ marginLeft: 155, marginTop: 10}}><Text style={{color: 'white', fontWeight: 'bold'}}>{this.state.signUp}</Text></TouchableOpacity>

            </CardSection>
            </ImageBackground>
            
        );
    }
}

const styles = {
    errorTextStyle: {
        fontSize: 20,
        alignSelf: 'center',
        color: 'red'

    }
}

export default LoginForm;