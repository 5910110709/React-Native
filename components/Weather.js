
import React from 'react';
import { StyleSheet, Text, View ,ImageBackground } from 'react-native';
import Forecast from './Forecast';

export default class Weather extends React.Component {
    constructor(props) {
    super(props);
    this.state = {
        forecast: {
            main: 'Clond', description: 'description', temp: 0
            }
        }
    }
    render() {
    return (
    <View style={styles.container}>
        <ImageBackground source={require('./bnn.jpg')} style={styles.backdrop}>
            <Text style={styles.welcome}>Zip code is {this.props.zipCode}.</Text>
            <View>
            <Forecast  {...this.state.forecast} />
            </View>
        </ImageBackground>
    </View>
    );
    }
   }
   const styles = StyleSheet.create({
    container: { 
        paddingTop: 25,
     //   backgroundColor: 'orange',

    },
    backdrop: { width: '100%', height: '100%'},
    welcome: {
        //width: 100, 
      //  height: 100, 
      flex: 1,
    //  margin: 20,
    //  margin: 10,
      textAlign: 'center',
      fontSize: 20,
    //  paddingTop: 70,
      },
   });
   
