import { combineReducers } from 'redux';
import authReducer from './authReducer';
import jobs from './jobsReducer';
import likedJobs from './likesReducer';
export default combineReducers({
    auth: authReducer,
    jobs: jobs,
    likes: likedJobs
});