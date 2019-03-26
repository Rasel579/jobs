import React, { Component } from 'react';
import { View, Text, Platform, AsyncStorage } from 'react-native';
import { connect } from 'react-redux';

import * as actions from '../actions';



class AuthScreen extends Component {
    componentDidMount(){
        this.props.facebookLogin();
       this.onAuthComplete(this.props);
    }


    componentWillReceiveProps(nextPorps){
        this.onAuthComplete(nextPorps);
    }
    
    onAuthComplete(props){
        if (props.token){
            this.props.navigation.navigate('map');
            }
    }

    render(){
        console.log(this.props);
        return(
            <View
            style={{
                marginTop: Platform.OS === 'android' ? 40 : 0
            }}
            >
            </View>
        );
    }
}

const mapStateToProps = ({ auth }) => {
    return { token: auth.token };
};


export default connect(mapStateToProps, actions)(AuthScreen); 