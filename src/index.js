import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import configureStore from './store/configureStore';
import { Provider } from 'react-redux';
import registerServiceWorker from './registerServiceWorker';

const Store = configureStore();

Store.subscribe(()=>{
    console.log(Store.getState());
});

ReactDOM.render(<BrowserRouter><Provider store = {Store}><App /></Provider></BrowserRouter>, document.getElementById('root'));
registerServiceWorker();
