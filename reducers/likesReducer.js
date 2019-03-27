import _ from 'lodash';
import { REHYDRATE } from 'redux-persist/constants'
import { LIKED_JOB, CLEAR_LIKED_JOBS } from '../actions/types';

export default function(state=[], action){
    switch(action.type){
        case REHYDRATE: 
         return action.payload.likes || [];
        case LIKED_JOB:
          return _.uniqBy([
              action.payload, ...state
          ], 'id');
        
        case  CLEAR_LIKED_JOBS:
           return [];
        default:
         return state;
    }
}