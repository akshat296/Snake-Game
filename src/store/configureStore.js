import reducers from "../reducers";
import { createStore } from 'redux';
import thunk from 'redux-thunk';

import { applyMiddleware } from "../../../../.cache/typescript/2.6/node_modules/redux";

export default function configureStore (initialState){
    return createStore(reducers, applyMiddleware(thunk));
}
