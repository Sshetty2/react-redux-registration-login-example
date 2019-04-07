import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import { store } from './_helpers';
import { App } from './App';

// // setup fake backend
// import { configureFakeBackend } from './_helpers';
// configureFakeBackend();

// the component tree gets wrapped by the Provider Component which taps into the mysterious React Context API to 'provide' state to every component down the tree The store is passed into the provider component essentially giving every component down the tree access to the store. 

// it's generally not good practice for every single component to 'subscribe' to state changes that occur to the store and so redux will generate higher order components that combines 'MapDispatchtoProps' and 'MapStatetoProps' using 'connect. This is where you will designate which actions and what state is needed on a per component basis. 

// It's good practice to build out container components that will then render presentational components with the dispatch properties and state properties that might be needed, but other design philosophies will simply incorporate the dispatch and MapStatetoProps within the component definitions themselves as is done in this project.

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('app')
);
