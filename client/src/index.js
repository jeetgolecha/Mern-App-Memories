import React from 'react';
import ReactDom from 'react-dom';
// import { ReactDom } from 'react';

import {Provider} from 'react-redux';
import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';
import { configureStore } from '@reduxjs/toolkit';

import App from './app';

import './index.css';

const store = createStore(reducers, compose(applyMiddleware(thunk)))

ReactDom.render(
    <Provider store={store}>
        <App />
    </Provider>
, document.getElementById('root'));
