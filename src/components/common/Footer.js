//import libraries for making a component

import React from 'react';
import { Text, View, Image } from 'react-native';
import FontAwesome, { Icons } from 'react-native-fontawesome';

//make a component

const Footer = () => {
    const { textStyle, viewStyle } = styles;
    return (
        <View style={viewStyle}>
        <Text style={{ fontSize: 20, color: 'black', marginTop: 10}}><FontAwesome>{Icons.home}</FontAwesome></Text>
       
            {/* <Text style={textStyle}>{props.headerText}</Text> */}
        </View>
    );
};

const styles = {
    viewStyle: {
      backgroundColor: '#F8F8F8',
      
      alignItems: 'center',
      height: 100,
      width: '100%',
     
      shadowColor: '#000',
      shadowOffset: { width: 0, height: -.05 },
      shadowOpacity: 0.2,
      position: 'absolute',
      marginTop: 750
    
      
    },
    textStyle: {
      fontSize: 25
      
    }
  };

//make the component available to other parts of the app

export { Footer };