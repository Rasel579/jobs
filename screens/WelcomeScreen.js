import _ from 'lodash';
import React, { Component } from 'react';
import { View, Text, Platform, AsyncStorage } from 'react-native';
import { AppLoading } from 'expo';


import Slides  from '../components/Slides';

const SLIDE_DATA = [
    { text: 'Welcome to Job App', color: '#03A9F4'},
    { text: 'Use Our App and Enjoy', color: '#009688'},
    {text: 'Set your location and swipe away', color: '#03A9F4'}
];


class WelcomeScreen extends Component {
    state = { token: null };

    async componentWillMount(){
       let token = await AsyncStorage.getItem('fb_token');

       if(token) {
           this.props.navigation.navigate('map');
           this.setState({ token });
       } else {     
           this.setState({ token: false });
       }
    }

    onSlidesComplete(){
       this.props.navigation.navigate('auth');  
    }
    render(){
        if (_.isNull(this.state.token)){
            return <AppLoading />;
        }
        return(
           <Slides data={SLIDE_DATA} onComplete={this.onSlidesComplete.bind(this)}/>   
        );
    }
}

export default WelcomeScreen;