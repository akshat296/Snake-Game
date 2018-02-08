import {combineReducers} from 'redux';
import login from './loginReducers';
import register from './registerReducers';

const rootReducer = combineReducers({login,register});
export default rootReducer;