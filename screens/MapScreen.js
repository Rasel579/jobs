import React, { Component } from 'react';
import { View, Text, Platform, ActivityIndicator } from 'react-native';
import { MapView } from 'expo';
 

class MapScreen extends Component {
    
    state = {
        mapLoaded: false,
        region: {
            longitude: -122,
            latitude:  37,
            longitudeDelta: 0.04,
            latitudeDelta:  0.09
        }
    }

    componentDidMount(){
        this.setState({ mapLoaded: true});
    }

    onRegionChangeComplete = (region) => {
        console.log(region);
       this.setState({ region });
    }

    render(){
        if(!this.state.mapLoaded){
            return (
                <View style={{flex: 1, justifyContent: 'center'}}>
                 <ActivityIndicator size='large' />
                </View>
            );
        }
        return(
            <View
            style={{
                marginTop: Platform.OS === 'android' ? 40 : 0,
                flex: 1
            }}
            >
               <MapView 
                 style={{ flex: 1 }} 
                 region={this.state.region}
                 onRegionChangeComplete={this.onRegionChangeComplete}
                 />
            </View>
        );
    }
}

export default MapScreen;