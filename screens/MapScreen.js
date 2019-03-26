import React, { Component } from 'react';
import { View, Text, Platform } from 'react-native';


class MapScreen extends Component {
    render(){
        return(
            <View
            style={{
                marginTop: Platform.OS === 'android' ? 40 : 0
            }}
            >
                <Text>MapScreen</Text>
                <Text>MapScreen</Text>
                <Text>MapScreen</Text>
                <Text>MapScreen</Text>
                <Text>MapScreen</Text>
                <Text>MapScreen</Text>
            </View>
        );
    }
}

export default MapScreen;