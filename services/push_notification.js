import { Permissions, Notifications } from 'expo';
import { AsyncStorage } from 'react-native';
import axios from 'axios';
import { asyncLocalStorage } from 'redux-persist/storages';

const PUSH_ENDPOINT = 'http://rallycoding.herokuapp.com/api/tokens';


export default async () => {
 let previousToken = await  asyncLocalStorage.getItem('pushtoken');
 if (previousToken){
     return;
 } else {
     let {status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
     if (status !== 'granted'){
         return;
     }
     let token = await Notifications.getExpoPushTokenAsync();
     await axios.post(PUSH_ENDPOINT, { token: {token} });
     AsyncStorage.setItem('pushtoken', token);

 }

}