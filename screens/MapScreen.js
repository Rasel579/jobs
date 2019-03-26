import React, { Component } from 'react';
import { View, Text, Platform } from 'react-native';
import { MapView } from 'expo';
 

class MapScreen extends Component {
    render(){
        return(
            <View
            style={{
                marginTop: Platform.OS === 'android' ? 40 : 0,
                flex: 1
            }}
            >
               <MapView style={{ flex: 1 }} />
            </View>
        );
    }
}

export default MapScreen;