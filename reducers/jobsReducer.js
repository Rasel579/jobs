import { FETCH_JOBS } from '../actions/types';


const INITIAL_STATE = {
    job_list: []
}

export default function(state=INITIAL_STATE, action){
    console.log(action.type);
    switch(action.type){
        case FETCH_JOBS:
          return action.payload;
        default:
           return state;
    }
}