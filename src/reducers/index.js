import {combineReducers} from 'redux';
//import courses from './courseReducers';
import login from './loginReducers';
//import statusToast from './boxReducers';
const rootReducer = combineReducers({login});
export default rootReducer;