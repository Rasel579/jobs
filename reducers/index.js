import { combineReducers } from 'redux';
import authReducer from './authReducer';
import jobs from './jobsReducer'
export default combineReducers({
    auth: authReducer,
    jobs: jobs
});