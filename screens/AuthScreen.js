import React, { Component } from 'react';
import { View, Text, Platform } from 'react-native';
import { connect } from 'react-redux';

import * as actions from '../actions';



class AuthScreen extends Component {
    componentDidMount(){
        this.props.facebookLogin();
    }
    render(){
        console.log(this.props);
        return(
            <View
            style={{
                marginTop: Platform.OS === 'android' ? 40 : 0
            }}
            >
                <Text>AuthScreen</Text>
                <Text>AuthScreen</Text>
                <Text>AuthScreen</Text>
                <Text>AuthScreen</Text>
                <Text>AuthScreen</Text>
                <Text>AuthScreen</Text>
            </View>
        );
    }
}



export default connect(null, actions)(AuthScreen);