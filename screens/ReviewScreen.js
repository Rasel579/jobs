import React, { Component } from 'react';
import { View, Text, Platform } from 'react-native';
import { Button } from 'react-native-elements';


class ReviewScreen extends Component {
    
    static navigationOptions = ({navigation}) => {
           return  { 
                 headerTitle: `Review Jobs`,
                 headerBackTitle: 'A much too long text for back button from B to A',
                 headerTruncatedBackTitle: 'Back',
                 headerRight: (
                     <Button 
                     title="Settings" 
                     onPress={() => navigation.navigate('settings')}  
                      type='outline'
                     />
                 ),
                 
       }
    };

    render(){
        return(
            <View>
                <Text>ReviewScreen</Text>
                <Text>ReviewScreen</Text>
                <Text>ReviewScreen</Text>
                <Text>ReviewScreen</Text>
                <Text>ReviewScreen</Text>
                <Text>ReviewScreen</Text>
            </View>
        );
    }
}

export default ReviewScreen; 