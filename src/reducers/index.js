import {combineReducers} from 'redux';
import login from './loginReducers';
import register from './registerReducers';
import game from './gameReducers';
import chat from './chatReducers';

const rootReducer = combineReducers({login,register,game,chat});
export default rootReducer;