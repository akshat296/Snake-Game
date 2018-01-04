import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import configureStore from './store/configureStore';
import { Provider } from 'react-redux';
import registerServiceWorker from './registerServiceWorker';

const Store = configureStore();
ReactDOM.render(<Provider store = {Store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
