import {  combineReducers } from 'redux';

import filterReducer from './filters';
import newsReducer from './news';

const rootReducer = combineReducers({
    filterReducer, 
    newsReducer
})

export default rootReducer;