import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import rootReducer from '../_reducers';

const loggerMiddleware = createLogger();
const middleware = [thunkMiddleware, loggerMiddleware]
const enhancers = [];
const initialState = [];

// thunk middleware 

// this is an enhancer that will enable the utility of Redux Dev tools in the chrome console.

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


// The store which is arguably the most important aspect of Redux-based state-management solutions will instantiate a Store object with the combined reducers and whatever initial state that is predefined along with specialized middleware. The store will then wrap the component tree with a Provider component.


export const store = createStore(
    rootReducer,
    initialState, 
    composeEnhancers(
    applyMiddleware(...middleware), ...enhancers
    // other store enhancers if any
  ));