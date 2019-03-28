import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Icon } from 'react-native-elements';
import { createAppContainer, createBottomTabNavigator, createStackNavigator } from 'react-navigation';
import { Provider } from 'react-redux';

import store from './store';
import AuthScreen from './screens/AuthScreen';
import WelcomeScreen from './screens/WelcomeScreen';
import MapScreen from './screens/MapScreen';
import DeckScreen from './screens/DeckScreen';
import ReviewScreen from './screens/ReviewScreen';
import SettingsScreen from './screens/SettingsScreen';
import registerForNotification from './services/push_notification'; 


export default class App extends React.Component {

  componentDidMount(){
    registerForNotification();
  }
  render() {
    const MainNavigator = createBottomTabNavigator(
      {
        welcome: { screen: WelcomeScreen,
                  navigationOptions: { tabBarVisible: false }
                },
        auth: { screen: AuthScreen,
               navigationOptions:{ tabBarVisible: false }
              },
        main: {
          navigationOptions: { tabBarVisible: false },
          screen: createBottomTabNavigator({
              map: MapScreen,
              deck: DeckScreen,
              review: {
                screen: createStackNavigator({
                 review: ReviewScreen,
                 settings: SettingsScreen,
              }, {
                navigationOptions: {
                  tabBarLabel: 'Review Jobs',
                  headerBackTitle: 'Back',
                  tabBarIcon: ({ tintColor }) => {
                    return <Icon name="favorite" size={30} color={tintColor} title="Review" />
                 }
                }
              })
            }
          },{
            tabBarPosition: 'bottom',
            tabBarOptions: {
              labelStyle: { fontSize: 15 }
            }
          }),
        }  
       });
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
