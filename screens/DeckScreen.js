import React, { Component } from 'react';
import { View, Text, Platform } from 'react-native';


class DeckScreen extends Component {
    render(){
        return(
            <View
            style={{
                marginTop: Platform.OS === 'android' ? 40 : 0
            }}
            >
                <Text>DeckScreen</Text>
                <Text>DeckScreen</Text>
                <Text>DeckScreen</Text>
                <Text>DeckScreen</Text>
                <Text>DeckScreen</Text>
                <Text>DeckScreen</Text>
            </View>
        );
    }
}

export default DeckScreen;