
import {createStore, applyMiddleware} from "redux"

import thunk from 'redux-thunk'
import reduce from './reducers';

// const middleware =  [thunk];


export const store = createStore(
    reduce, undefined, applyMiddleware(thunk)
)
