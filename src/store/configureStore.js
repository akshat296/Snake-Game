import reducers from "../reducers";
import { createStore } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger'
import { applyMiddleware,compose } from "redux";

export default function configureStore (initialState){
    return createStore(reducers, compose(applyMiddleware(thunk)));
}
