import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer, createBottomTabNavigator, createStackNavigator } from 'react-navigation';
import { Provider } from 'react-redux';

import store from './store';
import AuthScreen from './screens/AuthScreen';
import WelcomeScreen from './screens/WelcomeScreen';
import MapScreen from './screens/MapScreen';
import DeckScreen from './screens/DeckScreen';
import ReviewScreen from './screens/ReviewScreen';
import SettingsScreen from './screens/SettingsScreen'; 


export default class App extends React.Component {

  
  render() {
    const MainNavigator = createBottomTabNavigator(
      {
        welcome: WelcomeScreen,
        auth: AuthScreen,
        main: {
          screen: createBottomTabNavigator({
              map: MapScreen,
              deck: DeckScreen,
              review: {
                screen: createStackNavigator({
                 review: ReviewScreen,
                 settings: SettingsScreen,
              })
            }
          })
        }  
       }
      );
    const AppContainer = createAppContainer(MainNavigator);

    return (
      <Provider store={store}>
        <AppContainer />
      </Provider>  
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
