import {combineReducers} from 'redux';
import pika from './loginReducers';
import register from './registerReducers';

const rootReducer = combineReducers({pika,register});
export default rootReducer;