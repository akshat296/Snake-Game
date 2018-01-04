import {combineReducers} from 'redux';
import courses from './courseReducers';
//import statusToast from './boxReducers';
const rootReducer = combineReducers({courses});
export default rootReducer;