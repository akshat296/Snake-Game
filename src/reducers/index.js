import {combineReducers} from 'redux';
import login from './loginReducers';
import register from './registerReducers';
import user from './userReducers';
import game from './gameReducers';
import chat from './chatReducers';

const rootReducer = combineReducers({login,register,user,game,chat});
export default rootReducer;