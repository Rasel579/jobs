import React, { Component } from 'react';
import { View, Text, Platform } from 'react-native';

import Slides  from '../components/Slides';

const SLIDE_DATA = [
    { text: 'Welcome to Job App', color: '#03A9F4'},
    { text: 'Use Our App and Enjoy', color: '#009688'},
    {text: 'Set your location and swipe away', color: '#03A9F4'}
];


class WelcomeScreen extends Component {
    onSlidesComplete(){
       this.props.navigation.navigate('auth');
    }
    render(){
        return(
           <Slides data={SLIDE_DATA} onComplete={this.onSlidesComplete.bind(this)}/>
        );
    }
}

export default WelcomeScreen;